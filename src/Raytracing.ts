import { GameObjectTypes } from "./game-object/GameObjectTypes.js";
import { GameObject } from "./game-object/GameObject.js";
import { Vector3D } from "./Vector3D.js";
import { Sphere } from "./Sphere.js";
import { Point3D } from "./Point.js";
import { Light } from "./light/Light.js";
import { Scene } from "./Scene.js";
import { LightType } from "./light/LightType.js";
import { PointLight } from "./light/PointLight.js";
import { DirectionalLight } from "./light/DirectionalLight.js";
import { Color } from "./Color.js";

export class Raytracing {
  static intersectSphere(origin: Point3D, direction: Vector3D, sphere: Sphere) {
    // vector origin camera > center of sphere
    const CO = Point3D.getVector(sphere.position, origin);
    const a = Vector3D.dotProduct(direction, direction);
    const b = 2 * Vector3D.dotProduct(CO, direction);
    const c = Vector3D.dotProduct(CO, CO) - sphere.radius * sphere.radius;
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      return { t1: Infinity, t2: Infinity };
    }

    const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return { t1, t2 };
  }

  static computeLighting(lights: Light[], P: Point3D, N: Vector3D) {
    let intensity = 0.0;
    for (let light of lights) {
      if (light.type === LightType.Ambient) {
        intensity += light.intensity;
      } else {
        let L;
        if (light instanceof PointLight) {
          L = Point3D.getVector(light.position, P);
        }
        if (light instanceof DirectionalLight) {
          L = light.direction;
        }

        const normNL = Vector3D.dotProduct(N, L);
        if (normNL > 0) {
          intensity +=
            light.intensity *
            (normNL / (Vector3D.normalize(N) * Vector3D.normalize(L)));
        }
      }
    }
    return intensity;
  }

  static raytracing(
    gameObjects: GameObject[],
    lights: Light[],
    Origin: Point3D,
    Distance: Vector3D,
    tMin: number,
    tMax: number
  ) {
    let closest_t = Infinity;
    let closest_object = null;

    for (let gameObject of gameObjects) {
      // check if ray intersect with a sphere
      if (gameObject.type === GameObjectTypes.Sphere) {
        const { t1, t2 } = Raytracing.intersectSphere(
          Origin,
          Distance,
          gameObject as Sphere
        );
        if (t1 > tMin && t1 < tMax && t1 < closest_t) {
          closest_t = t1;
          closest_object = gameObject;
        }
        if (t2 > tMin && t2 < tMax && t2 < closest_t) {
          closest_t = t2;
          closest_object = gameObject;
        }
      }
    }

    if (closest_object === null) {
      return null;
    }

    // intersection is Origin Point (camera) + t1 * DistanceVector
    const P = Vector3D.sum(
      Origin,
      Vector3D.getColinearVector(Distance, closest_t)
    );

    const N = Point3D.getUnitVector(P, closest_object.position);
    return Color.applyIntensity(
      closest_object.color,
      this.computeLighting(lights, P, N)
    );
  }
}

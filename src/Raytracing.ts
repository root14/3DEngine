import { GameObjectTypes } from "./models/GameObjectTypes.js";
import { GameObject } from "./GameObject.js";
import { Vector3D } from "./Vector3D.js";
import { Sphere } from "./Sphere.js";

export class Raytracing {
  static intersectSphere(
    origin: Vector3D,
    direction: Vector3D,
    sphere: Sphere
  ) {
    // vector origin camera > center of sphere
    const CO = Vector3D.substract(origin, sphere.position);
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

  static raytracing(
    gameObjects: GameObject[],
    Origin: Vector3D,
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

    return closest_object.color;
  }
}

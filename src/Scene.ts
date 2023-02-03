import { Camera } from "./Camera.js";
import { GameObject } from "./game-object/GameObject.js";
import { Light } from "./light/index.js";
import { Vector3D } from "./Vector3D.js";

export class Scene {
  private _objects: GameObject[] = [];
  private _camera: Camera = new Camera(new Vector3D(0, 0, 0));
  private _lights: Light[] = [];

  public add(gameObject: GameObject): Scene {
    this._objects.push(gameObject);
    return this;
  }

  public addLight(light: Light): Scene {
    this._lights.push(light);
    return this;
  }

  get objects(): GameObject[] {
    return this._objects;
  }

  get lights(): Light[] {
    return this._lights;
  }

  get camera(): Camera {
    return this._camera;
  }
}

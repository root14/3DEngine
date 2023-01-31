import { Camera } from "./Camera.js";
import { GameObject } from "./GameObject.js";
import { Vector3D } from "./Vector3D.js";

export class Scene {
  private _objects: GameObject[] = [];
  private _camera: Camera = new Camera(new Vector3D(0, 0, 0));

  public add(gameObject: GameObject): Scene {
    this._objects.push(gameObject);
    return this;
  }

  get objects(): GameObject[] {
    return this._objects;
  }

  get camera(): Camera {
    return this._camera;
  }
}

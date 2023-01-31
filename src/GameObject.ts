import { GameObjectTypes } from "./models/GameObjectTypes.js";
import { Vector3D } from "./Vector3D.js";

export class GameObject {
  name: string = "";
  type: GameObjectTypes;
  position: Vector3D;

  constructor(position: Vector3D) {
    this.position = position;
  }
}

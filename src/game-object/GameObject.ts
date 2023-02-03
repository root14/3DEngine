import { GameObjectTypes } from "./GameObjectTypes.js";
import { Point3D } from "../Point.js";

export class GameObject {
  name: string = "";
  type: GameObjectTypes;
  position: Point3D;

  constructor(position: Point3D) {
    this.position = position;
  }
}

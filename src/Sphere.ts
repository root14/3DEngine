import { Vector3D } from "./Vector3D.js";
import { GameObject } from "./GameObject.js";
import { Color } from "./Color.js";
import { GameObjectTypes } from "./models/GameObjectTypes.js";

export class Sphere extends GameObject {
  radius: number;
  color: Color;

  constructor({
    position,
    radius,
    color,
  }: {
    position: Vector3D;
    radius: number;
    color: Color;
  }) {
    super(position);

    this.type = GameObjectTypes.Sphere;
    this.radius = radius;
    this.color = color;
  }
}

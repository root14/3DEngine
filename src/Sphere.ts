import { GameObject } from "./game-object/GameObject.js";
import { Color } from "./Color.js";
import { GameObjectTypes } from "./game-object/GameObjectTypes.js";
import { Point3D } from "./Point.js";

export class Sphere extends GameObject {
  radius: number;
  color: Color;

  constructor({
    position,
    radius,
    color,
  }: {
    position: Point3D;
    radius: number;
    color: Color;
  }) {
    super(position);

    this.type = GameObjectTypes.Sphere;
    this.radius = radius;
    this.color = color;
  }
}

import { Point3D } from "../Point.js";
import { Light } from "./Light.js";
import { LightType } from "./LightType.js";

export class PointLight extends Light {
  type = LightType.Point;
  position: Point3D = new Point3D(0, 0, 0);

  constructor({
    intensity,
    position,
  }: {
    intensity: number;
    position: Point3D;
  }) {
    super({ intensity });
    this.position = position;
  }
}

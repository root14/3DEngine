import { Vector3D } from "../Vector3D.js";
import { Light } from "./Light.js";
import { LightType } from "./LightType.js";

export class DirectionalLight extends Light {
  type = LightType.Directional;
  intensity: number;
  direction: Vector3D;

  constructor({
    intensity,
    direction,
  }: {
    intensity: number;
    direction: Vector3D;
  }) {
    super({ intensity });
    this.direction = direction;
  }
}

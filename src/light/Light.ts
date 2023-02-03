import { LightType } from "./LightType.js";

export class Light {
  type: LightType;
  intensity: number;

  constructor({ intensity }: { intensity: number }) {
    this.intensity = intensity;
  }
}

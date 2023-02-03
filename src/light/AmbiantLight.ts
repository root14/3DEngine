import { Light } from "./Light.js";
import { LightType } from "./LightType.js";

export class AmbiantLight extends Light {
  type = LightType.Ambient;
}

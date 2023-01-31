import { GameObject } from "./GameObject.js";
import { GameObjectTypes } from "./models/GameObjectTypes.js";

export class Camera extends GameObject {
  type = GameObjectTypes.Camera;
}

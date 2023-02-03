import { GameObject } from "./game-object/GameObject.js";
import { GameObjectTypes } from "./game-object/GameObjectTypes.js";

export class Camera extends GameObject {
  type = GameObjectTypes.Camera;
}

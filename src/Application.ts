import { Canvas } from "./Canvas.js";
import { Scene } from "./Scene.js";

export class Application {
  private width: number;
  private height: number;
  private canvas: Canvas;
  private scene: Scene;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.bootstrap();
  }

  private bootstrap() {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    this.canvas = new Canvas(canvas, this.width, this.height);
    document.body.appendChild(this.canvas.htmlElement);
  }

  addScene(scene) {
    this.scene = scene;
    this.canvas.render(scene);
  }

  render() {
    this.canvas.render(this.scene);
  }
}

import { Color } from "./Color.js";
import { Raytracing } from "./Raytracing.js";
import { Scene } from "./Scene.js";
import { Vector3D } from "./Vector3D.js";
export class Canvas {
  protected width: number;
  protected height: number;
  protected backgroundColor = new Color(255, 255, 255, 255);
  protected _htmlElement: HTMLCanvasElement;
  protected context;
  protected frame;
  protected viewportWidth: number = 1;
  protected viewportHeight: number = 1;

  constructor(canvas: HTMLCanvasElement, width: number, height: number) {
    this.width = width;
    this.height = height;
    this._htmlElement = canvas;
    this.context = canvas.getContext("2d");
    this.frame = this.context.getImageData(0, 0, width, height);
    this._htmlElement.setAttribute("height", this.height.toString());
    this._htmlElement.setAttribute("width", this.width.toString());
  }

  get htmlElement(): HTMLCanvasElement {
    return this._htmlElement;
  }

  /**
   * put color for pixels on next frame imageData
   * @param {*} x
   * @param {*} y
   * @param {*} color
   */
  drawPixel(x, y, color) {
    /**
     * convert coordinate to have 0 in center of viewport
     * Y positive to the top
     * X positive to the right
     */
    const canvasX = this.width / 2 + x;
    const canvasY = this.height / 2 - y - 1;

    this.frame.data[canvasX * 4 + canvasY * this.width * 4] = color.red || 0;
    this.frame.data[canvasX * 4 + canvasY * this.width * 4 + 1] =
      color.green || 0;
    this.frame.data[canvasX * 4 + canvasY * this.width * 4 + 2] =
      color.blue || 0;
    this.frame.data[canvasX * 4 + canvasY * this.width * 4 + 3] =
      color.alpha || 255;
  }

  /**
   * Viewport position & size is measured in world unit but canvas in pixels
   * difference is scale.
   * so we convert pixels to viewport position in world unit
   * @returns
   */
  canvasToViewportPos(canvasX, canvasY) {
    const viewportX = canvasX * (this.viewportWidth / this.width);
    const viewportY = canvasY * (this.viewportHeight / this.height);
    // 1 is distance from camera to viewport
    return new Vector3D(viewportX, viewportY, 1);
  }

  render(scene: Scene) {
    console.log(scene.objects);
    for (let i = -(this.height / 2); i < this.height / 2; i++) {
      for (let j = -(this.width / 2); j < this.width / 2; j++) {
        // for every pixel trace a ray to viewport point
        const direction = this.canvasToViewportPos(j, i);
        const color =
          Raytracing.raytracing(
            scene.objects,
            scene.camera.position,
            direction,
            1,
            Infinity
          ) ?? this.backgroundColor;
        this.drawPixel(j, i, color);
      }
    }
    this.context.putImageData(this.frame, 0, 0);
  }
}

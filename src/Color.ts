export class Color {
  private _red: number = 0;
  private _green: number = 0;
  private _blue: number = 0;
  private _alpha: number = 255;

  constructor(red: number, green: number, blue: number, alpha: number = 255) {
    this._red = red;
    this._green = green;
    this._blue = blue;
    this._alpha = alpha;
  }

  set red(value: number) {
    this._red = Math.min(Math.max(value, 0), 255);
  }
  get red() {
    return this._red;
  }

  set green(value: number) {
    this._green = Math.min(Math.max(value, 0), 255);
  }
  get green() {
    return this._green;
  }

  set blue(value: number) {
    this._blue = Math.min(Math.max(value, 0), 255);
  }
  get blue() {
    return this._blue;
  }

  set alpha(value: number) {
    this._alpha = Math.min(Math.max(value, 0), 255);
  }
  get alpha() {
    return this._alpha;
  }
}

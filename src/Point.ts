import { Vector3D } from "./Vector3D.js";

export class Point3D {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Calculate norme between 2 3D points
   * @param A {Point3D}
   * @param B {Point3D}
   * @returns {number}
   */
  static magnitude(A: Point3D, B: Point3D): number {
    const x = Math.pow(B.x - A.x, 2);
    const y = Math.pow(B.y - A.y, 2);
    const z = Math.pow(B.z - A.z, 2);
    return Math.sqrt(x + y + z);
  }

  static getVector(A: Point3D, B: Point3D): Vector3D {
    return new Vector3D(B.x - A.x, B.y - A.y, B.z - A.z);
  }

  static getUnitVector(A: Point3D, B: Point3D): Vector3D {
    const AB = this.getVector(A, B);
    return Vector3D.unitarize(AB);
  }
}

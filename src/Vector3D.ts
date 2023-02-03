export class Vector3D {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static substract(A: Vector3D, B: Vector3D): Vector3D {
    return new Vector3D(B.x - A.x, B.y - A.y, B.z - A.z);
  }

  static dotProduct(A: Vector3D, B: Vector3D): number {
    return A.x * B.x + A.y * B.y + A.z * B.z;
  }

  static sum(A: Vector3D, B: Vector3D): Vector3D {
    return new Vector3D(A.x + B.x, A.y + B.y, A.z + B.z);
  }

  static getColinearVector(A: Vector3D, k: number): Vector3D {
    return new Vector3D(A.x * k, A.y * k, A.z * k);
  }

  static normalize(A: Vector3D): number {
    return Math.sqrt(Math.pow(A.x, 2) + Math.pow(A.y, 2) + Math.pow(A.z, 2));
  }

  /**
   * return unit vector
   * @param A
   * @param B
   * @returns
   */
  static unitarize(AB: Vector3D): Vector3D {
    const norm = this.normalize(AB);
    return new Vector3D(AB.x / norm, AB.y / norm, AB.z / norm);
  }
}

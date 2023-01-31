export class Vector3D {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static substract(A, B): Vector3D {
    return new Vector3D(A.x - B.x, A.y - B.y, A.z - B.z);
  }

  static dotProduct(A, B): number {
    return A.x * B.x + A.y * B.y + A.z * B.z;
  }
}

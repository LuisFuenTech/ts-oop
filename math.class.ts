export class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]): number {
    return numbers.sort((a, b) => b - a)[0];
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 21, 3, 4, 5));

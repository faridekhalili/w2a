export class Calculator {
  public add(x: number, y: number) : number {
    return x + y;
  }
  public subtract(x: number, y: number) : number {
    return x - y;
  }
  public multiply(x: number, y: number) : number {
    return x * y;
  }
  public divide(x: number, y: number) : number {
    if (y == 0)
      return 0
    else
      return x / y;
  }
};

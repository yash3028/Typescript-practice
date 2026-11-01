function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, prefix = "Hello"): string {
  return `${prefix}, ${name}`;
}

function log(message: string): void {
  console.log(message);
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

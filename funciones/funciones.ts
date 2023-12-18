function sumar(a: number, b: number): number {
    return a + b;
}

let resultado: number = sumar(3, 4);

type OperacionMatematica = (a: number, b: number) => number;

let suma: OperacionMatematica = (a, b) => a + b;
let resta: OperacionMatematica = (a, b) => a - b;

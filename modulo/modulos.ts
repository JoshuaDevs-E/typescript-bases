export const PI = 3.14;

export function calcularCircunferencia(diametro: number): number {
    return PI * diametro;
}

// En otro archivo
import { PI, calcularCircunferencia } from "./geometria";

console.log(calcularCircunferencia(5));

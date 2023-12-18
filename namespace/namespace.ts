namespace Geometria {
    export const PI = 3.14;

    export function calcularCircunferencia(diametro: number): number {
        return PI * diametro;
    }
}

console.log(Geometria.calcularCircunferencia(5));

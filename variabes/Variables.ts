let edad: number = 25; // number
let precio: number = 99.99; // float
let nombre: string = "Juan"; // string
let mensaje: string = `Hola, ${nombre}!`; // string
let esValido: boolean = true; // boolean
let estaActivo: boolean = false; // boolean
let numeros: number[] = [1, 2, 3, 4, 5]; // array
let frutas: string[] = ["manzana", "banana", "cereza"];// array
let persona: [string, number] = ["Juan", 30];// tuple
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}// enum

let dia: DiaSemana = DiaSemana.Martes;// enum

let variableIndefinida: any = 5;   // any
variableIndefinida = "Hola";   // any

function imprimirMensaje(): void {
    console.log("Hola, TypeScript");// void
}

let valorNulo: null = null; // null
let valorIndefinido: undefined = undefined;// undefined

let objeto: object = { clave: "valor" };// object
interface Persona {
    nombre: string;
    edad: number;
}

function imprimirPersona(persona: Persona): void {
    console.log(persona.nombre + " tiene " + persona.edad + " años.");
}

let usuario: Persona = { nombre: "Juan", edad: 25 };
imprimirPersona(usuario);

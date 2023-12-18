class Coche {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    conducir(): void {
        console.log("Conduciendo un coche de marca " + this.marca);
    }
}

let miCoche = new Coche("Toyota");
miCoche.conducir();

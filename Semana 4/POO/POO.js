let peliculasLista = [];

function Pelicula(nombre, vista, duracion) {
    this.nombre = String(nombre);
    this.vista = Boolean(vista);
    this.duracion = Number(duracion);

    this.informacion = function() {
        console.log(`
            Título de la película ${this.nombre}
            Ya fue vista ${this.vista}
            Duración de la película ${this.duracion}`);
    }
}

const pelicula1 = new Pelicula("Matrix", false, 190);
const pelicula2 = new Pelicula("Remember me", true, 180);

peliculasLista.push(pelicula1, pelicula1);

// console.log(peliculasLista);
// console.log();

// Crear objeto con un objeto existente tomándolo como prototipo

const avatar = Object.create(pelicula1);

peliculasLista.push(avatar);
avatar.informacion();

avatar.nombre =  "avatar";
avatar.vista = "sí";
avatar.informacion();

// Date object

console.log(Date());

let fechaActual = new Date();

console.log(fechaActual.toDateString());

const fechaEspecifica = new Date(2010,0,2); // meses inician desde 0, días desde 1

console.log(fechaEspecifica.toDateString());

// Ejemplo clase

class Celular{
    constructor(marca, anio, activo = true) {
        this.marca =  marca;
        this.anio =  anio;
        this.activo = activo;
    }

    antiguedad(){
        let fechaActual = new Date();
        const anioActual = fechaActual.getFullYear();
        return anioActual - this.anio;
    }

    desactiva(){
        this.activo = false;
    }
}

let miCelular = new Celular("Samsung", 2020);

console.log(miCelular);

console.log(miCelular.antiguedad());


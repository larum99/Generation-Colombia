class Contenido {
    constructor(titulo, genero, anio, disponible = true) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = disponible;
    }

    ficha() {
        return `
                Título: ${this.titulo}, Género: ${this.genero}, Año: ${this.anio}
                `
    }

    retirar() {
        this.disponible = false;
        return `${this.titulo} ha sido retirado del catálogo.`;
    }

    estado() {
        if (this.disponible) {
        return "Disponible";
        } else {
        return "Retirado";
        }
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;

        return `${horas}h ${minutos}min`
    }

    ficha() {
        return `
                Título: ${this.titulo}
                Género: ${this.genero}
                Año: ${this.anio}
                Duración: ${this.duracionFormateada()}`;
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.anio = anio;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `
                Título: ${this.titulo}
                Género: ${this.genero}
                Año: ${this.anio}
                Temporadas: ${this.temporadas}
                Total episodios ${this.totalEpisodios()}`
    }
}

// películas

const pelicula1 = new Pelicula('Interestellar', 'Ciencia Ficción', 2014, 169);
const pelicula2 = new Pelicula('Titanic', 'Drama', 1997, 194);

const pelicula3 = new Pelicula('El Padrino', 'Crimen', 1972, 175);

// series

const serie1 = new Serie('Dark', 'Suspenso', 2017, 3);
serie1.registrarEpisodios(10);

const serie2 = new Serie('Breaking Bad', 'Drama', 2008, 5);
serie2.registrarEpisodios(13);

const serie3 = new Serie('Stranger Things', 'Ciencia Ficción', 2016, 4);
serie3.registrarEpisodios(9);

// catálogo

const catalogo = [pelicula1, pelicula2, pelicula3, serie1, serie2, serie3];

console.log('Catálogo');

for (const contenido of catalogo) {
    console.log(contenido.ficha());
}

// retirar

pelicula2.retirar();
serie1.retirar();

console.log('Estados')
console.log(`${pelicula2.titulo}: ${pelicula2.estado()}`);
console.log(`${serie1.titulo}: ${serie1.estado()}`);

// disponibles

let disponibles = 0;

for (const contenido of catalogo) {
    if (contenido.disponible) {
        disponibles++;
    }
}

console.log(`Contenidos disponibles: ${disponibles}`);


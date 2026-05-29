// Libro

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function() {
        if (this.prestado === false) {
            this.prestado = true;
            return `Has prestado "${this.titulo}" de ${this.autor}.`;
        } else {
            return `Error: "${this.titulo}" ya está prestado.`;
        }
    }
}

console.log('\nLibro \n');
const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez');
console.log(libro1.prestar());

const libro2 = new Libro('El castillo de Cristal', 'Jeannette Walls');
console.log(libro2.prestar())

// Lista de compras

function ListaDeCompras() {
    this.products = [];

    this.agregarProducto = function(producto) {
        this.products.push(producto);
        return `Producto "${producto}" agregado a la lista de compras.`;
    }

    this.mostrarLista = function() {
        return `Lista de compras: ${this.products.join(', ')}.`;
    }
}

console.log('\nLista de Compras \n')
const lista = new ListaDeCompras();
console.log(lista.agregarProducto('Leche'));
console.log(lista.agregarProducto('Pan'));
console.log(lista.mostrarLista());
//console.log(lista.products[0]);

// Reproductor de música

function ReproductorDeMusica() {
    this.estado = 'reproduciendo'

    this.play = function() {
        if (this.estado === 'detenido' || this.estado === 'pausado') {
            this.estado = 'reproduciendo';
            return 'Reproduciendo música...';
        } else  {
            return 'Ya se está reproduciendo música'
        }
    }

    this.pausar = function() {
        if (this.estado === 'reproduciendo') {
            this.estado = 'pausado';
            return 'Música pausada.';
        } else {
            return 'No hay música reproduciéndose.';
        }
    }

    this.detener = function() {
        this.estado = 'detenido';
        return 'Música detenida.';
    }
}

console.log('\nReproductor de música \n')
const reproductor1 = new ReproductorDeMusica();
console.log(reproductor1.play());

const reproductor2 = new ReproductorDeMusica();
console.log(reproductor2.pausar());

const reproductor3 = new ReproductorDeMusica();
console.log(reproductor3.detener());


// Carrito de compras con descuentos


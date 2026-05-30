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
    this.estado = 'detenido'

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

function Carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function(producto, precio) {
        this.productos.push(producto);
        this.total += precio;
        return `Producto ${producto} agregado a la lista.`
    };

    this.calcularDescuento =  function() {
        let finalTotal = this.total;
        if (this.total > 100 ) {
            finalTotal = this.total - (this.total * 0.1);
            return `Se aplicó 10% de desceunto. El total es: ${finalTotal}`;
        } else if (this.total > 50 && this.total <= 100) {
            finalTotal = this.total - (this.total * 0.05);
            return `Se aplicó 5% de descuento. El total es: ${finalTotal}`;
        } else {
            return `No se aplica descuento ${this.total}`;
        }
    }
}

console.log(`\nCarrito de Compras \n`)

const carrito1 = new Carrito();
const total = 50;
console.log(carrito1.agregarProducto('Papitas', total));
console.log(carrito1.total);
console.log(carrito1.calcularDescuento(total));

console.log(`\n`)

const carrito2 = new Carrito();
const total2 = 100;
console.log(carrito2.agregarProducto('Manzanas', total2));
console.log(carrito2.total);
console.log(carrito2.calcularDescuento(total2))

console.log(`\n`)

const carrito3 = new Carrito();
const total3 = 200;
console.log(carrito3.agregarProducto('Pera', total3));
console.log(carrito3.total);
console.log(carrito3.calcularDescuento(total3));

console.log(`\n`)

const carrito4 = new Carrito();
carrito4.agregarProducto("Papitas", 30);
carrito4.agregarProducto("Gaseosa", 40);
carrito4.agregarProducto("Chocolate", 50);

console.log(carrito4.productos);
console.log(carrito4.total);
console.log(carrito4.calcularDescuento());
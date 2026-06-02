import { Producto, ProductoDigital } from './producto.js';
import { Usuario, UsuarioVIP } from './usuario.js'
import { calcularTotalCarrito } from './utilidades.js';

// usuarios

const cliente = new Usuario(
    'Laura',
    'larumbs99@gmail.com'
);

const admin = new Usuario(
    'Samuel',
    'samuel@gmail.com',
    'Administrador'
);

//usuario VIP

const usuario = new UsuarioVIP(
    'Santiago',
    'santiago@gmail.com',
    'Gold'
);

// productos

const teclado =  new Producto(
    'Teclado mecánico',
    150000,
    'Tecnología'
);

const silla = new Producto(
    'Silla ergonómica',
    500000,
    'Mobiliario'
);

// productos digitales

const cursoJS = new ProductoDigital(
    'Curso JS',
    120000,
    'Mensual'
);

const cursoJava = new ProductoDigital(
    'Curso Java',
    250000,
    'De por vida'
);

// desactivar usuario

cliente.desactivar();

console.log('Usuario desactivado');
console.log(cliente.resumen());

// descuento

console.log('Descuento del 20%')
console.log(teclado.aplicarDescuento(20));


// tarjetas

console.log('Productos');

const productos = [teclado, silla, cursoJS, cursoJava];

for (const producto of productos) {
    console.log(producto.tarjeta());
};

// resumenes

console.log('Usuarios');

const usuarios = [cliente, admin, usuario];

for (const usuario of usuarios) {
    console.log(usuario.resumen());
};

// total carrito 

const carrito = [teclado, silla, cursoJS, cursoJava];

console.log('Total carrito:', calcularTotalCarrito(carrito));







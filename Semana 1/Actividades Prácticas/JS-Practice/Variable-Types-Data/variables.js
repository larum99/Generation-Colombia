let name = 'Pepe';
console.log(name);

/*
let  puedo actualizar el valor más adelante
var
cons  no puedo actualizar el valor, es fijo
 */

let precioPan = 500;
let precioLeche = 4000;

let totalCompra = precioLeche + precioPan;

console.log('El total de la compra es: ', totalCompra)

let division = 10/2

console.log('El resultado de la división es: ' + division);

let learnerName = 'Laura';
let learnerLastName = 'Barona';
let city = 'Tuluá';

let mensajeBackTicks =  `Bienvenido ${learnerName} ${learnerLastName} desde ${city}`;

console.log(mensajeBackTicks);

// Boolean

let edad = 20;
let puedeEntrar = edad >= 18;

console.log('Edad: ', edad);
console.log('¿Puede entrar?: ', puedeEntrar);

// Operadores de comparación

/* 
- menor que <
- mayor que >
- menor o igual que <=
- mayor o igual que >=
- igualdad == (compara solo el valor tras convertir tipos)
- estrictamente igual a === (compara valor y tipo sin convertir)
- diferente !==
*/

// arrays

let listaDeCompra = ['pan', 'leche'];

console.log(listaDeCompra);

console.log(`Primer elemento: ' ${listaDeCompra[0]}`);

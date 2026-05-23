import moment from 'moment'; // Importar la biblioteca Moment.js
// Función sin parámetros
/* function saludar() {
    console.log('Hola, bienvenido a la función de saludo.');
} */

// saludar();

// Función con parámetros
let nombre = 'Bob';
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido a la función de saludo.`);
}

saludar(nombre);

// Función con múltiples parámetros
function sumar(a, b) {
    let resultado = a + b;
    console.log(`La suma de ${a} y ${b} es: ${resultado}`);
}

sumar(5, 3);

// Función con valor de retorno
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 6));

// Funciones integradas (Built-in functions)
let texto = "Hola Mundo";
console.log(texto.length);  // es una propiedad
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.includes("Mundo"));

// libreria - biblioteca 

let ahora = moment();
console.log("Fecha y hora actual:", ahora.format('YYYY-MM-DD HH:mm:ss'));
console.log(ahora.format('dddd'));
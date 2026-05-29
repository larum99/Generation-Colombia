// Variables y tipos de datos primitivos

// Declaración de variables

// Ejercicio 1

let name = "Laura";
let age = 27;
let isStudent = true;

// Ejercicio 2

let sinValor;
let valorNulo = null;

console.log(sinValor); // undefined
console.log(valorNulo); // null

// Ingreso de datos por teclado

// Ejercicio 1

const prompt = require('prompt-sync')();

let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (dd/mm/yyyy):");
let edad = 2026 - fechaNacimiento.split("/")[2];

console.log("Su edad es: " + edad);

// Ejercicio 2

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let suma = numero1 + numero2;
console.log("La suma de los dos números es: " + suma);

// Condicional if

// Ejercicio 1|

let edad2 = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
    console.log("Puedes entrar.");
} else {
    console.log("No puedes entrar.");
}

// Ejercicio 2

let numero = parseFloat(prompt("Inhgrese un número: "));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Bucle while

// Ejercicio 1.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));
let contador = 1;

while (contador <= numero) {
    console.log(contador);
    contador++;
}

// Ejercicio 2

const prompt = require('prompt-sync')();

let contraseña = prompt("Ingrese la contraseña: ");

const contraseñaCorrecta = "1234";

while (contraseña !== contraseñaCorrecta) {
    console.log("Contraseña incorrecta. Intente nuevamente.");
    contraseña = prompt("Ingrese la contraseña: ");
}

console.log("Contraseña correcta. Bienvenido.");

// Bucle for

// Ejercicio 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Ejercicio 2

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
}
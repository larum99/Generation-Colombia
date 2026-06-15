const prompt = require('prompt-sync')();

let celsius;

do {
    celsius = prompt("Ingrese la temperatura en grados Celsius: ");

    if (isNaN(celsius) || celsius.trim() === "") {
        console.log("Error: Debe ingresar un valor numérico.");
    }

} while (isNaN(celsius) || celsius.trim() === "");

celsius = Number(celsius);

const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`Grados Kelvin: ${kelvin}`);
console.log(`Grados Fahrenheit: ${fahrenheit}`);
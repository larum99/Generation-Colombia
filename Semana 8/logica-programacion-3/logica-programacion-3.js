const prompt = require('prompt-sync')();

let numero = Number(prompt('Ingrese el número: '))

let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log(`El factorial de ${numero} es: ${factorial}`)
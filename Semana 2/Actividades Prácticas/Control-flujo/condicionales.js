const prompt = require('prompt-sync')();

let comida = prompt('¿Cuál es la mejor comida?: ')
let comidaFormateada = comida.toLowerCase();

if (comidaFormateada === 'arroz') {
    console.log(`${comida} es la mejor comida`)
} else if (comidaFormateada === 'sopa') {
    console.log(`${comida} es la mejor comida`)
} else {
    console.log('No conozco esa comida')
}
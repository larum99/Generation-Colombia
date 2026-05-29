/* // 1 Calculadora de propinas

function calcularPropina(total, porcentaje) {
    return total * (porcentaje / 100);
}



let propina = calcularPropina(80000, 15);
let totalConPropina = console.log(80000 + propina);


// 2 Validar contraseña

function validarContrasena(contrasena) {
    let valida = false;

    if (contrasena.length >= 8 && /[A-Z]/.test(contrasena) && /[0-9]/.test(contrasena)) {
        valida = true;
    }

    return valida;
}

let contraseña = validarContrasena('pppppp0pP');
console.log(contraseña);

// 3 Buscar producto en inventario

const inventario = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Zapatos', precio: 50 }
]
function buscarProducto(nombre, inventario) {
    for (let producto of inventario) {
        if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
            return producto;
        }
    }
    return null;
}

console.log(buscarProducto('camisa', inventario));

// 4 Calcular promedio de calificaciones

const prompt = require('prompt-sync')();

let notas = [];

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas: "));

for (let i = 0; i < cantidadNotas; i++){
    notas.push(parseFloat(prompt(`Ingrese la nota ${i + 1}: `)))
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}

console.log(calcularPromedio(notas));
 */
// 5 Filtrar usuario por edad

const usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 }
]

const prompt = require('prompt-sync')();

let edadMinima = parseInt(prompt("Ingrese la edad mínima: "));

function filtrarUsuarios(usuarios, edadMinima) {
    for (let usuario of usuarios) {
        if (usuario.edad >= edadMinima) {
            console.log(usuario);
        }
    }
}

filtrarUsuarios(usuarios, edadMinima);

// 6 contador de palabras

function contarPalabras(frase) {
    let palabras = frase.trim().split(/\s+/);
    return palabras.length;
}
import { verificarPin, mostrarMenu, consultarSaldo, retirarDinero, depositarDinero, calcularInteres, convertirSaldoADolares,  } from './funciones-cajero.js';

import prompt from 'prompt-sync';
const promptSync = prompt();

const pinCorrecto = "1234";
let saldo = 500000; 

console.log("Bienvenido al Cajero Automático");
const pinIngresado = promptSync("Ingrese su PIN: ");

if (verificarPin(pinIngresado, pinCorrecto)) {
    let opcion_e = 0;
    while (opcion_e !== 6) {
        mostrarMenu();  
        opcion_e = parseInt(promptSync("Ingrese su opción: "));
        switch (opcion_e) {
            case 1:
                consultarSaldo(saldo);
                break;
            case 2:
                saldo = retirarDinero(saldo);
                break;
            case 3:
                saldo = depositarDinero(saldo);
                break;
            case 4:
                calcularInteres(saldo);
                break;
            case 5:
                convertirSaldoADolares(saldo);
                break;
            case 6:
                console.log("Gracias por usar el Cajero Automático.");
                break;
            default:
                console.log("Opción inválida. Por favor, intente de nuevo.");
        }
    }
} else {
    console.log("Acceso denegado.");
}       

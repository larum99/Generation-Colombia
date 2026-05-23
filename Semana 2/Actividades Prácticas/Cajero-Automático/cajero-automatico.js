const prompt = require('prompt-sync')();

let saldo = 500000;
let pinCorrecto = 1234;

let mensajeBienvenida = "Bienvenido al Cajero Automático";
console.log(mensajeBienvenida);
let pinIngresado = parseInt(prompt("Ingrese su PIN: "));

if (pinIngresado === pinCorrecto) {
    console.log("PIN correcto. Acceso concedido.");
    let opcion_e = 0;
    while (opcion_e !== 6) {
        console.log("\nSeleccione una opción:");
        console.log("1. Consultar saldo");
        console.log("2. Retirar dinero");
        console.log("3. Depositar dinero");
        console.log("4. Calcular interés del 10% anual");
        console.log("5. Convertir saldo a dólares");
        console.log("6. Salir");
        opcion_e = parseInt(prompt("Ingrese su opción: "));
        switch (opcion_e) {
            case 1:
                console.log(`Su saldo actual es: $${saldo}`);
                break;
            case 2:
                console.log(`Su saldo actual es: $${saldo}`);
                let cantidadRetiro = parseFloat(prompt("Ingrese el monto a retirar: "));
                if (cantidadRetiro < 0) {
                    console.log("Monto inválido.");
                } else if (cantidadRetiro % 10000 !== 0) {
                    console.log("El monto a retirar debe ser múltiplo de $10,000.");
                } else if (cantidadRetiro > saldo) {
                    console.log("Fondos insuficientes.");
                } else {
                    saldo -= cantidadRetiro;
                    console.log(`Has retirado: $${cantidadRetiro}. Saldo restante: $${saldo}`);
                }
                break;
            case 3:
                console.log(`Su saldo actual es: $${saldo}`);
                let cantidadDeposito = parseFloat(prompt("Ingrese el monto a depositar: "));
                if (cantidadDeposito <= 0) {
                    console.log("Monto inválido.");
                } else {
                    saldo += cantidadDeposito;
                    console.log(`Has depositado: $${cantidadDeposito}. Saldo actual: $${saldo}`);
                }
                break;
            case 4:
                console.log('Calculando interés del 10% anual');
                console.log(`Su saldo actual es: $${saldo}`);
                let interes = saldo * 0.10;
                console.log(`El interés anual del 10% sobre su saldo es: $${interes}`);
                break;    
            case 5:
                console.log(`Su saldo actual es: $${saldo}`);
                let tasaCambio = 0.00027;
                let saldoDolares = saldo * tasaCambio;
                console.log(`Su saldo convertido a dólares es: $${saldoDolares}`); 
                break;  
            case 6:
                console.log("Gracias por usar el Cajero Automático. ¡Hasta luego!");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción del 1 al 6.");
        }

    }
} else {
    console.log("PIN incorrecto. Acceso denegado.");
}
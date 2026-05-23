import prompt from 'prompt-sync';
const promptSync = prompt();

export function verificarPin(pinIngresado, pinCorrecto) {
    if (pinIngresado === pinCorrecto) {
        console.log("PIN correcto. Acceso concedido."); 
        return true;
    } else {
        console.log("PIN incorrecto. Acceso denegado.");
        return false;
    }
}

export function mostrarMenu() {
    console.log("\nSeleccione una opción:");
    console.log("1. Consultar saldo");  
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Calcular interés del 10% anual");
    console.log("5. Convertir saldo a dólares");
    console.log("6. Salir");
}

export function consultarSaldo(saldo) {
    console.log(`Su saldo es: ${saldo}`);
}

export function retirarDinero(saldo) {
    console.log(`Su saldo actual es: $${saldo}`);
    let cantidadRetiro = parseFloat(promptSync("Ingrese el monto a retirar: "));        
    if (cantidadRetiro < 0) {
        console.log("Monto inválido.");
    } else if (cantidadRetiro % 10000 !== 0) {
        console.log("El monto a retirar debe ser múltiplo de $10,000.");
    } else if (cantidadRetiro > saldo) {
        console.log("Fondos insuficientes.");
    } else {        saldo -= cantidadRetiro;
        console.log(`Has retirado: $${cantidadRetiro}. Saldo restante: $${saldo}`);
    }               
    return saldo;
}

export function depositarDinero(saldo) {
    console.log(`Su saldo actual es: $${saldo}`);
    let cantidadDeposito = parseFloat(promptSync("Ingrese el monto a depositar: "));
    if (cantidadDeposito <= 0) {
        console.log("Monto inválido.");
    } else {
        saldo += cantidadDeposito;
        console.log(`Has depositado: $${cantidadDeposito}. Saldo actual: $${saldo}`);
    }
    return saldo;
}

export function calcularInteres(saldo) {
    console.log('Calculando interés del 10% anual');
    console.log(`Su saldo actual es: $${saldo}`);
    let interes = saldo * 0.10;
    console.log(`El interés anual del 10% sobre su saldo es: $${interes}`);
}   

export function convertirSaldoADolares(saldo) {
    console.log(`Su saldo actual es: $${saldo}`);
    let tasaCambio = 0.00027;
    let saldoDolares = saldo * tasaCambio;
    console.log(`Su saldo convertido a dólares es: $${saldoDolares}`);
}

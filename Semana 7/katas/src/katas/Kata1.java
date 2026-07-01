package katas;

import java.util.Scanner;

public class Kata1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa el total de la cuenta: ");
        double totalCuenta = sc.nextDouble();

        System.out.println("Ingresa el porcentaje de propina");
        double porcentajePropina = sc.nextDouble();

        double propina = totalCuenta * porcentajePropina / 100;
        double totalPagar = totalCuenta + propina;

        System.out.println("Propina: $" + propina);
        System.out.println("Total a pagar: $" + totalPagar);

        if(porcentajePropina > 30) {
            System.out.println("¡Propina generosa!");
        } else if (porcentajePropina > 5) {
            System.out.println("Propina muy baja");
        }
    }
}

/*
Kata 1: Calculadora de Propinas
Contexto: Los clientes de la cafetería quieren dejar propina. Debes calcular la propina basada
en el total de la cuenta.
Requisitos:Pide el total de la cuenta y el porcentaje de propina.
Calcula el monto de la propina y el total a pagar.
Si la propina es mayor al 30%, muestra un mensaje: "¡Propina generosa!".
Si la propina es menor al 5%, muestra: "Propina muy baja".
Ejemplo de ejecución:
Ingresa el total de la cuenta: 45000
Ingresa el porcentaje de propina: 10
Propina: $4500
Total a pagar: $49500
Casos de prueba:
total: 45000, porcentaje: 10 → Propina: 4500, Total: 49500
total: 30000, porcentaje: 35 → Propina: 10500, Total: 40500, "¡Propina generosa!"
total: 50000, porcentaje: 3 → Propina: 1500, Total: 51500, "Propina muy baja"
*/
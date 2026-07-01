package katas;

import java.util.Scanner;

public class Kata6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int hora;
        int clientes;

        int totalClientes = 0;
        int contadorHoras = 0;

        int horaPico = 0;
        int maxClientes = 0;

        System.out.print("Ingrese la hora (0-23, -1 para terminar): ");
        hora = sc.nextInt();

        if (hora >= 0 && hora <= 23) {
            while (hora != -1) {

                System.out.println("Ingrese número de clientes en esa hora: ");
                clientes = sc.nextInt();

                totalClientes += clientes;
                contadorHoras++;

                if (clientes > maxClientes) {
                    maxClientes = clientes;
                    horaPico = hora;
                }

                System.out.print("Ingrese la hora (0-23, -1 para terminar): ");
                hora = sc.nextInt();

            }

            double promedio = (double) totalClientes / contadorHoras;

            System.out.println("Reporte de clientes.");
            System.out.println("Total clientes: " + totalClientes);
            System.out.println("Proedio por hora: " + promedio);
            System.out.println("Hora con más clientes: " + horaPico + " (" + maxClientes + " clientes)");
        } else if (hora != -1) {
            System.out.println(("Hora inválida."));
        }
    }
}

/*
Kata 6: Número de Clientes por Hora
Contexto: La cafetería quiere saber cuántos clientes atiende por hora para planificar mejor el
personal.
Requisitos:
Pide al usuario la hora actual (0-23).
Pide el número de clientes atendidos en esa hora.
El usuario puede ingresar varias horas. Usa un bucle while que termine cuando ingrese -1
como hora.
Guarda las horas y los clientes en variables diferentes (sin arreglos).
Cuando termina, muestra:
Total de clientes atendidos
Promedio de clientes por hora
Hora con más clientes (usa una variable para guardar la hora y otra para el máximo)
Usa un contador de horas válidas.
Ejemplo de ejecución:Ingresa la hora (0-23, -1 para terminar): 8
Ingresa el número de clientes en esa hora: 12
Ingresa la hora (0-23, -1 para terminar): 10
Ingresa el número de clientes en esa hora: 25
Ingresa la hora (0-23, -1 para terminar): 12
Ingresa el número de clientes en esa hora: 18
Ingresa la hora (0-23, -1 para terminar): -1
--- Reporte de Clientes ---
Total de clientes: 55
Promedio por hora: 18.33
Hora con más clientes: 10 (25 clientes)
Casos de prueba:
(8, 12), (10, 25), (12, 18) → Total: 55, Promedio: 18.33, Hora pico: 10
(9, 5), (11, 8), (14, 10) → Total: 23, Promedio: 7.66, Hora pico: 14
 */
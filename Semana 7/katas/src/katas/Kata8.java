package katas;

import java.util.Scanner;

public class Kata8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Ingrese número de empleados: ");
        int numeroEmpleados = sc.nextInt();

        String[] nombres = new String[numeroEmpleados];
        int horas;

        double totalHoras = 0;

        int empleadosMas40 = 0;
        int empleadosMenos20 = 0;

        String nombresMas40 = "";
        String nombresMenos20 = "";

        for(int i = 0; i < numeroEmpleados; i++) {
            System.out.println("Empleado " + (i + 1) + ": ");
            nombres[i] = sc.next();

            System.out.println("Horas trabajadas: ");
            horas = sc.nextInt();

            totalHoras += horas;

            if (horas > 40) {
                empleadosMas40++;
                nombresMas40 += nombres[i] + " ";
            } else if (horas < 20) {
                empleadosMenos20++;
                nombresMenos20 += nombres[i] + " ";
            }
        }

        double  promedio = totalHoras / numeroEmpleados;
        double sueldoTotal = totalHoras *  12000;

        System.out.println("Reporte turnos");
        System.out.println("Total horas: " +  totalHoras);
        System.out.println("Promedio: " + promedio);
        System.out.println("Empleados con más de 40 horas: " + empleadosMas40 + "(" + nombresMas40 + ")");
        System.out.println("Empleados con menos de 20 horas: " + empleadosMenos20 + "(" + nombresMenos20 + ")");
        System.out.println("Sueldo total: " + sueldoTotal);
    }
}

/*
Kata 8: Planificador de Turnos ( Reto )
Contexto: La cafetería necesita planificar turnos para los empleados. Cada turno tiene un
número de horas.
Requisitos:
Pide al usuario el número de empleados.
Para cada empleado, pide su nombre y cuántas horas trabajó.
Calcula y muestra:
Total de horas trabajadas
Promedio de horas por empleado
Número de empleados que trabajaron más de 40 horas
Número de empleados que trabajaron menos de 20 horas
Sueldo total a pagar (suponiendo $12.000 por hora)
Ejemplo de ejecución:
Ingresa el número de empleados: 3
Empleado 1: Ana
Horas trabajadas: 45
Empleado 2: Luis
Horas trabajadas: 38
Empleado 3: Carlos
Horas trabajadas: 52
--- Reporte de Turnos ---
Total de horas: 135
Promedio de horas: 45.0
Empleados con más de 40 horas: 2 (Ana, Carlos)Empleados con menos de 20 horas: 0
Sueldo total: $1.620.000
Casos de prueba:
Ana(45), Luis(38), Carlos(52) → Total: 135, Promedio: 45, >40: 2, <20: 0
 */

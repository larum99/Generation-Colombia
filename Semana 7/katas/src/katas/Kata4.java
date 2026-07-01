package katas;

import java.util.Scanner;

public class Kata4 {
    public static void main(String[] argsS) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Ingrese el día de la semana(1: Lunes, 7: Domingo): ");
        int diaSemana = sc.nextInt();

        System.out.println("Ingrese la hora: ");
        int hora = sc.nextInt();

        switch (diaSemana) {
            case 1, 2, 3, 4, 5 -> {
                if (hora >= 6 && hora <= 20) {
                    System.out.println("La cafetería está abierta");
                } else {
                    System.out.println("La cafetería está cerrada");
                }
                System.out.println("Horario de Lunes a Viernes de 6:00 AM a 8:00 PM");
            }
            case 6 -> {
                if (hora >= 7 && hora <= 14) {
                    System.out.println("La cafetería está abierta");
                } else {
                    System.out.println("La cafetería está cerrada");
                }
                System.out.println("Horario de sábado: 7:00 AM - 2:00 PM");
            }
            case 7 -> {
                System.out.println("La cafetería está cerrada los domingos");
            }
            default -> {
                System.out.println("Ingrese un número de día de la semana válido");
            }
        }

    }
}

/*
Kata 4: Validador de HorariosContexto: La cafetería abre de lunes a viernes de 6:00 AM a 8:00 PM, y los sábados de 7:00 AM
a 2:00 PM. Los domingos está cerrada.
Requisitos:
Pide al usuario el día de la semana (1-7, donde 1 = Lunes, 7 = Domingo).
Pide la hora (0-23).
Usa switch para el día y condiciones para verificar si está abierta.
Muestra un mensaje indicando si está abierta o cerrada, y el horario correspondiente.
Ejemplo de ejecución:
Ingresa el día (1=Lunes, 7=Domingo): 6
Ingresa la hora (0-23): 13
La cafetería está abierta.
Horario de sábado: 7:00 AM - 2:00 PM
Casos de prueba:
dia: 1, hora: 10 → "Abierta"
dia: 7, hora: 12 → "Cerrada (Domingos cerrado)"
dia: 6, hora: 15 → "Cerrada (Horario de sábado: 7:00 AM - 2:00 PM)"
*/

package katas;

import java.util.Scanner;

public class Kata2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresé el nombre de la bebida: ");
        String nombreBebida = sc.nextLine();

        System.out.println("Ingrese la temperatura: ");
        double temperaturaBebida = sc.nextDouble();

        if (temperaturaBebida > 60) {
            System.out.println(nombreBebida + ": " + "Caliente");
        } else if (temperaturaBebida > 30 && temperaturaBebida < 60) {
            System.out.println(nombreBebida + ": " + "Templada");
        } else {
            System.out.println(nombreBebida + ": " + "Fría");
        }
    }
}

/*
Kata 2: Clasificador de Bebidas
Contexto: La cafetería tiene diferentes tipos de bebidas. Debes clasificarlas según su
temperatura.
Requisitos:
Pide el nombre de una bebida.
Pide la temperatura en grados Celsius.
Clasifica la bebida:
"Caliente" si temperatura > 60
"Templada" si temperatura entre 30 y 60
"Fría" si temperatura < 30
Muestra el nombre y la clasificación.
Ejemplo de ejecución:
Ingresa el nombre de la bebida: Café Americano
Ingresa la temperatura: 75
Café Americano: Caliente
Casos de prueba:nombre: "Té", temperatura: 80 → "Caliente"
nombre: "Café con leche", temperatura: 45 → "Templada"
nombre: "Jugo natural", temperatura: 25 → "Fría"
*/
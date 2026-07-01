package katas;

import java.util.Scanner;

public class Kata7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String centinela = "S";

        double subtotal;
        double descuento;
        double iva;
        double total;
        double totalCompra = 0;

        while (centinela.equalsIgnoreCase("S")) {
            System.out.println("Ingrese el precio del producto: ");
            double precioProducto = sc.nextDouble();

            System.out.println("Ingrese la cantidad: ");
            int cantidadProducto = sc.nextInt();

            subtotal = precioProducto * cantidadProducto;

            if (cantidadProducto > 0 && cantidadProducto <= 2) {
                descuento = subtotal * 0.00;
                System.out.println("Descuento(0%): " + descuento);

            } else if (cantidadProducto > 2 && cantidadProducto <= 5) {
                descuento = subtotal * 0.05;
                System.out.println("Descuento(5%): " + descuento);
            } else if (cantidadProducto > 5 && cantidadProducto <= 10) {
                descuento = subtotal * 0.10;
                System.out.println("Descuento(10%): " + descuento);
            } else {
                descuento = subtotal * 0.15;
                System.out.println("Descuento(15%): " + descuento);
            }
            iva = (subtotal - descuento) * .19;
            total = subtotal + iva;
            totalCompra += total;
            System.out.println("Subtotal: " + subtotal);
            System.out.println("IVA: " + iva);
            System.out.println("Total: " + total);

            System.out.print("¿Agregar otro producto? (S/N): ");
            centinela = sc.next();
        }
        System.out.println("Total de la compra: " + totalCompra);
    }
}

/*
Kata 7: Generador de Factura con Descuento por Volumen (
Reto )
Contexto: La cafetería ofrece descuentos por volumen en pedidos grandes del mismo producto.
Requisitos:
Pide al usuario el precio de un producto.
Pide la cantidad que quiere comprar.
Aplica descuento por volumen:
1-2 unidades: 0% descuento
3-5 unidades: 5% descuento
6-10 unidades: 10% descuento
11+ unidades: 15% descuento
Calcula el subtotal, el descuento, el IVA (19%) y el total final.
Pregunta si quiere agregar otro producto (S/N). Si responde S, repite el proceso.
Al final, muestra el total de la compra (suma de todos los productos con sus descuentos).
Ejemplo de ejecución:
Ingresa el precio del producto: 4000
Ingresa la cantidad: 4
Subtotal: $16000Descuento (5%): $800
IVA (19%): $2888
Total: $18088
¿Agregar otro producto? (S/N): N
Total de la compra: $18088
Casos de prueba:
precio: 4000, cantidad: 2 → Subtotal: 8000, Descuento: 0, IVA: 1520, Total: 9520
precio: 3500, cantidad: 6 → Subtotal: 21000, Descuento: 2100, IVA: 3591, Total: 22491
 */
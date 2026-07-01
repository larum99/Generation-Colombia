package katas;

import java.util.Scanner;

public class Kata3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double precioProducto;
        double subtotal = 0.0;

        do {
            System.out.println("Ingrese el precio del producto: ");
            precioProducto = sc.nextDouble();
            subtotal += precioProducto;
        } while (precioProducto != 0.0);

        double iva = subtotal * 0.19;
        double total = subtotal + iva;
        double descuento = 0.0;

        if (total > 50000) {
            descuento = total * .10;
            total = total - descuento;
            System.out.println("Se aplica descuento de 10%");
        }

        System.out.println("Subtotal: " + subtotal);
        System.out.println("IVA: " + iva);
        System.out.println("Descuento: " + descuento);
        System.out.println(("Total: " + total));
    }
}

/*
Kata 3: Calculadora de Pedidos con IVA
Contexto: Los clientes piden productos de la cafetería. Debes calcular el total de su pedido.
Requisitos:
Pide el precio de cada producto que el cliente pide.
El cliente puede ingresar varios productos. Usa un bucle while o do-while .
Cuando el cliente ingresa 0 , termina el pedido.
Calcula:
Subtotal (suma de todos los productos)
IVA (19% del subtotal)
Total (subtotal + IVA)
Si el total supera $50.000, aplica un descuento del 10%.
Ejemplo de ejecución:
Ingresa el precio del producto (0 para terminar): 4000
Ingresa el precio del producto (0 para terminar): 3500
Ingresa el precio del producto (0 para terminar): 7500
Ingresa el precio del producto (0 para terminar): 0
Subtotal: $15000
IVA (19%): $2850
Total: $17850
Casos de prueba:
precios: 4000, 3500, 7500, 0 → Subtotal: 15000, IVA: 2850, Total: 17850
precios: 25000, 20000, 15000, 0 → Subtotal: 60000, IVA: 11400, Descuento: 7140, Total:
64260
*/


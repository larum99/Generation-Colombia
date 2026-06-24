public class Principal {
    public static void main(String[] args) {
        // FRAGMENTO 1 - Promoción y tipos pequeños
        byte a = 10;
        byte b = 20;
        int result1 = a + b; // cambiar byte a int
        System.out.println("Resultado 1: " + result1);

        // FRAGMENTO 2 - Literales decimales
        float precio = 19.99f; // necesita subfijo f
        System.out.println("Precio: " + precio);

        // FRAGMENTO 3 - Casting con truncamiento
        double temperatura = 36.7;
        int tempInt = (int) temperatura; // agregar int en temperature
        System.out.println("Temperatura (int): " + tempInt);

        // FRAGMENTO 4 - Desbordamiento (overflow) silencioso
        byte valor = (byte) 200; // byte entre -128 y 127
        System.out.println("Valor: " + valor);  // ¿Qué imprime? -56

        // FRAGMENTO 5 - División de enteros
        int numerador = 7;
        int denominador = 2;
        double division = (double) numerador / denominador;
        System.out.println("División: " + division);  // ¿Qué imprime? - entero 3.0, pero el resultado es 3.5
    }
}

/*
public class FixBrokenCasts {

    public static void main(String[] args) {

        // FRAGMENTO 1 - Promoción y tipos pequeños

        byte a = 10;

        byte b = 20;

        byte result1 = a + b;

        System.out.println("Resultado 1: " + result1);


        // FRAGMENTO 2 - Literales decimales

        float precio = 19.99;

        System.out.println("Precio: " + precio);


        // FRAGMENTO 3 - Casting con truncamiento

        double temperatura = 36.7;

        int tempInt = temperatura;

        System.out.println("Temperatura (int): " + tempInt);


        // FRAGMENTO 4 - Desbordamiento (overflow) silencioso

        byte valor = (byte) 200;

        System.out.println("Valor: " + valor);  // ¿Qué imprime?


        // FRAGMENTO 5 - División de enteros

        int numerador = 7;

        int denominador = 2;

        double division = numerador / denominador;

        System.out.println("División: " + division);  // ¿Qué imprime?

    }

}

 */
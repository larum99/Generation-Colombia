

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

        // switch tradicional case-break

        // Switch moderno
        int dia =  1;
        String nombreDia = switch (dia) {
            case 1, 7 -> "fin de semana";
            case 2, 3, 4, 5, 6 -> "día laboral";
            default -> "día desconocido";
        };

        System.out.println(nombreDia);

        int codigoDescuento = 2;
        double descuentoFinal = switch (codigoDescuento) {
            case 1 -> 0.10;
            case 2 -> {
                System.out.println("Aplicando cupón");
                double base = 0.15;
                yield base + 0.05;
            }
            default -> {
                System.out.println("Código");
                yield 0.0;
            }
        };
        System.out.println(descuentoFinal);

        // switch - yield o asignación directa
        int diaX = 3;
        String cadenaDia = switch (diaX) {
            case 1 -> "lunes";
            case 2 -> {
                System.out.println("Es martes de ofertas");
                yield "martes";
            }
            default -> "otro día";
        };
        System.out.println(cadenaDia);

        // while y do - while

        int y = 5;

        while (y < 5) {
            System.out.println("En while");
        }

        do {
            System.out.println("En do while");
        } while (y < 5);


        // entrada de datos
        Scanner sc = new Scanner(System.in);
        String entradaDatos;

        do {
            System.out.println("Presiona sí para continuar");
            entradaDatos = sc.nextLine();
        } while (!entradaDatos.equals("sí"));

        System.out.println("Gracias");
        sc.close();
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
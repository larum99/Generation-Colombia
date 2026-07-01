public class Main {

    public static void main(String[] args) {
        int x = 5;
        actualizar(x);
        System.out.println("X después de la llamada del método " + x);
    }

    public static void actualizar(int num) {
        num = num + 10;
        System.out.println("X dentro del método " + num);
    }


    /*
    public static void main(String[] args) {
        int x = 5;
        x = actualizar(x);
        System.out.println("X después de la llamada del método " + x);
    }

    public static int actualizar(int num) {
        num = num + 10;
        return num;
    }
     */
}
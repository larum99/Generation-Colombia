import java.util.ArrayList;

public class Listas {
    public static void main(String[] args) {
        ArrayList<String> nombres = new ArrayList<>();
        nombres.add("Mariana");
        actualizarLista(nombres);
        System.out.println("Después de la llamada del método" + nombres);

        trataDeReemplazarLista(nombres);
        System.out.println("Después de la llamada método reemplazar " + nombres);
    }

    public static void actualizarLista(ArrayList<String> lista) {
        lista.add("Bob");
        System.out.println("Dentro del método " + lista);
    }

    public static void trataDeReemplazarLista(ArrayList<String> lista) {
        lista = new ArrayList<>();
        lista.add("Charlie");
        System.out.println("Dentro del método reemplazar: " + lista);
    }
}

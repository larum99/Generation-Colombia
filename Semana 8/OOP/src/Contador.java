public class Contador {
    public static int totalInstancias = 0;
    public String nombreObjeto;

    public Contador(String nombre) {
        this.nombreObjeto = nombre;
        totalInstancias++;
    }

    public static void mostrarReporte() {
        System.out.println();
    }

}

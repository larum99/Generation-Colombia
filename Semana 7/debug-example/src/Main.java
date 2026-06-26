class Estudiante {
    private String nombre;

    public int getLongitudNombre() {
        return this.nombre.length();
    }
}

public class Main {
    public static void main(String[] args) {
//
//        Estudiante estudiante = new Estudiante();
//        printEstudiante(estudiante);
//    }
//
//    private static void printEstudiante(Estudiante estudiante) {
//        System.out.println("Letras:" + estudiante.getLongitudNombre());
//    }

    // Simulando datos de estudiantes
    String[] nombres = obtenerNombres();
    if(nombres != null) {
        for (int i = 0; i < nombres.length; i++ ) {
            System.out.println("Estudiante:" + (i + 1) + ": "  + nombres[i]);
        }
    } else {
            System.out.println("No hay ningún estudiante registrado.");
        }
    }
//        System.out.println("Primer estudiante: " + nombres[0]);
//        System.out.println("Segundo estudiante: " + nombres[1]);
//        System.out.println("Tercer estudiante: " + nombres[2]);

    public static String[] obtenerNombres() {
    // TODO: Este método debería devolver un array con nombres
    // Pero por error devuelve null
        //return null;
        String[] listaNombres = {"Laura", "Mariana", "Marcela Andrea", "Santiago"};
        return listaNombres;
        //return new String[]{"Laura", "Mariana", "Marcela Andrea", "Santiago"};
    }
}
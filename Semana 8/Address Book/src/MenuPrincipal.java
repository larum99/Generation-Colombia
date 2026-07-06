import java.util.*;

public class MenuPrincipal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Agenda agenda = new Agenda();

        int opcion;

        do {

            System.out.println("\n=== AGENDA DE CONTACTOS ===");
            System.out.println("1. Agregar contacto");
            System.out.println("2. Buscar contacto");
            System.out.println("3. Eliminar contacto");
            System.out.println("4. Listar todos los contactos");
            System.out.println("5. Agregar grupo");
            System.out.println("6. Agregar contacto a grupo");
            System.out.println("7. Listar grupos");
            System.out.println("8. Mostrar contactos por grupo");
            System.out.println("9. Salir");
            System.out.print("Elige una opción: ");

            opcion = Integer.parseInt(scanner.nextLine());

            try {

                switch (opcion) {

                    case 1:

                        System.out.println("\n--- AGREGAR CONTACTO ---");

                        System.out.print("Nombre: ");
                        String nombre = scanner.nextLine();

                        System.out.print("Teléfono: ");
                        String telefono = scanner.nextLine();

                        System.out.print("Email: ");
                        String email = scanner.nextLine();

                        agenda.agregarContacto(new Contacto(nombre, telefono, email));

                        System.out.println("Contacto agregado correctamente.");
                        break;

                    case 2:

                        System.out.println("\n--- BUSCAR CONTACTO ---");

                        System.out.print("Nombre: ");
                        nombre = scanner.nextLine();

                        Contacto contacto = agenda.buscarContacto(nombre);

                        if (contacto == null) {
                            System.out.println("Contacto no encontrado.");
                        } else {
                            System.out.println(contacto);
                        }

                        break;

                    case 3:

                        System.out.println("\n--- ELIMINAR CONTACTO ---");

                        System.out.print("Nombre: ");
                        nombre = scanner.nextLine();

                        agenda.eliminarContacto(nombre);

                        System.out.println("Contacto eliminado correctamente.");
                        break;

                    case 4:

                        System.out.println("\n--- LISTA DE CONTACTOS ---");

                        List<Contacto> contactos = agenda.listarContactos();

                        if (contactos.isEmpty()) {
                            System.out.println("No hay contactos registrados.");
                        } else {
                            contactos.forEach(System.out::println);
                        }

                        break;

                    case 5:

                        System.out.println("\n--- AGREGAR GRUPO ---");

                        System.out.print("Nombre del grupo: ");
                        String grupo = scanner.nextLine();

                        agenda.agregarGrupo(grupo);

                        System.out.println("Grupo creado correctamente.");
                        break;

                    case 6:

                        System.out.println("\n--- AGREGAR CONTACTO A GRUPO ---");

                        System.out.print("Nombre del contacto: ");
                        nombre = scanner.nextLine();

                        System.out.print("Nombre del grupo: ");
                        grupo = scanner.nextLine();

                        agenda.agregarContactoAGrupo(nombre, grupo);

                        System.out.println("Contacto agregado al grupo correctamente.");
                        break;

                    case 7:

                        System.out.println("\n--- LISTA DE GRUPOS ---");

                        Set<String> grupos = agenda.listarGrupos();

                        if (grupos.isEmpty()) {
                            System.out.println("No hay grupos registrados.");
                        } else {
                            grupos.forEach(System.out::println);
                        }

                        break;

                    case 8:

                        System.out.println("\n--- CONTACTOS POR GRUPO ---");

                        System.out.print("Nombre del grupo: ");
                        grupo = scanner.nextLine();

                        List<Contacto> contactosGrupo = agenda.mostrarContactosPorGrupo(grupo);

                        if (contactosGrupo.isEmpty()) {
                            System.out.println("No hay contactos en este grupo.");
                        } else {
                            contactosGrupo.forEach(System.out::println);
                        }

                        break;

                    case 9:
                        System.out.println("¡Hasta luego!");
                        break;

                    default:
                        System.out.println("Opción inválida.");
                }

            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            }

        } while (opcion != 9);

        scanner.close();

    }
}

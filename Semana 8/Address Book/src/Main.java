import java.util.List;

public class Main {
    public static void main(String[] args) {
        Agenda agenda = new Agenda();

        Contacto contacto1 = new Contacto(
                "Laura", "123456", "laura@gmail.com"
        );

        agenda.agregarContacto(new Contacto(
                "Samuel",
                "555-5678",
                "samuel@email.com"));

        agenda.agregarContacto(contacto1);
        System.out.println(agenda.buscarContacto("Samuel"));
        //agenda.eliminarContacto("Samuel");

        agenda.agregarGrupo("Familia");
        agenda.agregarGrupo("Amigos");

        System.out.println(agenda.listarGrupos());
        agenda.agregarContactoAGrupo("Laura", "Familia");
        agenda.agregarContactoAGrupo("Samuel", "Familia");

        List<Contacto> contactos = agenda.mostrarContactosPorGrupo("Familia");

        for (Contacto contacto : contactos) {
            System.out.println(contacto);
        }
    }
}
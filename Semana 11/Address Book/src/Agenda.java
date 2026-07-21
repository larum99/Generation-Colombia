import java.util.*;

public class Agenda {

    // Declarar e inicializar
    private Map<String, Contacto> contactos = new HashMap<>();
    private List<Contacto> listaContactos = new ArrayList<>();
    private Set<String> grupos = new HashSet<>();
    private Map<String, List<Contacto>> contactosPorGrupo = new HashMap<>();

    public void agregarContacto(Contacto contacto) {
        if (contactos.containsKey(contacto.getNombre())) {
            throw new IllegalArgumentException("Ya existe un contacto con el nombre: " + contacto.getNombre());
        }

        contactos.put(contacto.getNombre(), contacto);
        listaContactos.add(contacto);
    }

    public Contacto buscarContacto(String nombre) {
        return contactos.get(nombre);
    }

    public void eliminarContacto(String nombre) {
        Contacto contacto = contactos.remove(nombre);

        if (contacto == null) {
            throw new IllegalArgumentException("No existe contacto con ese nombre.");
        }

        listaContactos.remove(contacto);

        for (List<Contacto> lista : contactosPorGrupo.values()) {
            lista.remove(contacto);
        }
    }

    public List<Contacto> listarContactos() {
        List<Contacto> copiaListaContactos = new ArrayList<>(listaContactos);
        // copia.sort(Comparator.comparing(contacto -> contacto.getNombre()));
        copiaListaContactos.sort(Comparator.comparing(Contacto::getNombre));

        return copiaListaContactos;
    }

    public void agregarGrupo(String nombreGrupo) {
        if (grupos.contains(nombreGrupo)) {
            throw new IllegalArgumentException("El grupo: " + nombreGrupo + " ya existe.");
        }

        grupos.add(nombreGrupo);
        contactosPorGrupo.put(nombreGrupo, new ArrayList<>());
    }

    public void agregarContactoAGrupo(String nombreContacto, String nombreGrupo) {
        Contacto contacto = contactos.get(nombreContacto);

        if (contacto == null) {
            throw new IllegalArgumentException("El contacto no existe.");
        }

        List<Contacto> lista = contactosPorGrupo.get(nombreGrupo);

        if (lista == null) {
            throw new IllegalArgumentException("El grupo no existe.");
        }

        if (lista.contains(contacto)) {
            throw new IllegalArgumentException("El contacto ya pertenece al grupo.");
        }

        lista.add(contacto);
    }

    public Set<String> listarGrupos() {
        return new TreeSet<>(grupos);
    }

    public List<Contacto> mostrarContactosPorGrupo(String nombreGrupo) {

        List<Contacto> lista = contactosPorGrupo.get(nombreGrupo);

        if (lista == null) {
            throw new IllegalArgumentException("El grupo no existe.");
        }

        return new ArrayList<>(lista);
    }

}

public class Main {
    public static void main(String[] args) {

        Usuario usuario1 = new Usuario("lau@gmail.com", "admin");
        Usuario usuario2 = new Usuario("larum@gmail.com");

        System.out.println("Usuario 1: " + usuario1.getRole());
        System.out.println("Usuario 2: " + usuario2.getRole());

    }
}
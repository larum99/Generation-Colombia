public class Usuario {
    private String email;
    private String role;

    // Constructor 1
    public Usuario (String email, String role) {
        this.email = email;
        this.role = role;
    }

    // Constructor 2
    public Usuario(String email) {
        this.email = email;
        this.role = "Invitado";
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }
}


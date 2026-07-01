public class Carro {
    private String marca;
    private String modelo;
    private int anio;
    private String placa;
    private int kilometraje;
    private boolean arrendado;

    public Carro(String marca, String modelo, int anio, String placa, int kilometrajeInicial) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.placa = placa;
        this.kilometraje = kilometrajeInicial;
        this.arrendado = false;
    }

    public boolean estaArrendado(String idCliente) {
        if (!arrendado) {
            arrendado = true;
            return true;
        }
        return false;
    }

    public void devolver(int nuevoKilomatraje) {
        arrendado = false;
        this.kilometraje = nuevoKilomatraje;
    }

    public boolean estaDisponible() {
        return !arrendado;
    }


}

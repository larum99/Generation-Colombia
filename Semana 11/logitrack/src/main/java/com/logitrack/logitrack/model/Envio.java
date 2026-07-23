package com.logitrack.logitrack.model;

public class Envio {

    private String id;
    private String cliente;
    private String destino;
    private Double pesoKg;
    private String estado;

    public Envio() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public Double getPesoKg() {
        return pesoKg;
    }

    public void setPesoKg(Double pesoKg) {
        this.pesoKg = pesoKg;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Envio(String id, String cliente, String destino, Double pesoKg, String estado) {
        this.id = id;
        this.cliente = cliente;
        this.destino = destino;
        this.pesoKg = pesoKg;
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Envio{" +
                "id='" + id + '\'' +
                ", cliente='" + cliente + '\'' +
                ", destino='" + destino + '\'' +
                ", pesoKg=" + pesoKg +
                ", estado='" + estado + '\'' +
                '}';
    }
}

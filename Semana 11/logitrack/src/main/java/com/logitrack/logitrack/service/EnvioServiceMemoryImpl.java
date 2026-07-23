package com.logitrack.logitrack.service;

import com.logitrack.logitrack.model.Envio;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class EnvioServiceMemoryImpl implements EnvioService {
    private final List<Envio> envios = new ArrayList<>();

    public EnvioServiceMemoryImpl() {
        envios.add(new Envio(UUID.randomUUID().toString(), "Cliente 1", "Medellin", 5.2, "PENDIENTE"));
        envios.add(new Envio(UUID.randomUUID().toString(), "Cliente 2", "Bucaramanga", 7.0, "EN_RUTA"));
        envios.add(new Envio(UUID.randomUUID().toString(), "Cliente 3", "Bogotá", 11.2, "ENTREGADO" ));
    }

    @Override
    public List<Envio> findAll() {
        return List.of();
    }

    @Override
    public Envio findById(String id) {
        return null;
    }

    @Override
    public Envio save(Envio envio) {
        return null;
    }

    @Override
    public Envio update(String id, Envio envio) {
        return null;
    }

    @Override
    public void deleteById(String id) {

    }

    @Override
    public List<Envio> findByEstado(String estado) {
        return List.of();
    }
}

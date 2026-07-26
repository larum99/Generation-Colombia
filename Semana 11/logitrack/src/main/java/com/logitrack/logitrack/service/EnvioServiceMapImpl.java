package com.logitrack.logitrack.service;

import com.logitrack.logitrack.model.Envio;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class EnvioServiceMapImpl implements EnvioService{

    private final Map<String, Envio> envios = new ConcurrentHashMap<>();

    public EnvioServiceMapImpl() {

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

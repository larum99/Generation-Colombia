package com.backend.blog.service;

import com.backend.blog.dto.AuthorDTO;

import java.util.List;

public interface AuthorService {

    List<AuthorDTO> findAll();

    AuthorDTO findById(Long id);

    AuthorDTO save(AuthorDTO authorDTO);

    AuthorDTO update(Long id, AuthorDTO authorDTO);

    void delete(Long id);
}
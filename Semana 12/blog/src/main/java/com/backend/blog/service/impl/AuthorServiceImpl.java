package com.backend.blog.service.impl;

import com.backend.blog.dto.AuthorDTO;
import com.backend.blog.model.Author;
import com.backend.blog.repository.AuthorRepository;
import com.backend.blog.service.AuthorService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public List<AuthorDTO> findAll() {
        return authorRepository.findAll()
                .stream()
                .map(AuthorDTO::fromEntity)
                .toList();
    }

    @Override
    public AuthorDTO findById(Long id) {
        Author author = authorRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el autor con id: " + id)
                );

        return AuthorDTO.fromEntity(author);
    }

    @Override
    @Transactional
    public AuthorDTO save(AuthorDTO authorDTO) {
        Author author = authorDTO.toEntity();

        Author savedAuthor = authorRepository.save(author);

        return AuthorDTO.fromEntity(savedAuthor);
    }

    @Override
    @Transactional
    public AuthorDTO update(Long id, AuthorDTO authorDTO) {
        Author author = authorRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el autor con id: " + id)
                );

        author.setName(authorDTO.name());
        author.setEmail(authorDTO.email());

        Author updatedAuthor = authorRepository.save(author);

        return AuthorDTO.fromEntity(updatedAuthor);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Author author = authorRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el autor con id: " + id)
                );

        authorRepository.delete(author);
    }
}

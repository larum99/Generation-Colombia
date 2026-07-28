package com.backend.blog.controller;

import com.backend.blog.dto.AuthorDTO;
import com.backend.blog.service.AuthorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping
    public ResponseEntity<List<AuthorDTO>> findAll() {
        return ResponseEntity.ok(authorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuthorDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(authorService.findById(id));
    }

    @PostMapping
    public ResponseEntity<AuthorDTO> save(@RequestBody AuthorDTO authorDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authorService.save(authorDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AuthorDTO> update(
            @PathVariable Long id,
            @RequestBody AuthorDTO authorDTO
    ) {
        return ResponseEntity.ok(authorService.update(id, authorDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        authorService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
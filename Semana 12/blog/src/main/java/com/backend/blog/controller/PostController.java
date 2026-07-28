package com.backend.blog.controller;

import com.backend.blog.dto.PostDTO;
import com.backend.blog.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<List<PostDTO>> findAll() {
        return ResponseEntity.ok(postService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(postService.findById(id));
    }

    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<PostDTO>> findByAuthorId(
            @PathVariable Long authorId
    ) {
        return ResponseEntity.ok(postService.findByAuthorId(authorId));
    }

    @PostMapping
    public ResponseEntity<PostDTO> save(@RequestBody PostDTO postDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(postService.save(postDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostDTO> update(
            @PathVariable Long id,
            @RequestBody PostDTO postDTO
    ) {
        return ResponseEntity.ok(postService.update(id, postDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
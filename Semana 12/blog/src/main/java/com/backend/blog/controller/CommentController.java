package com.backend.blog.controller;

import com.backend.blog.dto.CommentDTO;
import com.backend.blog.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public ResponseEntity<List<CommentDTO>> findAll() {
        return ResponseEntity.ok(commentService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommentDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(commentService.findById(id));
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<CommentDTO>> findByPostId(
            @PathVariable Long postId
    ) {
        return ResponseEntity.ok(commentService.findByPostId(postId));
    }

    @PostMapping
    public ResponseEntity<CommentDTO> save(
            @RequestParam Long postId,
            @RequestBody CommentDTO commentDTO
    ) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(commentService.save(postId, commentDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentDTO> update(
            @PathVariable Long id,
            @RequestBody CommentDTO commentDTO
    ) {
        return ResponseEntity.ok(commentService.update(id, commentDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        commentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
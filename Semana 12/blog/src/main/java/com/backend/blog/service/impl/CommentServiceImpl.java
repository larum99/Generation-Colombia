package com.backend.blog.service.impl;

import com.backend.blog.dto.CommentDTO;
import com.backend.blog.model.Comment;
import com.backend.blog.model.Post;
import com.backend.blog.repository.CommentRepository;
import com.backend.blog.repository.PostRepository;
import com.backend.blog.service.CommentService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    public CommentServiceImpl(
            CommentRepository commentRepository,
            PostRepository postRepository
    ) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    @Override
    public List<CommentDTO> findAll() {
        return commentRepository.findAll()
                .stream()
                .map(CommentDTO::fromEntity)
                .toList();
    }

    @Override
    public CommentDTO findById(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el comentario con id: " + id)
                );

        return CommentDTO.fromEntity(comment);
    }

    @Override
    public List<CommentDTO> findByPostId(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el post con id: " + postId)
                );

        return post.getComments()
                .stream()
                .map(CommentDTO::fromEntity)
                .toList();
    }

    @Override
    @Transactional
    public CommentDTO save(Long postId, CommentDTO commentDTO) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el post con id: " + postId)
                );

        Comment comment = commentDTO.toEntity();
        comment.setPost(post);

        Comment savedComment = commentRepository.save(comment);

        return CommentDTO.fromEntity(savedComment);
    }

    @Override
    @Transactional
    public CommentDTO update(Long id, CommentDTO commentDTO) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el comentario con id: " + id)
                );

        comment.setText(commentDTO.text());
        comment.setCreatedAt(commentDTO.createdAt());

        Comment updatedComment = commentRepository.save(comment);

        return CommentDTO.fromEntity(updatedComment);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el comentario con id: " + id)
                );

        commentRepository.delete(comment);
    }
}
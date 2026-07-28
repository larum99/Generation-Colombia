package com.backend.blog.service;

import com.backend.blog.dto.CommentDTO;

import java.util.List;

public interface CommentService {

    List<CommentDTO> findAll();

    CommentDTO findById(Long id);

    List<CommentDTO> findByPostId(Long postId);

    CommentDTO save(Long postId, CommentDTO commentDTO);

    CommentDTO update(Long id, CommentDTO commentDTO);

    void delete(Long id);
}
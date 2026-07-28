package com.backend.blog.service;

import com.backend.blog.dto.PostDTO;

import java.util.List;

public interface PostService {

    List<PostDTO> findAll();

    PostDTO findById(Long id);

    List<PostDTO> findByAuthorId(Long authorId);

    PostDTO save(PostDTO postDTO);

    PostDTO update(Long id, PostDTO postDTO);

    void delete(Long id);
}
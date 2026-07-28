package com.backend.blog.service.impl;

import com.backend.blog.dto.PostDTO;
import com.backend.blog.model.Author;
import com.backend.blog.model.Post;
import com.backend.blog.repository.AuthorRepository;
import com.backend.blog.repository.PostRepository;
import com.backend.blog.service.PostService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final AuthorRepository authorRepository;

    public PostServiceImpl(
            PostRepository postRepository,
            AuthorRepository authorRepository
    ) {
        this.postRepository = postRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<PostDTO> findAll() {
        return postRepository.findAll()
                .stream()
                .map(PostDTO::fromEntity)
                .toList();
    }

    @Override
    public PostDTO findById(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el post con id: " + id)
                );

        return PostDTO.fromEntity(post);
    }

    @Override
    public List<PostDTO> findByAuthorId(Long authorId) {
        Author author = authorRepository.findById(authorId)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el autor con id: " + authorId)
                );

        return author.getPosts()
                .stream()
                .map(PostDTO::fromEntity)
                .toList();
    }

    @Override
    @Transactional
    public PostDTO save(PostDTO postDTO) {
        Author author = authorRepository.findById(postDTO.author().id())
                .orElseThrow(() ->
                        new RuntimeException(
                                "No se encuentra el autor con id: " + postDTO.author().id()
                        )
                );

        Post post = postDTO.toEntity();
        post.setAuthor(author);

        Post savedPost = postRepository.save(post);

        return PostDTO.fromEntity(savedPost);
    }

    @Override
    @Transactional
    public PostDTO update(Long id, PostDTO postDTO) {
        Post post = postRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el post con id: " + id)
                );

        Author author = authorRepository.findById(postDTO.author().id())
                .orElseThrow(() ->
                        new RuntimeException(
                                "No se encuentra el autor con id: " + postDTO.author().id()
                        )
                );

        post.setTitle(postDTO.title());
        post.setContent(postDTO.content());
        post.setAuthor(author);

        Post updatedPost = postRepository.save(post);

        return PostDTO.fromEntity(updatedPost);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("No se encuentra el post con id: " + id)
                );

        postRepository.delete(post);
    }
}
package com.backend.blog.dto;

import com.backend.blog.model.Post;

import java.time.LocalDateTime;
import java.util.List;

public record PostDTO(
        Long id,
        String title,
        String content,
        LocalDateTime createdAt,
        AuthorDTO author,
        List<CommentDTO> comments
) {

    public static PostDTO fromEntity(Post post) {
        return new PostDTO(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                post.getCreatedAt(),
                AuthorDTO.fromEntity(post.getAuthor()),
                post.getComments()
                        .stream()
                        .map(CommentDTO::fromEntity)
                        .toList()
        );
    }

    public Post toEntity() {
        Post post = new Post();
        post.setId(id);
        post.setTitle(title);
        post.setContent(content);
        post.setCreatedAt(createdAt);
        post.setAuthor(author.toEntity());

        return post;
    }
}
package com.backend.blog.dto;

import com.backend.blog.model.Author;

import java.util.List;

public record AuthorDTO(
        Long id,
        String name,
        String email,
        List<PostSummaryDTO> posts
) {

    public static AuthorDTO fromEntity(Author author) {
        return new AuthorDTO(
                author.getId(),
                author.getName(),
                author.getEmail(),
                author.getPosts()
                        .stream()
                        .map(PostSummaryDTO::fromEntity)
                        .toList()
        );
    }

    public Author toEntity() {
        Author author = new Author();
        author.setId(id);
        author.setName(name);
        author.setEmail(email);

        return author;
    }
}

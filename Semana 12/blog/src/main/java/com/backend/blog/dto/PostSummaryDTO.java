package com.backend.blog.dto;

import com.backend.blog.model.Post;

import java.time.LocalDateTime;

public record PostSummaryDTO(
        Long id,
        String title,
        LocalDateTime createdAt
) {

    public static PostSummaryDTO fromEntity(Post post) {
        return new PostSummaryDTO(
                post.getId(),
                post.getTitle(),
                post.getCreatedAt()
        );
    }
}
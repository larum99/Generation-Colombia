package com.backend.blog.dto;

import com.backend.blog.model.Comment;

import java.time.LocalDateTime;

public record CommentDTO(
        Long id,
        String text,
        LocalDateTime createdAt
) {

    public static CommentDTO fromEntity(Comment comment) {
        return new CommentDTO(
                comment.getId(),
                comment.getText(),
                comment.getCreatedAt()
        );
    }

    public Comment toEntity() {
        Comment comment = new Comment();
        comment.setId(id);
        comment.setText(text);
        comment.setCreatedAt(createdAt);

        return comment;
    }
}
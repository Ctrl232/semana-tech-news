package com.semana.news_api.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ArticleDTO {
    private Long id;
    private String title;
    private String summary;
    private String content;
    private String category;
    private String author;
    private String imageUrl;
    private LocalDateTime publishedAt;
}

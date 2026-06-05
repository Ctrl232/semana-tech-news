package com.semana.news_api.service;

import com.semana.news_api.dto.ArticleDTO;
import com.semana.news_api.model.Article;
import com.semana.news_api.repository.ArticleRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleService {

    private final ArticleRepository repository;

    public ArticleService(ArticleRepository repository) {
        this.repository = repository;
    }

    public List<ArticleDTO> getAll(String category) {
        List<Article> articles = (category != null && !category.isBlank())
                ? repository.findByCategoryIgnoreCaseAndActiveTrueOrderByPublishedAtDesc(category)
                : repository.findByActiveTrueOrderByPublishedAtDesc();

        return articles.stream().map(this::toDTO).collect(Collectors.toList());
    }

    public ArticleDTO getById(Long id) {
        Article article = repository.findById(id)
                .filter(Article::getActive)
                .orElseThrow(() -> new RuntimeException("Artículo no encontrado"));
        return toDTO(article);
    }

    public ArticleDTO create(ArticleDTO dto) {
        Article article = toEntity(dto);
        article.setPublishedAt(LocalDateTime.now());
        article.setActive(true);
        return toDTO(repository.save(article));
    }

    public ArticleDTO update(Long id, ArticleDTO dto) {
        Article article = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artículo no encontrado"));
        article.setTitle(dto.getTitle());
        article.setSummary(dto.getSummary());
        article.setContent(dto.getContent());
        article.setCategory(dto.getCategory());
        article.setAuthor(dto.getAuthor());
        article.setImageUrl(dto.getImageUrl());
        return toDTO(repository.save(article));
    }

    public void delete(Long id) {
        Article article = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artículo no encontrado"));
        article.setActive(false);
        repository.save(article);
    }

    private ArticleDTO toDTO(Article a) {
        ArticleDTO dto = new ArticleDTO();
        dto.setId(a.getId());
        dto.setTitle(a.getTitle());
        dto.setSummary(a.getSummary());
        dto.setContent(a.getContent());
        dto.setCategory(a.getCategory());
        dto.setAuthor(a.getAuthor());
        dto.setImageUrl(a.getImageUrl());
        dto.setPublishedAt(a.getPublishedAt());
        return dto;
    }

    private Article toEntity(ArticleDTO dto) {
        Article a = new Article();
        a.setTitle(dto.getTitle());
        a.setSummary(dto.getSummary());
        a.setContent(dto.getContent());
        a.setCategory(dto.getCategory());
        a.setAuthor(dto.getAuthor());
        a.setImageUrl(dto.getImageUrl());
        return a;
    }
}

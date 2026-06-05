package com.semana.news_api.repository;

import com.semana.news_api.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findByActiveTrueOrderByPublishedAtDesc();

    List<Article> findByCategoryIgnoreCaseAndActiveTrueOrderByPublishedAtDesc(String category);
}
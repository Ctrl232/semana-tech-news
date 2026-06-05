import { useState, useEffect, useCallback } from 'react'
import { articleService } from '../services/articleService'

export function useArticles(category) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchArticles = useCallback(() => {
    setLoading(true)
    setError(null)
    articleService.getAll(category)
      .then(setArticles)
      .catch(() => setError('No se pudieron cargar los artículos.'))
      .finally(() => setLoading(false))
  }, [category])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return { articles, loading, error, refetch: fetchArticles }
}
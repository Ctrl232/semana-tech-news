import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { articleService } from '../services/articleService'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function ArticleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    articleService.getById(id)
      .then(setArticle)
      .catch(() => setError('No se encontró el artículo.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '5rem', color: '#999' }}>
      Cargando artículo...
    </div>
  )

  if (error) return (
    <div style={{ textAlign: 'center', padding: '5rem', color: '#c0392b' }}>
      {error}
    </div>
  )

  return (
    <main style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 1.5rem' }}>

      <button
        onClick={() => navigate(-1)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#c8102e', fontSize: '14px', fontWeight: '600',
          padding: '0', marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '4px'
        }}
      >
        ← Volver
      </button>

      <span style={{
        background: '#fff0f0', color: '#c8102e',
        fontSize: '11px', fontWeight: '700',
        padding: '3px 10px', borderRadius: '4px',
        textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        {article.category}
      </span>

      <h1 style={{
        fontSize: '28px', fontWeight: '700',
        lineHeight: '1.3', margin: '1rem 0 0.5rem',
        color: '#1a1a1a'
      }}>
        {article.title}
      </h1>

      <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.5', marginBottom: '1rem' }}>
        {article.summary}
      </p>

      <div style={{
        display: 'flex', gap: '12px', alignItems: 'center',
        fontSize: '13px', color: '#999', marginBottom: '1.5rem',
        paddingBottom: '1.5rem', borderBottom: '1px solid #eee'
      }}>
        <span style={{ fontWeight: '500', color: '#555' }}>{article.author}</span>
        <span>·</span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>

      <img
        src={article.imageUrl}
        alt={article.title}
        style={{
          width: '100%', height: '380px',
          objectFit: 'cover', borderRadius: '10px',
          marginBottom: '2rem'
        }}
        onError={e => { e.target.src = 'https://placehold.co/800x400?text=Semana' }}
      />

      <div style={{
        fontSize: '17px', lineHeight: '1.8',
        color: '#2c2c2c', whiteSpace: 'pre-line'
      }}>
        {article.content}
      </div>

    </main>
  )
}
import { useState } from 'react'
import { useArticles } from '../hooks/useArticles'
import ArticleCard from '../components/ArticleCard'
import SkeletonCard from '../components/SkeletonCard'

const CATEGORIES = ['Todas', 'Política', 'Economía', 'Tecnología', 'Deportes', 'Cultura']

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null)
  const { articles, loading, error } = useArticles(activeCategory)

  const handleCategory = (cat) => {
    setActiveCategory(cat === 'Todas' ? null : cat)
  }

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>
          Últimas noticias
        </h1>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Colombia y el mundo, al día.
        </p>
      </div>

      {/* Filtros de categoría */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {CATEGORIES.map(cat => {
          const isActive = (cat === 'Todas' && !activeCategory) || cat === activeCategory
          return (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: isActive ? '2px solid #c8102e' : '1px solid #ddd',
                background: isActive ? '#c8102e' : '#fff',
                color: isActive ? '#fff' : '#444',
                fontSize: '13px',
                fontWeight: isActive ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Error */}
      {error && (
        <div style={{
          background: '#fff0f0', border: '1px solid #f5c6cb',
          borderRadius: '8px', padding: '1rem', color: '#c0392b',
          marginBottom: '1.5rem', fontSize: '14px'
        }}>
          {error}
        </div>
      )}

      {/* Grid de artículos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : articles.map(a => <ArticleCard key={a.id} article={a} />)
        }
      </div>

      {/* Sin resultados */}
      {!loading && !error && articles.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#999' }}>
          <p style={{ fontSize: '16px' }}>No hay artículos en esta categoría.</p>
        </div>
      )}
    </main>
  )
}
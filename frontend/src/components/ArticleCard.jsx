import { useNavigate } from 'react-router-dom'

const CATEGORY_COLORS = {
  'Política':   { bg: '#fff0f0', color: '#c0392b' },
  'Economía':   { bg: '#fff8e1', color: '#b7770d' },
  'Tecnología': { bg: '#e8f4fd', color: '#1a6fa0' },
  'Deportes':   { bg: '#eafaf1', color: '#1e8449' },
  'Cultura':    { bg: '#f3e8ff', color: '#6c3483' },
}

const DEFAULT_COLOR = { bg: '#f0f0f0', color: '#555' }

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function ArticleCard({ article }) {
  const navigate = useNavigate()
  const catStyle = CATEGORY_COLORS[article.category] || DEFAULT_COLOR

  return (
    <div
      onClick={() => navigate(`/noticias/${article.id}`)}
      style={{
        background: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #e8e8e8',
        cursor: 'pointer',
        transition: 'transform 0.15s, box-shadow 0.15s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        onError={e => { e.target.src = 'https://placehold.co/800x400?text=Semana' }}
      />
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <span style={{
          display: 'inline-block',
          background: catStyle.bg,
          color: catStyle.color,
          fontSize: '11px',
          fontWeight: '600',
          padding: '3px 8px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          alignSelf: 'flex-start',
        }}>
          {article.category}
        </span>
        <h3 style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.4', color: '#1a1a1a' }}>
          {article.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', flex: 1 }}>
          {article.summary}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
          <span style={{ fontSize: '12px', color: '#999' }}>{article.author}</span>
          <span style={{ fontSize: '12px', color: '#999' }}>{formatDate(article.publishedAt)}</span>
        </div>
      </div>
    </div>
  )
}
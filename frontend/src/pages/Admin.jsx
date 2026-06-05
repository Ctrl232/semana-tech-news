import { useState } from 'react'
import { useArticles } from '../hooks/useArticles'
import { articleService } from '../services/articleService'
import ArticleForm from '../components/ArticleForm'

export default function Admin() {
  const { articles, loading, refetch } = useArticles()
  const [editing, setEditing]   = useState(null)
  const [creating, setCreating] = useState(false)

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este artículo?')) return
    await articleService.remove(id)
    refetch()
  }

  const handleSave = async (data) => {
    if (editing) {
      await articleService.update(editing.id, data)
    } else {
      await articleService.create(data)
    }
    setEditing(null)
    setCreating(false)
    refetch()
  }

  const showForm = creating || editing !== null

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Panel Admin</h1>
        {!showForm && (
          <button
            onClick={() => setCreating(true)}
            style={{
              background: '#c8102e', color: '#fff', border: 'none',
              padding: '8px 18px', borderRadius: '8px',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer'
            }}
          >
            + Nuevo artículo
          </button>
        )}
      </div>

      {showForm && (
        <ArticleForm
          initial={editing}
          onSave={handleSave}
          onCancel={() => { setEditing(null); setCreating(false) }}
        />
      )}

      {!showForm && (
        <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #e8e8e8', overflow: 'hidden' }}>
          {loading ? (
            <p style={{ padding: '2rem', color: '#999', textAlign: 'center' }}>Cargando...</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                  {['Título', 'Categoría', 'Autor', 'Acciones'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#444' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {articles.map((a, i) => (
                  <tr key={a.id} style={{ borderBottom: i < articles.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                    <td style={{ padding: '12px 16px', color: '#1a1a1a', maxWidth: '320px' }}>
                      <div style={{ fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {a.title}
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{a.category}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{a.author}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => setEditing(a)}
                          style={{
                            background: 'none', border: '1px solid #ddd',
                            padding: '4px 12px', borderRadius: '6px',
                            fontSize: '12px', cursor: 'pointer', color: '#444'
                          }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(a.id)}
                          style={{
                            background: 'none', border: '1px solid #f5c6cb',
                            padding: '4px 12px', borderRadius: '6px',
                            fontSize: '12px', cursor: 'pointer', color: '#c0392b'
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </main>
  )
}
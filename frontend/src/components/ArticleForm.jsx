import { useState } from 'react'

const CATEGORIES = ['Política', 'Economía', 'Tecnología', 'Deportes', 'Cultura']

const EMPTY = { title: '', summary: '', content: '', category: 'Política', author: '', imageUrl: '' }

const inputStyle = {
  width: '100%', padding: '8px 12px',
  border: '1px solid #ddd', borderRadius: '8px',
  fontSize: '14px', color: '#1a1a1a',
  background: '#fff', outline: 'none',
}

export default function ArticleForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial
    ? { title: initial.title, summary: initial.summary, content: initial.content,
        category: initial.category, author: initial.author, imageUrl: initial.imageUrl }
    : EMPTY
  )
  const [saving, setSaving] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.title || !form.category || !form.author) {
      alert('Título, categoría y autor son obligatorios.')
      return
    }
    setSaving(true)
    await onSave(form)
    setSaving(false)
  }

  return (
    <div style={{
      background: '#fff', border: '1px solid #e8e8e8',
      borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem'
    }}>
      <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '1.25rem' }}>
        {initial ? 'Editar artículo' : 'Nuevo artículo'}
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {[
          { label: 'Título *', name: 'title', type: 'text' },
          { label: 'Autor *', name: 'author', type: 'text' },
          { label: 'URL de imagen', name: 'imageUrl', type: 'text' },
        ].map(f => (
          <div key={f.name} style={{ gridColumn: f.name === 'title' ? 'span 2' : 'span 1' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' }}>
              {f.label}
            </label>
            <input
              type={f.type}
              name={f.name}
              value={form[f.name]}
              onChange={handle}
              style={inputStyle}
            />
          </div>
        ))}

        <div>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' }}>
            Categoría *
          </label>
          <select name="category" value={form.category} onChange={handle} style={inputStyle}>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div style={{ gridColumn: 'span 2' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' }}>
            Resumen
          </label>
          <textarea
            name="summary" value={form.summary} onChange={handle} rows={2}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        <div style={{ gridColumn: 'span 2' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' }}>
            Contenido
          </label>
          <textarea
            name="content" value={form.content} onChange={handle} rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '1.25rem', justifyContent: 'flex-end' }}>
        <button onClick={onCancel} style={{
          background: 'none', border: '1px solid #ddd',
          padding: '8px 18px', borderRadius: '8px',
          fontSize: '14px', cursor: 'pointer', color: '#444'
        }}>
          Cancelar
        </button>
        <button onClick={handleSubmit} disabled={saving} style={{
          background: '#c8102e', color: '#fff', border: 'none',
          padding: '8px 18px', borderRadius: '8px',
          fontSize: '14px', fontWeight: '600', cursor: 'pointer',
          opacity: saving ? 0.7 : 1
        }}>
          {saving ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </div>
  )
}
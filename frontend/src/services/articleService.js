import api from './api'

const BASE = '/api/articles'

export const articleService = {
  getAll: (category) => {
    const params = category ? { category } : {}
    return api.get(BASE, { params }).then(r => r.data)
  },

  getById: (id) => {
    return api.get(`${BASE}/${id}`).then(r => r.data)
  },

  create: (data) => {
    return api.post(BASE, data).then(r => r.data)
  },

  update: (id, data) => {
    return api.put(`${BASE}/${id}`, data).then(r => r.data)
  },

  remove: (id) => {
    return api.delete(`${BASE}/${id}`)
  }
}
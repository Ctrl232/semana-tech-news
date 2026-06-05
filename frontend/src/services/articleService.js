import axios from 'axios'

const BASE = '/api/articles'

export const articleService = {
  getAll: (category) => {
    const params = category ? { category } : {}
    return axios.get(BASE, { params }).then(r => r.data)
  },

  getById: (id) => {
    return axios.get(`${BASE}/${id}`).then(r => r.data)
  },

  create: (data) => {
    return axios.post(BASE, data).then(r => r.data)
  },

  update: (id, data) => {
    return axios.put(`${BASE}/${id}`, data).then(r => r.data)
  },

  remove: (id) => {
    return axios.delete(`${BASE}/${id}`)
  }
}
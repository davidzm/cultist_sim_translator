import axios from 'axios'

const api = axios.create( {
    baseURL: 'http://localhost:3000/api'
})

export const insertLanguage = payload => api.post('/language', payload)
export const getAllLanguages = () => api.get('/languages')
export const updateLanguageById = (id, payload) => api.put(`/language/${id}`, payload)
export const deleteLanguageById = id => api.delete(`/language/${id}`)
export const getLanguageById = id => api.get(`/language/${id}`)

const apis = {
    insertLanguage,
    getAllLanguages,
    updateLanguageById,
    deleteLanguageById,
    getLanguageById
}

export default apis

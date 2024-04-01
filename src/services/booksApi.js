import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchRecommendedBooks = (credentials) => axios.get(`/books/recommend?${credentials}`);

export const addBookById = (id) => axios.post(`/books/add/${id}`)

export const addBook = (credentials) => axios.post(`/books/add`, credentials)

export const getOwnBooks = (credentials) => {
    const url = credentials && credentials !== 'all' ? `/books/own?status=${credentials}` : '/books/own'
    return axios.get(url)
}

export const deleteOwnBook = (id) => axios.delete(`/books/remove/${id}`)

export const startReadingBook = (credentials) => axios.post('/books/reading/start', credentials)

export const stopReadingBook = (credentials) => axios.post('/books/reading/finish', credentials)

export const getBookById = (id) => axios.get(`/books/${id}`)

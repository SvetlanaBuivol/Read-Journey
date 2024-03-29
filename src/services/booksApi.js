import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchRecommendedBooks = (credentials) => axios.get(`/books/recommend?${credentials}`);

export const addBookById = (id) => axios.post(`/books/add/${id}`)

export const addBook = (credentials) => axios.post(`/books/add`, credentials)

export const getOwnBooks = () => axios.get('/books/own')

export const deleteOwnBook = (id) => axios.delete(`/books/remove/${id}`)

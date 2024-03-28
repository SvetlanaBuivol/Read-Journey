import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchRecommendedBooks = (credentials) => axios.get(`/books/recommend?${credentials}`);

export const addBookById = (id) => {
    console.log(id)
    axios.post(`/books/add/${id}`)
}
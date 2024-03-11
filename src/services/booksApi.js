import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchRecommendedBooks = () => axios.get('/books/recommend');
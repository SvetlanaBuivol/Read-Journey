import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchRecommendedBooks = (credentials) => axios.get(`/books/recommend?${credentials}`);
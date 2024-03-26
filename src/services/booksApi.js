import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchRecommendedBooks = () => axios.get('/books/recommend');
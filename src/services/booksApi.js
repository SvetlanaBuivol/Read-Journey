import axios from 'axios';
import { store } from '../redux/store';
import { refreshTokenAsync } from '../redux/auth/authOperations';

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (
      axios.isAxiosError(error) &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/users/current/refresh'
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await store.dispatch(refreshTokenAsync());
        if (refreshResponse.meta.requestStatus === 'fulfilled') {
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.payload.token}`;
          return axios(originalRequest);
        } else {
          return Promise.reject(refreshResponse.error);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const fetchRecommendedBooks = credentials =>
  axios.get(`/books/recommend?${credentials}`);

export const getOwnBooks = credentials => {
  const url =
    credentials && credentials !== 'all'
      ? `/books/own?status=${credentials}`
      : '/books/own';
  return axios.get(url);
};

export const getBookById = id => axios.get(`/books/${id}`);

export const addBookById = id => axios.post(`/books/add/${id}`);

export const addBook = credentials => axios.post(`/books/add`, credentials);

export const startReadingBook = credentials =>
  axios.post('/books/reading/start', credentials);

export const stopReadingBook = credentials =>
  axios.post('/books/reading/finish', credentials);

export const deleteOwnBook = id => axios.delete(`/books/remove/${id}`);

export const deleteReadingEvent = credentials =>
  axios.delete(`/books/reading?${credentials}`);

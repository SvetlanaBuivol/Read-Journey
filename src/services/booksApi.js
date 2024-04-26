import axios from 'axios';
import { store } from '../redux/store';
import { refreshTokenAsync } from '../redux/auth/authOperations';

axios.interceptors.response.use(
  response => {
    console.log("response", response)
    return response;
  },
  async error => {
    console.log("error", error)
    const originalRequest = error.config;
    console.log("originalRequest", originalRequest)

    if (
      // axios.isAxiosError(error) &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/users/current/refresh'
    ) {
      console.log('if Block')
      originalRequest._retry = true;

      try {
        console.log('try block')
        const refreshResponse = await store.dispatch(refreshTokenAsync());
        console.log("refreshResponse", refreshResponse)
        if (refreshResponse.meta.requestStatus === 'fulfilled') {
          console.log('if block before bearer')
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.payload.token}`;
          originalRequest._retry = false
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

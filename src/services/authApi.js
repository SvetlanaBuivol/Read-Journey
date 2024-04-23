import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = credentials => axios.post('/users/signup', credentials);

export const logIn = credentials => axios.post('/users/signin', credentials);

export const logOut = () => axios.post('/users/signout');

export const currentUser = () => axios.get('/users/current');

export const refreshToken = () => axios.get('/users/current/refresh');

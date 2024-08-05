import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8001/api', // Adjust this to match your backend URL and port
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUsers = () => API.get('/users');
export const createUser = (userData: { name: string; email: string; password: string; phone: string; }) => API.post('/users', userData);
export const loginUser = (credentials: { email: string; password: string; }) => API.post('/users/login', credentials);
export const getUserProfile = () => API.get('/users/profile');

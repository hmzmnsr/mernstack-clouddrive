import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001/api",
});

//Nice Work There
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

export const getUsers = () => api.get("/users");
export const createUser = (userData: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) => api.post("/users", userData);

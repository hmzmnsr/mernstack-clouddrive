import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001/api",
});

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

export const loginUser = (credentials: { email: string; password: string }) =>
  api.post("/users/login", credentials);

export const getFiles = () => api.get("/files");

export const createFile = (fileData: {
  attachmentRef: string;
  folderPath: string;
}) => api.post("/files", fileData);

export const deleteFile = (fileId: string) => api.delete(`/files/${fileId}`);

export const getAttachments = () => api.get("/attachments");

export const createAttachment = (attachmentData: {
  attachmentPath: string;
  attachmentName: string;
  attachmentType: string;
  attachmentOwnership: string;
  size: number;
}) => api.post("/attachments", attachmentData);

export const deleteAttachment = (attachmentId: string) =>
  api.delete(`/attachments/${attachmentId}`);

// New methods for handling favorite files
export const addFavoriteFile = (fileId: string) =>
  api.post("/users/favorites", { fileId });

export const removeFavoriteFile = (fileId: string) =>
  api.delete("/users/favorites", { data: { fileId } });

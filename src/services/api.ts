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

export const getFiles = () =>
  api.get("/files").then((response) => {
    return response.data.map((file: any) => {
      const attachmentRef = file.attachmentRef || {}; // Default to an empty object if null
      return {
        attachmentName: attachmentRef.attachmentName || "Unknown File",
        attachmentType: attachmentRef.attachmentType || "unknown",
        size: attachmentRef.size || 0,
        dateTime: attachmentRef.dateTime || new Date().toISOString(),
        folderName: file.folderRef?.name || "Unknown Folder",
        isFavorite: file.isFavorite || false,
      };
    });  
  });

export const createFile = (fileData: {
  attachmentRef: string;
  folderPath: string;
}) => api.post("/files", fileData);

export const deleteFile = (fileId: string) => api.delete(`/files/${fileId}`);

// New methods for handling favorite files
export const addFavoriteFile = (fileId: string) =>
  api.post("/users/favorites", { fileId });

export const removeFavoriteFile = (fileId: string) =>
  api.delete("/users/favorites", { data: { fileId } });

// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://knowledgebase-platform-backend-4.onrender.com/api",
  withCredentials: true, // Only needed if you're using cookies
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

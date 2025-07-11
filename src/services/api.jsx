import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // Ensures cookies are sent (important for auth)
});

// ✅ Dynamically attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Get latest token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

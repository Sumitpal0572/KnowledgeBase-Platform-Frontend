// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData)); // ✅ Restore user from localStorage
    }
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      { email, password },
      { withCredentials: true }
    );

    const { token, user } = res.data;

    if (token) {
      localStorage.setItem("token", token); // ✅ Save token
      localStorage.setItem("user", JSON.stringify(user)); // ✅ Save user
      setUser(user);
    } else {
      throw new Error("Token missing in response");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

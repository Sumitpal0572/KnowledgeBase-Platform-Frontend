import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-3 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-3 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

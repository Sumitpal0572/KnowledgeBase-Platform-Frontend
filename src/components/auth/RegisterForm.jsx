import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password });
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 px-3 py-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

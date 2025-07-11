import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth(); // ✅ Get login from AuthContext
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password); // ✅ Trigger login from context
      navigate("/dashboard"); // ✅ Redirect on success
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Login to KnowledgeBase
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <a href="/register" className="text-indigo-600 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;

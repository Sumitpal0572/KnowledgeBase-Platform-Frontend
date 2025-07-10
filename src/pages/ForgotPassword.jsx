import { useState } from "react";
import api from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await api.post("/auth/forgot-password", { email });
      setMessage(res.data.message || "Reset instructions sent to your email.");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Try again later."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Forgot Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Send Reset Link
        </button>
      </form>

      {message && (
        <p className="mt-4 text-green-600 text-sm text-center">{message}</p>
      )}
      {error && (
        <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
      )}
    </div>
  );
};

export default ForgotPassword;

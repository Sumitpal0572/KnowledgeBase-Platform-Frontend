import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col justify-center items-center text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-6">Welcome to KnowledgeBase</h1>
      <p className="text-xl mb-8 max-w-xl">
        Collaborate, document, and manage your team's knowledge in one powerful
        platform.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-white text-indigo-600 px-6 py-2 rounded font-semibold shadow hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white text-pink-600 px-6 py-2 rounded font-semibold shadow hover:bg-gray-100"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;

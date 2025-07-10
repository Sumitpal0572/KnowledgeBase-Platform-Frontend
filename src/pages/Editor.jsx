import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/documents", { title, content });
    navigate("/dashboard");
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Document Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Start writing your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="w-full p-3 border border-gray-300 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Editor;

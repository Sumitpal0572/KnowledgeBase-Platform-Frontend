import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/documents", { title, content }); // ✅ updated path
      navigate(`/document/${res.data._id}`); // redirect to document view after creation
    } catch (err) {
      console.error("Document creation failed", err);
      setError("Failed to save document. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Create a New Document</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}

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

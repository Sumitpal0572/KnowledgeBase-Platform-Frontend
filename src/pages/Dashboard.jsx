import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const { data } = await api.get("/documents");
      setDocuments(data);
    };
    fetchDocs();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Documents</h1>
      <Link
        to="/editor"
        className="inline-block mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        + New Document
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Link
            to={`/view/${doc._id}`}
            key={doc._id}
            className="p-4 bg-white rounded shadow hover:shadow-md border"
          >
            <h2 className="font-semibold text-lg">{doc.title}</h2>
            <p className="text-sm text-gray-600">
              Last edited: {new Date(doc.updatedAt).toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

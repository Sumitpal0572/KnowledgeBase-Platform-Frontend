import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ViewDocument = () => {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const fetchDoc = async () => {
      const { data } = await api.get(`/documents/${id}`);
      setDoc(data);
    };
    fetchDoc();
  }, [id]);

  if (!doc) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Last updated: {new Date(doc.updatedAt).toLocaleString()}
      </p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: doc.content }}
      />
    </div>
  );
};

export default ViewDocument;

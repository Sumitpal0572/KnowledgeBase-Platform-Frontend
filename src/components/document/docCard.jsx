import { Link } from "react-router-dom";

const DocCard = ({ doc }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition-all">
      <h2 className="text-xl font-semibold text-gray-800 mb-1 truncate">
        {doc.title}
      </h2>
      <p className="text-sm text-gray-500 mb-2">
        By {doc.author?.name || "Unknown"} •{" "}
        {new Date(doc.updatedAt).toLocaleDateString()}
      </p>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
        {doc.content.replace(/<[^>]+>/g, "").slice(0, 150)}...
      </p>
      <Link
        to={`/document/${doc._id}`}
        className="text-indigo-600 hover:underline text-sm font-medium"
      >
        View Document
      </Link>
    </div>
  );
};

export default DocCard;

import { Link } from "react-router-dom";

export default function ToolCard({ title, description, link }) {
  return (
    <Link
      to={link}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border hover:border-blue-500"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      <span className="text-blue-500 font-medium">
        Open Tool →
      </span>
    </Link>
  );
}
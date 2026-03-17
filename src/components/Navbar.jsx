import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-blue-400"
          >
            {"<DevToolsHub/>"}
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link to="/json-formatter" className="hover:text-blue-400">
              JSON
            </Link>

            <Link to="/regex-tester" className="hover:text-blue-400">
              Regex
            </Link>

            <Link to="/hash-generator" className="hover:text-blue-400">
              Security
            </Link>

            <Link to="/uuid-generator" className="hover:text-blue-400">
              Generators
            </Link>

            <Link to="/timestamp-converter" className="hover:text-blue-400">
              Utilities
            </Link>

            <Link to="/color-converter" className="hover:text-blue-400">
              Design
            </Link>

          </div>


          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">

          <Link
            to="/"
            className="block py-2 border-b border-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/json-formatter"
            className="block py-2 border-b border-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            JSON Tools
          </Link>

          <Link
            to="/regex-tester"
            className="block py-2 border-b border-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Regex Tester
          </Link>

          <Link
            to="/hash-generator"
            className="block py-2 border-b border-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Security Tools
          </Link>

          <Link
            to="/uuid-generator"
            className="block py-2 border-b border-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Generators
          </Link>

          <Link
            to="/timestamp-converter"
            className="block py-2 border-b border-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Utilities
          </Link>

          <Link
            to="/color-converter"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Design Tools
          </Link>

        </div>

      )}

    </nav>
  );
}
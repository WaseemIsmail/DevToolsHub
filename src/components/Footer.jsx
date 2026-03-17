import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Website Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
            {"<DevToolsHub/>"}
            </h2>

            <p className="text-sm">
              Free developer tools for formatting JSON, encoding data,
              generating UUIDs, and many other useful utilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h2>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/json-formatter" className="hover:text-white">
                  JSON Formatter
                </Link>
              </li>

              <li>
                <Link to="/base64-encoder" className="hover:text-white">
                  Base64 Encoder
                </Link>
              </li>

              <li>
                <Link to="/uuid-generator" className="hover:text-white">
                  UUID Generator
                </Link>
              </li>

              <li>
                <Link to="/password-generator" className="hover:text-white">
                  Password Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Legal
            </h2>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} DevToolsHub. All rights reserved.
      </div>

    </footer>
  );
}
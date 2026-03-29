import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Contact
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, feature ideas, or found a bug?
            DevToolsHub welcomes feedback to help improve the platform and make
            the tools more useful.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is a browser-based developer utility platform designed
              to provide practical and easy-to-use tools for everyday technical
              work. If you have feedback, feature requests, bug reports, or
              general questions, feel free to get in touch using the contact
              information below.
            </p>
          </section>

          {/* Contact Info */}
          <section className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <a
                  href="mailto:waseemismail.dev@gmail.com"
                  className="text-blue-600 hover:underline break-all"
                >
                  waseemismail.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
              <span className="text-2xl">💻</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Project</p>
                <p className="text-gray-700">DevToolsHub</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
              <span className="text-2xl">⏱</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Response Time
                </p>
                <p className="text-gray-700">Usually within 24–48 hours</p>
              </div>
            </div>
          </section>
        </div>

        {/* Support Scope */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What You Can Contact Us About
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>• Bug reports and technical issues</li>
            <li>• Suggestions for improving existing tools</li>
            <li>• Requests for new tools or features</li>
            <li>• General questions about DevToolsHub</li>
            <li>• Feedback on usability and performance</li>
          </ul>
        </div>

        {/* Explore the Platform */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explore the Platform
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            While you are here, you can also explore some of the most useful
            tools available on DevToolsHub.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/json-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON Formatter
            </Link>
            <Link
              to="/base64-encoder"
              className="text-blue-600 hover:underline font-medium"
            >
              Base64 Encoder
            </Link>
            <Link
              to="/uuid-generator"
              className="text-blue-600 hover:underline font-medium"
            >
              UUID Generator
            </Link>
            <Link
              to="/regex-tester"
              className="text-blue-600 hover:underline font-medium"
            >
              Regex Tester
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
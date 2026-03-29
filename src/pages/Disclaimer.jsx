import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Disclaimer
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Please read this disclaimer carefully before using DevToolsHub and
            relying on any tools, outputs, or information provided on the
            platform.
          </p>

          <p className="text-gray-500 text-sm text-center mt-4">
            Last updated: 26/03/2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub provides online developer tools and utilities for
              general informational, educational, and productivity purposes.
              While every effort is made to keep the tools useful, accurate, and
              reliable, DevToolsHub does not guarantee that all outputs,
              results, or information provided by the platform will always be
              complete, accurate, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Use at Your Own Risk
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Users are responsible for reviewing and verifying any results
              generated through the tools available on DevToolsHub before using
              them in development, testing, production, or any other important
              workflow. Reliance on any tool output is at the user’s own
              discretion and responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              No Professional Advice
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The content and tools provided on this website do not constitute
              professional, legal, financial, cybersecurity, or technical
              advice. Users should seek appropriate professional guidance where
              necessary before making decisions based on any output or
              information from the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              External Responsibility
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is not responsible for any loss, damage, error, or
              issue resulting from the use of this website, its tools, or
              reliance on generated output. Users should ensure that any data,
              code, queries, strings, or content processed through the platform
              is handled carefully and reviewed before actual use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Changes to This Disclaimer
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This Disclaimer may be updated from time to time. Any future
              changes will be reflected on this page together with the revised
              update date.
            </p>
          </section>
        </div>

        {/* Extra Section */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explore the Platform
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            You can continue exploring DevToolsHub and its practical browser-based
            developer tools below.
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
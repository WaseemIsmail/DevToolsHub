import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Terms of Service
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            By using DevToolsHub, you agree to follow these terms. Please read
            them carefully to understand your rights and responsibilities when
            using the platform.
          </p>

          <p className="text-gray-500 text-sm text-center mt-4">
            Last updated: 26/03/2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service govern your access to and use of
              DevToolsHub. By accessing or using the platform, you agree to be
              bound by these terms and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Use of Tools
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The tools provided on DevToolsHub are free to use and are intended
              for development, educational, and productivity purposes. Users are
              responsible for how they use these tools and the data they input
              into them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Acceptable Use
            </h2>

            <p className="text-gray-700 leading-relaxed">
              You agree not to misuse the platform or use it for any unlawful,
              harmful, or abusive activities. DevToolsHub should not be used in
              ways that could damage, disrupt, or negatively impact the platform
              or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              No Warranty
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is provided on an "as-is" and "as-available" basis. We
              do not guarantee that the platform will always be available,
              secure, or free from errors or interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Limitation of Liability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub and its creators are not liable for any direct,
              indirect, incidental, or consequential damages resulting from the
              use or inability to use the platform or its tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Changes to Terms
            </h2>

            <p className="text-gray-700 leading-relaxed">
              These Terms of Service may be updated from time to time. Continued
              use of the platform after changes are posted indicates acceptance
              of the updated terms.
            </p>
          </section>
        </div>

        {/* Optional Navigation (you can remove if footer already covers it) */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explore Tools
          </h2>

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
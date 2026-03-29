import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Privacy Policy
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            This Privacy Policy explains how DevToolsHub handles information,
            protects user privacy, and maintains transparency about how the
            platform operates.
          </p>

          <p className="text-gray-500 text-sm text-center mt-4">
            Last updated: 26/03/2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub respects user privacy and is committed to being clear
              about how the platform operates. The website provides developer
              utilities that are intended to be simple, practical, and easy to
              use while maintaining transparency about data handling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Data Collection
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is designed so that tool inputs are generally handled
              directly within the user’s browser. The platform does not
              intentionally collect, store, or process the content users enter
              into the tools as part of normal tool usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Cookies
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub does not currently use cookies for tracking or for
              collecting personal information. If cookies or similar
              technologies are introduced in the future, this Privacy Policy
              will be updated to reflect those changes clearly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Third-Party Services
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The platform may use third-party services such as analytics,
              hosting, or performance tools to help improve usability,
              reliability, and overall user experience. These services may
              collect limited technical or anonymized usage information
              according to their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              External Platforms and Technical Logs
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Like most websites, technical information such as browser type,
              device details, request information, or server logs may be
              processed by hosting providers or related infrastructure services
              for security, maintenance, and performance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Changes to This Policy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy may be updated from time to time. Any updates
              will be posted on this page together with the revised update date
              so users can stay informed about any changes.
            </p>
          </section>
        </div>

        {/* Extra Section */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explore the Platform
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            You can continue exploring DevToolsHub and its browser-based
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
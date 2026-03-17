export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Terms of Service
          </h1>

          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-8 border">

          <section>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using DevToolsHub, you agree to comply with the
              following Terms of Service. These terms govern your use of the
              website and the developer tools provided on this platform.
            </p>
          </section>

          {/* Use of Tools */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Use of Tools
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The tools provided on DevToolsHub are free to use and are intended
              for development, educational, and productivity purposes. Users are
              responsible for how they utilize these tools and the data they
              input.
            </p>
          </section>

          {/* No Warranty */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No Warranty
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub provides services on an "as-is" and "as-available"
              basis. We do not guarantee that the tools will always function
              without interruptions or errors.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Limitation of Liability
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub and its creators shall not be liable for any direct,
              indirect, incidental, or consequential damages resulting from the
              use or inability to use the services provided on this website.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes to Terms
            </h2>

            <p className="text-gray-700 leading-relaxed">
              These Terms of Service may be updated occasionally. Continued use
              of the website after updates indicates acceptance of the revised
              terms.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}
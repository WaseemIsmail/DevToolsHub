export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-8 border">

          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub respects your privacy. This website provides developer
              utilities that run entirely in your browser. We are committed to
              protecting your personal data and ensuring transparency about how
              this website operates.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Data Collection
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub does not collect, store, or transmit any personal
              information. All tools operate locally within your browser,
              meaning the data you enter never leaves your device.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Cookies
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This website does not use cookies for tracking or collecting user
              data. Any future features that require cookies will be clearly
              disclosed in this policy.
            </p>
          </section>

          {/* Third Party */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Third-Party Services
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If analytics or external services are added in the future, they
              may collect anonymized usage data to help improve the website and
              user experience.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes to This Policy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy may be updated from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}
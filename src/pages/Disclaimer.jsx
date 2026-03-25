export default function Disclaimer() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Disclaimer
          </h1>

          <p className="text-gray-600">
            Last updated: 26/03/2026
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 space-y-8 border">
          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub provides online developer tools and utilities for
              general informational, educational, and productivity purposes.
              While we aim to keep the tools useful, accurate, and reliable, we
              do not guarantee that all outputs, results, or information
              provided by the website will always be complete, accurate, or
              error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Use at Your Own Risk
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Users are responsible for verifying any results generated through
              the tools available on DevToolsHub before relying on them in
              development, testing, production, or other important work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No Professional Advice
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The content and tools provided on this website do not constitute
              professional, legal, financial, cybersecurity, or technical advice.
              Users should seek appropriate professional guidance where needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              External Responsibility
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is not responsible for any loss, damage, or issues
              resulting from the use of this website, its tools, or reliance on
              any generated output. Users should ensure that any data, code, or
              content they process through the platform is handled appropriately
              and reviewed before use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes to This Disclaimer
            </h2>

            <p className="text-gray-700 leading-relaxed">
              This Disclaimer may be updated from time to time. Any changes will
              be reflected on this page with the updated revision date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
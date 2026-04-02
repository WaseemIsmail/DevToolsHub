import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { testRegex } from "../../utils/regexUtils";
import CopyButton from "../../components/CopyButton";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");
  const [hasTested, setHasTested] = useState(false);

  const handleTest = () => {
    setHasTested(true);

    const trimmedPattern = pattern.trim();
    const trimmedText = text;

    if (!trimmedPattern) {
      setMatches([]);
      setError("Please enter a regex pattern");
      return;
    }

    if (!trimmedText) {
      setMatches([]);
      setError("Please enter text to test");
      return;
    }

    const result = testRegex(trimmedPattern, trimmedText);

    if (result.success) {
      setMatches(result.matches);
      setError("");
    } else {
      setMatches([]);
      setError(result.error);
    }
  };

  const clearFields = () => {
    setPattern("");
    setText("");
    setMatches([]);
    setError("");
    setHasTested(false);
  };

  return (
    <>
      <Helmet>
        <title>Regex Tester | DevToolsHub</title>
        <meta
          name="description"
          content="Test regular expressions instantly and inspect matching results. This tool is useful for developers, testers, and students working with pattern matching and text validation."
        />
        <meta
          name="keywords"
          content="regex tester, regular expression tester, regex tool, pattern matching, regex validator, devtools hub"
        />
        <link
          rel="canonical"
          href="https://devtoolshub-tools.netlify.app/regex-tester"
        />
        <meta property="og:title" content="Regex Tester | DevToolsHub" />
        <meta
          property="og:description"
          content="Test regular expressions instantly and inspect matching results with this free online tool."
        />
        <meta
          property="og:url"
          content="https://devtoolshub-tools.netlify.app/regex-tester"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Regex Tester | DevToolsHub"
        />
        <meta
          name="twitter:description"
          content="Test regular expressions instantly and inspect matching results."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tool Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Regex Tester
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Test regular expressions instantly and inspect matching results.
              This tool is useful for developers, testers, and students working
              with pattern matching and text validation.
            </p>

            {/* Regex Pattern */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regex Pattern
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-3 font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter regex pattern (example: \d+)"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
              />
            </div>

            {/* Test Text */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Test Text
              </label>
              <textarea
                className="w-full border rounded-lg p-3 h-40 font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter text to test..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={handleTest}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Test Regex
              </button>

              <button
                onClick={clearFields}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Clear
              </button>

              {hasTested && matches.length > 0 && (
                <CopyButton text={matches.join("\n")} />
              )}
            </div>

            {/* Error */}
            {hasTested && error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {/* Matches */}
            {hasTested && !error && matches.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-900">
                  Matches ({matches.length})
                </h2>

                <ul className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto space-y-1">
                  {matches.map((match, index) => (
                    <li key={index} className="font-mono break-all">
                      {match}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* No Matches */}
            {hasTested && !error && matches.length === 0 && (
              <div className="mt-6 bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-lg">
                No matches found.
              </div>
            )}
          </div>

          {/* What is Regex */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is a Regex Tester?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              A regex tester helps you check whether a regular expression pattern
              matches specific text. Regular expressions are commonly used for
              searching, filtering, validating, and extracting text in software
              development.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This tool lets you quickly test a pattern, view the matched values,
              and confirm whether the regex works as expected before using it in
              code or configuration.
            </p>
          </div>

          {/* How to Use */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Tool
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>1. Enter the regex pattern in the pattern field.</p>
              <p>2. Paste or type the content you want to test.</p>
              <p>3. Click <strong>Test Regex</strong>.</p>
              <p>4. Review the matched results or any error message.</p>
              <p>5. Copy the matches if needed using the copy button.</p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Example
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Regex Pattern</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
\d+
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Test Text</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
Order 123 was shipped on 2026-03-29 with 2 items.
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Matches</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
123
2026
03
29
2
                </pre>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Common Use Cases
            </h2>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>• Validating email addresses, phone numbers, and IDs</li>
              <li>• Extracting numbers, words, or patterns from text</li>
              <li>• Testing search and replace logic in applications</li>
              <li>• Debugging regex patterns before using them in code</li>
              <li>• Learning regular expression syntax and behavior</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  What is regex used for?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Regex is used for pattern matching, text validation, searching,
                  extracting values, and transforming strings in many programming
                  languages and tools.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Why am I getting no matches?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No matches usually means the pattern does not match the provided
                  text exactly, or the regex syntax may not fit the text format.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Can this tool help me debug invalid regex?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. If the pattern is invalid, the tool shows an error so you
                  can adjust the expression and test again.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Related Tools
            </h2>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/url-encoder"
                className="text-blue-600 hover:underline font-medium"
              >
                URL Encoder
              </Link>
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
                to="/http-status-codes"
                className="text-blue-600 hover:underline font-medium"
              >
                HTTP Status Codes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
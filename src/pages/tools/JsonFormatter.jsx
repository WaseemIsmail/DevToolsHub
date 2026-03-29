import { useState } from "react";
import { Link } from "react-router-dom";
import { formatJSON } from "../../utils/jsonFormatter";
import CopyButton from "../../components/CopyButton";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please paste JSON data before formatting");
      setOutput("");
      return;
    }

    const result = formatJSON(trimmedInput);

    if (result.success) {
      setOutput(result.data);
      setError("");
    } else {
      setError(result.error);
      setOutput("");
    }
  };

  const clearFields = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Tool Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold mb-3 text-center text-gray-900">
            JSON Formatter
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Format and validate JSON data instantly. This free online JSON
            formatter helps developers and testers make JSON easier to read,
            debug, and use in applications.
          </p>

          {/* Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JSON Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`{"name":"John","age":25,"city":"Colombo"}`}
              className="w-full border rounded-lg p-3 h-44 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={handleFormat}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Format JSON
            </button>

            <button
              onClick={clearFields}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear
            </button>

            {output && <CopyButton text={output} />}
          </div>

          {/* Error */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Output */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Formatted Output
            </label>
            <textarea
              value={output}
              readOnly
              className="w-full border rounded-lg p-3 h-44 bg-gray-50 font-mono"
              placeholder="Formatted JSON will appear here..."
            />
          </div>
        </div>

        {/* What is JSON Formatter */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is a JSON Formatter?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A JSON formatter takes raw or compact JSON data and turns it into a
            clean, readable structure with proper indentation and spacing. This
            makes the data easier to understand and work with.
          </p>

          <p className="text-gray-700 leading-relaxed">
            JSON is widely used in APIs, web applications, configuration files,
            and data exchange. Formatting JSON helps developers debug issues,
            inspect data quickly, and reduce mistakes when reading nested
            objects and arrays.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Paste your raw JSON data into the input box.</p>
            <p>2. Click <strong>Format JSON</strong>.</p>
            <p>3. Review the formatted and validated result.</p>
            <p>4. Copy the output using the copy button.</p>
            <p>5. Use Clear if you want to test another JSON payload.</p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Example
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Raw JSON</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`{"name":"John","age":25,"city":"Colombo"}`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Formatted JSON
              </h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`{
  "name": "John",
  "age": 25,
  "city": "Colombo"
}`}
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
            <li>• Formatting API request and response payloads</li>
            <li>• Debugging broken or unreadable JSON data</li>
            <li>• Inspecting nested objects and arrays more clearly</li>
            <li>• Preparing JSON for development and testing</li>
            <li>• Learning JSON structure and validation basics</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What does a JSON formatter do?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It makes raw JSON easier to read by adding indentation,
                line breaks, and spacing while also checking if the JSON is
                valid.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why is JSON formatting useful?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It helps developers read data more clearly, find mistakes
                faster, and work with API payloads more efficiently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Can this tool detect invalid JSON?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. If the input is not valid JSON, the tool will show an
                error instead of generating formatted output.
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
              to="/json-to-csv"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON to CSV
            </Link>
            <Link
              to="/csv-to-json"
              className="text-blue-600 hover:underline font-medium"
            >
              CSV to JSON
            </Link>
            <Link
              to="/regex-tester"
              className="text-blue-600 hover:underline font-medium"
            >
              Regex Tester
            </Link>
            <Link
              to="/base64-encoder"
              className="text-blue-600 hover:underline font-medium"
            >
              Base64 Encoder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
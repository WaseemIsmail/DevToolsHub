import { useState } from "react";
import { Link } from "react-router-dom";
import { jsonToCSV } from "../../utils/converterUtils";
import CopyButton from "../../components/CopyButton";

export default function JSONtoCSV() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please paste JSON data before converting");
      setOutput("");
      return;
    }

    const result = jsonToCSV(trimmedInput);

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
          <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
            JSON to CSV Converter
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Convert JSON arrays into CSV format instantly. This free online JSON
            to CSV converter is useful for developers, testers, analysts, and
            anyone working with structured data.
          </p>

          {/* JSON Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JSON Input
            </label>
            <textarea
              className="w-full border rounded-lg p-3 h-44 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`[
  { "name": "John", "age": 25, "city": "Colombo" },
  { "name": "Sarah", "age": 30, "city": "Kandy" }
]`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={handleConvert}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Convert to CSV
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

          {/* CSV Output */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CSV Output
            </label>
            <textarea
              className="w-full border rounded-lg p-3 h-44 bg-gray-50 font-mono"
              placeholder="Converted CSV will appear here..."
              value={output}
              readOnly
            />
          </div>
        </div>

        {/* What is JSON to CSV */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is JSON to CSV Conversion?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            JSON to CSV conversion changes structured JSON array data into a
            comma-separated values format. JSON is widely used in APIs and web
            applications, while CSV is commonly used in spreadsheets, reports,
            and data exports.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Converting JSON to CSV is useful when you want to move application
            data into Excel, Google Sheets, reporting tools, or other tabular
            formats.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Paste a valid JSON array into the input box.</p>
            <p>2. Make sure each object contains the fields you want in the CSV output.</p>
            <p>3. Click <strong>Convert to CSV</strong>.</p>
            <p>4. Review the generated CSV result.</p>
            <p>5. Use the copy button to quickly copy the output.</p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Example
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">JSON Input</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`[
  { "name": "John", "age": 25, "city": "Colombo" },
  { "name": "Sarah", "age": 30, "city": "Kandy" }
]`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">CSV Output</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`name,age,city
John,25,Colombo
Sarah,30,Kandy`}
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
            <li>• Exporting API data into spreadsheet format</li>
            <li>• Preparing structured data for Excel or Google Sheets</li>
            <li>• Creating CSV files from application data</li>
            <li>• Converting JSON arrays for reporting workflows</li>
            <li>• Learning how JSON fields map into CSV columns</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What kind of JSON works best with this tool?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This tool works best with a JSON array of objects where each
                object has consistent fields.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why convert JSON to CSV?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                CSV is easier to use in spreadsheet software and reporting
                tools, so converting JSON to CSV helps make data more portable
                and easier to review.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Can I use nested JSON objects?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This tool works best with simple JSON arrays. Complex nested
                structures may need additional formatting before conversion.
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
              to="/csv-to-json"
              className="text-blue-600 hover:underline font-medium"
            >
              CSV to JSON
            </Link>
            <Link
              to="/json-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON Formatter
            </Link>
            <Link
              to="/sql-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              SQL Formatter
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
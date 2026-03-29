import { useState } from "react";
import { Link } from "react-router-dom";
import { csvToJSON } from "../../utils/converterUtils";
import CopyButton from "../../components/CopyButton";

export default function CSVtoJSON() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please paste CSV data before converting");
      setOutput("");
      return;
    }

    const result = csvToJSON(trimmedInput);

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
            CSV to JSON Converter
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Convert CSV data into structured JSON format instantly. This free
            online CSV to JSON converter is useful for developers, testers,
            analysts, and anyone working with structured data.
          </p>

          {/* CSV Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CSV Input
            </label>
            <textarea
              className="w-full border rounded-lg p-3 h-44 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`name,age,city
John,25,Colombo
Sarah,30,Kandy`}
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
              Convert to JSON
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

          {/* JSON Output */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JSON Output
            </label>
            <textarea
              className="w-full border rounded-lg p-3 h-44 bg-gray-50 font-mono"
              placeholder="Converted JSON will appear here..."
              value={output}
              readOnly
            />
          </div>
        </div>

        {/* What is CSV to JSON */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is CSV to JSON Conversion?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            CSV to JSON conversion changes tabular comma-separated values into a
            structured JSON format. CSV is commonly used for spreadsheets and
            exported data, while JSON is widely used in APIs, web applications,
            and JavaScript-based projects.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Converting CSV to JSON makes the data easier to use in applications,
            front-end projects, APIs, automation workflows, and testing
            environments.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Paste your CSV data into the input area.</p>
            <p>2. Make sure the first row contains the column headers.</p>
            <p>3. Click <strong>Convert to JSON</strong>.</p>
            <p>4. Review the generated JSON output.</p>
            <p>5. Use the copy button to copy the result quickly.</p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Example
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">CSV Input</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`name,age,city
John,25,Colombo
Sarah,30,Kandy`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">JSON Output</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`[
  {
    "name": "John",
    "age": "25",
    "city": "Colombo"
  },
  {
    "name": "Sarah",
    "age": "30",
    "city": "Kandy"
  }
]`}
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
            <li>• Preparing spreadsheet data for APIs and web apps</li>
            <li>• Converting exported CSV files into JSON for development</li>
            <li>• Testing structured JSON payloads</li>
            <li>• Transforming table data for JavaScript projects</li>
            <li>• Learning how CSV rows map into JSON objects</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What format should the CSV input have?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The CSV input should have a header row first, followed by one or
                more data rows. Each value should be separated by commas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why convert CSV to JSON?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                JSON is commonly used in web development, APIs, and JavaScript
                applications, so converting CSV to JSON makes data easier to use
                in modern applications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Does this tool support all CSV formats?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This tool works best with standard comma-separated CSV data with
                a simple header row. Complex CSV files with special formatting
                may need additional handling.
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
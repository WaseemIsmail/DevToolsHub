import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "sql-formatter";
import CopyButton from "../../components/CopyButton";

export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please paste an SQL query before formatting");
      setOutput("");
      return;
    }

    try {
      const formattedSQL = format(trimmedInput);
      setOutput(formattedSQL);
      setError("");
    } catch {
      setError("Invalid SQL query");
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
            SQL Formatter
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Format and beautify SQL queries for better readability. This free
            online SQL formatter helps developers, analysts, and database users
            organize raw queries into a cleaner structure.
          </p>

          {/* SQL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SQL Input
            </label>
            <textarea
              className="w-full border rounded-lg p-3 h-44 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`SELECT id,name,email FROM users WHERE status='active' AND created_at > '2026-01-01' ORDER BY created_at DESC;`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={handleFormat}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Format SQL
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
              className="w-full border rounded-lg p-3 h-52 bg-gray-50 font-mono"
              placeholder="Formatted SQL will appear here..."
              value={output}
              readOnly
            />
          </div>
        </div>

        {/* What is SQL Formatting */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is an SQL Formatter?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            An SQL formatter takes raw SQL queries and restructures them into a
            more readable layout using indentation, line breaks, and spacing.
            This makes queries easier to understand, debug, review, and share.
          </p>

          <p className="text-gray-700 leading-relaxed">
            SQL formatting is especially useful when working with long queries,
            nested conditions, joins, filtering logic, and reporting queries in
            development or database analysis workflows.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Paste your SQL query into the input box.</p>
            <p>2. Click <strong>Format SQL</strong>.</p>
            <p>3. Review the cleaned and formatted SQL output.</p>
            <p>4. Use the copy button to copy the formatted query.</p>
            <p>5. Use Clear to reset the input and output fields.</p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Example
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Raw SQL</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`SELECT id,name,email FROM users WHERE status='active' AND created_at > '2026-01-01' ORDER BY created_at DESC;`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Formatted SQL</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
{`SELECT
  id,
  name,
  email
FROM users
WHERE
  status = 'active'
  AND created_at > '2026-01-01'
ORDER BY created_at DESC;`}
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
            <li>• Making SQL queries easier to read and review</li>
            <li>• Cleaning copied queries from logs or applications</li>
            <li>• Preparing SQL for debugging or peer review</li>
            <li>• Organizing long SELECT, JOIN, and WHERE clauses</li>
            <li>• Learning how structured SQL queries should look</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why should I format SQL queries?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Formatting makes SQL easier to read, reduces confusion, and
                helps you understand query structure more quickly.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Does formatting change how the SQL works?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Formatting only changes the visual structure of the query,
                not the logic or result of the SQL statement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Can this tool format long queries?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. It is useful for both short and long queries, especially
                those with joins, filters, and multiple conditions.
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
              to="/json-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON Formatter
            </Link>
            <Link
              to="/csv-to-json"
              className="text-blue-600 hover:underline font-medium"
            >
              CSV to JSON
            </Link>
            <Link
              to="/json-to-csv"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON to CSV
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
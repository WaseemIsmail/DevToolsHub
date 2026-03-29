import { useState } from "react";
import { Link } from "react-router-dom";
import CopyButton from "../../components/CopyButton";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const convertToDate = () => {
    if (!timestamp) {
      setError("Please enter a Unix timestamp");
      return;
    }

    const parsed = Number(timestamp);

    if (Number.isNaN(parsed)) {
      setError("Invalid timestamp");
      return;
    }

    const d = new Date(parsed * 1000);

    if (Number.isNaN(d.getTime())) {
      setError("Invalid timestamp");
      return;
    }

    setDate(d.toString());
    setError("");
  };

  const convertToTimestamp = () => {
    if (!date.trim()) {
      setError("Please enter a readable date");
      return;
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      setError("Invalid date format");
      return;
    }

    const ts = Math.floor(parsedDate.getTime() / 1000);
    setTimestamp(ts.toString());
    setError("");
  };

  const getCurrentTimestamp = () => {
    const ts = Math.floor(Date.now() / 1000);
    setTimestamp(ts.toString());
    setError("");
  };

  const clearFields = () => {
    setTimestamp("");
    setDate("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Tool Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
            Timestamp Converter
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Convert Unix timestamps to human-readable dates and convert readable
            dates back into Unix timestamps instantly.
          </p>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Timestamp Section */}
          <div className="mb-8">
            <label className="block font-medium text-gray-800 mb-2">
              Unix Timestamp
            </label>

            <input
              type="number"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              className="w-full border p-3 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter timestamp..."
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={convertToDate}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Convert to Date
              </button>

              <button
                onClick={getCurrentTimestamp}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Current Timestamp
              </button>

              {timestamp && <CopyButton text={timestamp.toString()} />}
            </div>
          </div>

          {/* Date Section */}
          <div className="mb-6">
            <label className="block font-medium text-gray-800 mb-2">
              Readable Date
            </label>

            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter date... Example: 2026-03-29 18:30:00"
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={convertToTimestamp}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Convert to Timestamp
              </button>

              <button
                onClick={clearFields}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Clear
              </button>

              {date && <CopyButton text={date} />}
            </div>
          </div>
        </div>

        {/* What is a Timestamp */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is a Unix Timestamp?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A Unix timestamp is the number of seconds that have passed since
            January 1, 1970 UTC. It is commonly used in software development,
            databases, APIs, and logging systems to represent dates in a simple
            numeric format.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Converting timestamps into readable dates helps developers
            understand logs, API responses, database values, and event times
            more easily.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Enter a Unix timestamp and click <strong>Convert to Date</strong>.</p>
            <p>2. Or enter a readable date and click <strong>Convert to Timestamp</strong>.</p>
            <p>3. Use <strong>Current Timestamp</strong> to get the current Unix time.</p>
            <p>4. Copy the result using the copy button if needed.</p>
            <p>5. Click Clear to reset the fields.</p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Example
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Unix Timestamp</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
1711715400
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Readable Date</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
Fri Mar 29 2024 18:30:00 GMT+0000 (Coordinated Universal Time)
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
            <li>• Reading timestamps from API responses</li>
            <li>• Understanding application logs and event times</li>
            <li>• Converting database date values into readable format</li>
            <li>• Generating Unix timestamps for testing</li>
            <li>• Working with backend systems and time-based data</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What is the difference between a timestamp and a date?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A timestamp is a numeric representation of time, while a date is
                a human-readable version of that time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Is this converter using seconds or milliseconds?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This tool uses Unix timestamps in seconds, which is the most
                common format for many APIs and systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why is my converted date different from what I expected?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Time zone differences can affect how a date is displayed on your
                device or browser.
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
              to="/base64-encoder"
              className="text-blue-600 hover:underline font-medium"
            >
              Base64 Encoder
            </Link>
            <Link
              to="/regex-tester"
              className="text-blue-600 hover:underline font-medium"
            >
              Regex Tester
            </Link>
            <Link
              to="/sql-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              SQL Formatter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
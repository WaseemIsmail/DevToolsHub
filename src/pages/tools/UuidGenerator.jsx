import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateUUID, generateMultipleUUIDs } from "../../utils/uuidTool";
import CopyButton from "../../components/CopyButton";

export default function UuidGenerator() {
  const [uuid, setUuid] = useState("");
  const [uuidList, setUuidList] = useState([]);
  const [count, setCount] = useState(1);
  const [error, setError] = useState("");

  const handleGenerateSingle = () => {
    const newUuid = generateUUID();
    setUuid(newUuid);
    setUuidList([]);
    setError("");
  };

  const handleGenerateMultiple = () => {
    const safeCount = Math.min(Math.max(Number(count) || 1, 1), 100);

    if (!safeCount || safeCount < 1) {
      setError("Please enter a valid number between 1 and 100");
      setUuid("");
      setUuidList([]);
      return;
    }

    const list = generateMultipleUUIDs(safeCount);
    setUuidList(list);
    setUuid("");
    setCount(safeCount);
    setError("");
  };

  const clearFields = () => {
    setUuid("");
    setUuidList([]);
    setCount(1);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>UUID Generator | DevToolsHub</title>
        <meta
          name="description"
          content="Generate unique UUIDs instantly for databases, APIs, applications, testing, and software development workflows."
        />
        <meta
          name="keywords"
          content="uuid generator, generate uuid, multiple uuid generator, unique id generator, uuid tool, devtools hub"
        />
        <link
          rel="canonical"
          href="https://devtoolshub-tools.netlify.app/uuid-generator"
        />
        <meta property="og:title" content="UUID Generator | DevToolsHub" />
        <meta
          property="og:description"
          content="Generate unique UUIDs instantly for databases, APIs, applications, testing, and development workflows."
        />
        <meta
          property="og:url"
          content="https://devtoolshub-tools.netlify.app/uuid-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="UUID Generator | DevToolsHub"
        />
        <meta
          name="twitter:description"
          content="Generate unique UUIDs instantly for databases, APIs, applications, testing, and development workflows."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tool Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
            <h1 className="text-3xl font-bold mb-3 text-center text-gray-900">
              UUID Generator
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Generate unique UUIDs instantly for databases, APIs, applications,
              testing, and software development workflows.
            </p>

            {/* Controls */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center items-end">
              <button
                onClick={handleGenerateSingle}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Generate UUID
              </button>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="border p-2 rounded-lg w-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                onClick={handleGenerateMultiple}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Generate Multiple
              </button>

              <button
                onClick={clearFields}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Clear
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            {/* Single UUID */}
            {uuid && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Generated UUID
                </label>

                <textarea
                  value={uuid}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-50 font-mono h-24"
                />

                <div className="mt-3">
                  <CopyButton text={uuid} />
                </div>
              </div>
            )}

            {/* Multiple UUIDs */}
            {uuidList.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Generated UUID List
                </label>

                <textarea
                  value={uuidList.join("\n")}
                  readOnly
                  className="w-full h-56 p-3 border rounded-lg bg-gray-50 font-mono"
                />

                <div className="mt-3">
                  <CopyButton text={uuidList.join("\n")} />
                </div>
              </div>
            )}
          </div>

          {/* What is a UUID */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is a UUID?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              UUID stands for Universally Unique Identifier. It is a standardized
              string used to uniquely identify data across systems, applications,
              databases, and services.
            </p>

            <p className="text-gray-700 leading-relaxed">
              UUIDs are commonly used when developers need unique values for
              records, transactions, sessions, APIs, or distributed systems
              without relying on sequential IDs.
            </p>
          </div>

          {/* How to Use */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Tool
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>1. Click <strong>Generate UUID</strong> to create a single UUID.</p>
              <p>2. Enter a number between 1 and 100 to generate multiple UUIDs.</p>
              <p>3. Click <strong>Generate Multiple</strong> to create a list.</p>
              <p>4. Use the copy button to copy the UUID or list.</p>
              <p>5. Click Clear to reset the tool.</p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Example
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Generated UUID</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
550e8400-e29b-41d4-a716-446655440000
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
              <li>• Creating unique IDs for database records</li>
              <li>• Generating identifiers for APIs and distributed systems</li>
              <li>• Producing random values for testing and development</li>
              <li>• Avoiding collisions in multi-system environments</li>
              <li>• Creating session, token, or reference identifiers</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Why use a UUID instead of an integer ID?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UUIDs are useful when you need globally unique identifiers that
                  can be generated independently across different systems.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Can I generate more than one UUID at a time?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. This tool allows you to generate multiple UUIDs at once by
                  entering a quantity from 1 to 100.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Are generated UUIDs unique?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  UUIDs are designed to be extremely unlikely to collide, which is
                  why they are commonly used for unique identifiers.
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
                to="/password-generator"
                className="text-blue-600 hover:underline font-medium"
              >
                Password Generator
              </Link>
              <Link
                to="/hash-generator"
                className="text-blue-600 hover:underline font-medium"
              >
                Hash Generator
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
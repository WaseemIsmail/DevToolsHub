import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateSHA256, generateSHA1 } from "../../utils/hashUtils";
import CopyButton from "../../components/CopyButton";

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [sha256, setSha256] = useState("");
  const [sha1, setSha1] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please enter text to generate a hash");
      setSha256("");
      setSha1("");
      return;
    }

    try {
      const sha256Hash = await generateSHA256(trimmedInput);
      const sha1Hash = await generateSHA1(trimmedInput);

      setSha256(sha256Hash);
      setSha1(sha1Hash);
      setError("");
    } catch {
      setError("Failed to generate hash");
      setSha256("");
      setSha1("");
    }
  };

  const clearFields = () => {
    setInput("");
    setSha256("");
    setSha1("");
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Hash Generator (SHA256 & SHA1) | DevToolsHub</title>
        <meta
          name="description"
          content="Generate SHA256 and SHA1 hashes instantly from plain text. This free online hash generator is useful for developers, testers, and anyone working with data verification or integrity checks."
        />
        <meta
          name="keywords"
          content="hash generator, sha256 generator, sha1 generator, online hash generator, developer tools, hash tool"
        />
        <link
          rel="canonical"
          href="https://devtoolshub-tools.netlify.app/hash-generator"
        />
        <meta
          property="og:title"
          content="Hash Generator (SHA256 & SHA1) | DevToolsHub"
        />
        <meta
          property="og:description"
          content="Free online tool to generate SHA256 and SHA1 hashes instantly from text."
        />
        <meta
          property="og:url"
          content="https://devtoolshub-tools.netlify.app/hash-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Hash Generator (SHA256 & SHA1) | DevToolsHub"
        />
        <meta
          name="twitter:description"
          content="Generate SHA256 and SHA1 hashes instantly using this free online tool."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tool Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Hash Generator
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Generate SHA256 and SHA1 hashes instantly from plain text. This free
              online hash generator is useful for developers, testers, and anyone
              working with data verification or integrity checks.
            </p>

            {/* Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Text
              </label>
              <textarea
                className="w-full border rounded-lg p-3 h-40 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text to generate hash values..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={handleGenerate}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Generate Hash
              </button>

              <button
                onClick={clearFields}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Clear
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* SHA256 */}
            {sha256 && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2 gap-4">
                  <h2 className="font-semibold text-gray-900">SHA256</h2>
                  <CopyButton text={sha256} />
                </div>

                <textarea
                  className="w-full border rounded-lg p-3 font-mono bg-gray-50"
                  rows="3"
                  value={sha256}
                  readOnly
                />
              </div>
            )}

            {/* SHA1 */}
            {sha1 && (
              <div>
                <div className="flex justify-between items-center mb-2 gap-4">
                  <h2 className="font-semibold text-gray-900">SHA1</h2>
                  <CopyButton text={sha1} />
                </div>

                <textarea
                  className="w-full border rounded-lg p-3 font-mono bg-gray-50"
                  rows="3"
                  value={sha1}
                  readOnly
                />
              </div>
            )}
          </div>

          {/* What is a Hash */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is a Hash Generator?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              A hash generator converts input text into a fixed-length string
              called a hash value. Hashes are commonly used in software
              development, cybersecurity, file verification, and data integrity
              checks.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Even a very small change in the original input will create a very
              different hash output. This makes hashing useful for verifying data
              consistency and detecting changes.
            </p>
          </div>

          {/* How to Use */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Tool
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>1. Enter or paste your text into the input area.</p>
              <p>2. Click <strong>Generate Hash</strong>.</p>
              <p>3. View the generated SHA256 and SHA1 outputs.</p>
              <p>4. Use the copy button to copy the hash values.</p>
              <p>5. Clear the fields if you want to test another input.</p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Example
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Input</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
Hello World
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">SHA256 Output</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
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
              <li>• Verifying file or text integrity</li>
              <li>• Comparing data before and after changes</li>
              <li>• Testing hash outputs in applications</li>
              <li>• Learning how hashing works in development</li>
              <li>• Generating reference values for technical workflows</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  What is the difference between SHA256 and SHA1?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  SHA256 generates a longer and stronger hash than SHA1. SHA256 is
                  generally preferred for modern applications because it is more
                  secure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Is hashing the same as encryption?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No. Hashing is a one-way process used to generate a fixed output.
                  Encryption is designed to be reversible with the correct key.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Can I get the original text back from a hash?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No. A hash is one-way, which means the original text cannot be
                  directly recovered from the hash value.
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
                to="/base64-encoder"
                className="text-blue-600 hover:underline font-medium"
              >
                Base64 Encoder
              </Link>
              <Link
                to="/jwt-decoder"
                className="text-blue-600 hover:underline font-medium"
              >
                JWT Decoder
              </Link>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
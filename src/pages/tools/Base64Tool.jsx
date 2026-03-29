import { useState } from "react";
import { Link } from "react-router-dom";
import { encodeBase64, decodeBase64 } from "../../utils/base64Tool";
import CopyButton from "../../components/CopyButton";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    const result = encodeBase64(input);

    if (result.success) {
      setOutput(result.data);
      setError("");
    } else {
      setError(result.error);
      setOutput("");
    }
  };

  const handleDecode = () => {
    const result = decodeBase64(input);

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
            Base64 Encoder / Decoder
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Encode plain text into Base64 or decode Base64 back into readable
            text instantly. This free online Base64 tool is useful for
            developers, testers, and students working with encoded data.
          </p>

          {/* Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter plain text to encode or a Base64 string to decode..."
              className="w-full border rounded-lg p-3 h-40 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={handleEncode}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Encode
            </button>

            <button
              onClick={handleDecode}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Decode
            </button>

            <button
              onClick={clearFields}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
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
              Output
            </label>
            <textarea
              value={output}
              readOnly
              className="w-full border rounded-lg p-3 h-40 bg-gray-50 font-mono"
              placeholder="Result will appear here..."
            />
          </div>
        </div>

        {/* What is Base64 */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is Base64 Encoding?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Base64 is a text-based encoding method that converts data into a
            string made up of letters, numbers, and symbols. It is commonly used
            when binary or special data needs to be transferred safely in text
            form.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Developers often use Base64 when working with APIs, tokens, file
            conversions, email content, or encoded payloads. Base64 encoding is
            not encryption, so it should not be used to protect sensitive data.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Enter plain text if you want to convert it into Base64.</p>
            <p>2. Click <strong>Encode</strong> to generate the Base64 output.</p>
            <p>3. Enter a Base64 string if you want to convert it back to text.</p>
            <p>4. Click <strong>Decode</strong> to see the readable result.</p>
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
              <h3 className="font-semibold text-gray-900 mb-1">Plain text</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
Hello World
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Base64 output</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
SGVsbG8gV29ybGQ=
              </pre>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Common Use Cases
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>• Encoding text for API requests or responses</li>
            <li>• Decoding Base64 values returned by applications</li>
            <li>• Testing encoded strings during development</li>
            <li>• Working with tokens, payloads, and configuration values</li>
            <li>• Learning how Base64 conversion works</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Is Base64 the same as encryption?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Base64 is only an encoding method. It makes data easier to
                transfer in text form, but it does not secure or hide data like
                encryption does.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                When should I use Base64?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Base64 is useful when data needs to be represented safely as text,
                especially in APIs, emails, and configuration values.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Can I decode any Base64 string?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can decode valid Base64 strings. If the input is invalid or
                incomplete, the tool may show an error.
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
              to="/hash-generator"
              className="text-blue-600 hover:underline font-medium"
            >
              Hash Generator
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
  );
}
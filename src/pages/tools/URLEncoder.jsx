import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { encodeURL, decodeURL } from "../../utils/urlUtils";
import CopyButton from "../../components/CopyButton";

export default function URLEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please enter text or a URL to encode");
      setOutput("");
      return;
    }

    const result = encodeURL(trimmedInput);

    if (result.success) {
      setOutput(result.data);
      setError("");
    } else {
      setError(result.error);
      setOutput("");
    }
  };

  const handleDecode = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please enter an encoded URL or text to decode");
      setOutput("");
      return;
    }

    const result = decodeURL(trimmedInput);

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
    <>
      <Helmet>
        <title>URL Encoder / Decoder | DevToolsHub</title>
        <meta
          name="description"
          content="Encode or decode URL strings instantly. This free online URL encoder and decoder helps developers safely work with special characters in links, query parameters, and web requests."
        />
        <meta
          name="keywords"
          content="url encoder, url decoder, encode url, decode url, online url tool, query parameter encoder, devtools hub"
        />
        <link
          rel="canonical"
          href="https://devtoolshub-tools.netlify.app/url-encoder"
        />
        <meta
          property="og:title"
          content="URL Encoder / Decoder | DevToolsHub"
        />
        <meta
          property="og:description"
          content="Encode or decode URL strings instantly with this free online tool."
        />
        <meta
          property="og:url"
          content="https://devtoolshub-tools.netlify.app/url-encoder"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="URL Encoder / Decoder | DevToolsHub"
        />
        <meta
          name="twitter:description"
          content="Encode or decode URL strings instantly with this free online tool."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tool Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
              URL Encoder / Decoder
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Encode or decode URL strings instantly. This free online URL
              encoder and decoder helps developers safely work with special
              characters in links, query parameters, and web requests.
            </p>

            {/* Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input
              </label>
              <textarea
                className="w-full border rounded-lg p-3 h-40 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Enter URL or text..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Decode
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
                Output
              </label>
              <textarea
                className="w-full border rounded-lg p-3 h-40 bg-gray-50 font-mono"
                rows="5"
                placeholder="Result will appear here..."
                value={output}
                readOnly
              />
            </div>
          </div>

          {/* What is URL Encoding */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is URL Encoding?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              URL encoding converts special characters in text into a format that
              can be safely used inside URLs. Characters such as spaces, symbols,
              and reserved characters are replaced with encoded values.
            </p>

            <p className="text-gray-700 leading-relaxed">
              URL decoding does the reverse by converting encoded values back into
              readable text. This is commonly used in web development, APIs, form
              submissions, and query string handling.
            </p>
          </div>

          {/* How to Use */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Tool
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>1. Paste or type the text or URL into the input box.</p>
              <p>2. Click <strong>Encode</strong> to convert it into URL-safe format.</p>
              <p>3. Click <strong>Decode</strong> to convert encoded text back into readable format.</p>
              <p>4. Review the result in the output box.</p>
              <p>5. Use the copy button to copy the output quickly.</p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Example
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Original Text</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
https://example.com/search?q=hello world&category=dev tools
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Encoded Output</h3>
                <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world%26category%3Ddev%20tools
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
              <li>• Encoding query parameters in URLs</li>
              <li>• Decoding encoded links from applications or APIs</li>
              <li>• Handling spaces and special characters in web requests</li>
              <li>• Debugging encoded URLs in development workflows</li>
              <li>• Preparing safe links for browser and server communication</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Why is URL encoding important?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  URL encoding ensures that special characters are safely
                  transmitted in URLs without breaking the structure of the link.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  When should I decode a URL?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You should decode a URL when you want to read or inspect encoded
                  text in a human-readable format.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Does encoding change the meaning of the URL?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No. Encoding only changes how special characters are represented
                  so they can be safely included in the URL.
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
              <Link
                to="/jwt-decoder"
                className="text-blue-600 hover:underline font-medium"
              >
                JWT Decoder
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
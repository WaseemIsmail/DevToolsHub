import { useState } from "react";
import { Link } from "react-router-dom";
import CopyButton from "../../components/CopyButton";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState("");

  const decodeBase64Url = (value) => {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4)) % 4),
      "="
    );
    return atob(padded);
  };

  const decodeJWT = () => {
    const trimmedToken = token.trim();

    if (!trimmedToken) {
      setError("Please paste a JWT token before decoding");
      setHeader(null);
      setPayload(null);
      return;
    }

    try {
      const parts = trimmedToken.split(".");

      if (parts.length !== 3) {
        setError("Invalid JWT token format");
        setHeader(null);
        setPayload(null);
        return;
      }

      const decodedHeader = JSON.parse(decodeBase64Url(parts[0]));
      const decodedPayload = JSON.parse(decodeBase64Url(parts[1]));

      setHeader(decodedHeader);
      setPayload(decodedPayload);
      setError("");
    } catch {
      setError("Failed to decode JWT token");
      setHeader(null);
      setPayload(null);
    }
  };

  const clearFields = () => {
    setToken("");
    setHeader(null);
    setPayload(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Tool Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
            JWT Decoder
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Decode and inspect JWT tokens instantly. This tool helps developers
            read the header and payload of a JSON Web Token in a more readable
            format.
          </p>

          {/* Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JWT Token
            </label>
            <textarea
              className="w-full border rounded-lg p-3 h-36 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste JWT token here..."
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={decodeJWT}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Decode Token
            </button>

            <button
              onClick={clearFields}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear
            </button>
          </div>

          {/* Note */}
          <div className="mb-4 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
            <p className="text-sm text-yellow-800 leading-relaxed">
              This tool decodes the JWT header and payload for inspection. It
              does not verify token validity, signature authenticity, or
              expiration.
            </p>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Header */}
          {header && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2 gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Header</h2>
                <CopyButton text={JSON.stringify(header, null, 2)} />
              </div>

              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {JSON.stringify(header, null, 2)}
              </pre>
            </div>
          )}

          {/* Payload */}
          {payload && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2 gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Payload</h2>
                <CopyButton text={JSON.stringify(payload, null, 2)} />
              </div>

              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {JSON.stringify(payload, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* What is JWT */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is a JWT?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            JWT stands for JSON Web Token. It is a compact token format commonly
            used for authentication, authorization, and secure data exchange
            between systems.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A JWT usually contains three parts separated by dots: the header,
            the payload, and the signature. This decoder helps you inspect the
            readable parts of the token.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Paste the JWT token into the input box.</p>
            <p>2. Click <strong>Decode Token</strong>.</p>
            <p>3. Review the decoded header and payload.</p>
            <p>4. Copy either section using the copy button if needed.</p>
            <p>5. Use Clear to remove the current token and results.</p>
          </div>
        </div>

        {/* Structure */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            JWT Structure
          </h2>

          <div className="space-y-4">
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
header.payload.signature
            </pre>

            <p className="text-gray-700 leading-relaxed">
              The header usually contains token type and algorithm information.
              The payload contains claims or data. The signature is used to help
              verify that the token has not been altered.
            </p>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Common Use Cases
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>• Inspecting authentication tokens during development</li>
            <li>• Reading JWT claims in API testing workflows</li>
            <li>• Checking user roles, expiry, and token metadata</li>
            <li>• Debugging identity and authorization issues</li>
            <li>• Learning how JWTs are structured</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Does decoding a JWT verify it?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Decoding only makes the header and payload readable. It does
                not confirm that the token is genuine or correctly signed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What information can I see in the payload?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The payload may contain claims such as user identifiers, roles,
                token issuer details, and expiration timestamps.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why does a JWT have three parts?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A JWT is structured with a header, payload, and signature so it
                can carry metadata, data claims, and a way to help verify
                authenticity.
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
              to="/json-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON Formatter
            </Link>
            <Link
              to="/hash-generator"
              className="text-blue-600 hover:underline font-medium"
            >
              Hash Generator
            </Link>
            <Link
              to="/url-encoder"
              className="text-blue-600 hover:underline font-medium"
            >
              URL Encoder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
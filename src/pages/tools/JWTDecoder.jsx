import { useState } from "react";
import CopyButton from "../../components/CopyButton";

export default function JWTDecoder() {

  const [token, setToken] = useState("");
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState("");

  const decodeJWT = () => {

    try {

      const parts = token.split(".");

      if (parts.length !== 3) {
        setError("Invalid JWT token");
        setHeader(null);
        setPayload(null);
        return;
      }

      const decodedHeader = JSON.parse(
        atob(parts[0].replace(/-/g, "+").replace(/_/g, "/"))
      );

      const decodedPayload = JSON.parse(
        atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"))
      );

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

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          JWT Decoder
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Decode and inspect JWT tokens instantly.
        </p>

        {/* Input */}
        <textarea
          className="w-full border rounded p-3 mb-4 font-mono"
          rows="4"
          placeholder="Paste JWT token here..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">

          <button
            onClick={decodeJWT}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Decode Token
          </button>

          <button
            onClick={clearFields}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Clear
          </button>

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        {/* Header */}
        {header && (
          <div className="mt-6">

            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Header</h2>
              <CopyButton text={JSON.stringify(header, null, 2)} />
            </div>

            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(header, null, 2)}
            </pre>

          </div>
        )}

        {/* Payload */}
        {payload && (
          <div className="mt-6">

            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Payload</h2>
              <CopyButton text={JSON.stringify(payload, null, 2)} />
            </div>

            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(payload, null, 2)}
            </pre>

          </div>
        )}

      </div>

    </div>
  );
}
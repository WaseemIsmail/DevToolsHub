import { useState } from "react";
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

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">

        <h1 className="text-2xl font-bold mb-2 text-center">
          Base64 Encoder / Decoder
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Encode or decode Base64 text instantly.
        </p>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or Base64 string..."
          className="w-full border rounded p-3 h-40 mb-4 font-mono"
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">

          <button
            onClick={handleEncode}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Encode
          </button>

          <button
            onClick={handleDecode}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Decode
          </button>

          <button
            onClick={clearFields}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Clear
          </button>

          {output && (
            <CopyButton text={output} />
          )}

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        {/* Output */}
        <textarea
          value={output}
          readOnly
          className="w-full border rounded p-3 h-40 bg-gray-50 font-mono"
          placeholder="Result will appear here..."
        />

      </div>

    </div>
  );
}
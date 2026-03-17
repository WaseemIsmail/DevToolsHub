import { useState } from "react";
import { generateSHA256, generateSHA1 } from "../../utils/hashUtils";
import CopyButton from "../../components/CopyButton";

export default function HashGenerator() {

  const [input, setInput] = useState("");
  const [sha256, setSha256] = useState("");
  const [sha1, setSha1] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {

    if (!input) {
      setError("Please enter text to hash");
      return;
    }

    try {

      const sha256Hash = await generateSHA256(input);
      const sha1Hash = await generateSHA1(input);

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
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          Hash Generator
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Generate secure hashes using SHA256 and SHA1 algorithms.
        </p>

        {/* Input */}
        <textarea
          className="w-full border rounded p-3 mb-4 font-mono"
          rows="5"
          placeholder="Enter text to generate hash..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">

          <button
            onClick={handleGenerate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate Hash
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

        {/* SHA256 */}
        {sha256 && (
          <div className="mb-4">

            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold">SHA256</h2>
              <CopyButton text={sha256} />
            </div>

            <textarea
              className="w-full border rounded p-2 font-mono bg-gray-50"
              rows="2"
              value={sha256}
              readOnly
            />

          </div>
        )}

        {/* SHA1 */}
        {sha1 && (
          <div>

            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold">SHA1</h2>
              <CopyButton text={sha1} />
            </div>

            <textarea
              className="w-full border rounded p-2 font-mono bg-gray-50"
              rows="2"
              value={sha1}
              readOnly
            />

          </div>
        )}

      </div>

    </div>
  );
}
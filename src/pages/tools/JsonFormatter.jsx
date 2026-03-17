import { useState } from "react";
import { formatJSON } from "../../utils/jsonFormatter";
import CopyButton from "../../components/CopyButton";

export default function JsonFormatter() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {

    const result = formatJSON(input);

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

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold mb-2 text-center">
          JSON Formatter
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Format and validate JSON data instantly.
        </p>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="w-full border rounded p-3 h-40 mb-4 font-mono"
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">

          <button
            onClick={handleFormat}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Format JSON
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
          placeholder="Formatted JSON will appear here..."
        />

      </div>

    </div>
  );
}
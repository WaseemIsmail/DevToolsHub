import { useState } from "react";
import { csvToJSON } from "../../utils/converterUtils";
import CopyButton from "../../components/CopyButton";

export default function CSVtoJSON() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {

    const result = csvToJSON(input);

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

        <h1 className="text-2xl font-bold text-center mb-2">
          CSV to JSON Converter
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Convert CSV data into structured JSON format instantly.
        </p>

        {/* CSV Input */}
        <textarea
          className="w-full border rounded p-3 mb-4 font-mono"
          rows="6"
          placeholder="Paste CSV data here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">

          <button
            onClick={handleConvert}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Convert to JSON
          </button>

          <button
            onClick={clearFields}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
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

        {/* JSON Output */}
        <textarea
          className="w-full border rounded p-3 bg-gray-50 font-mono"
          rows="6"
          placeholder="JSON output..."
          value={output}
          readOnly
        />

      </div>

    </div>
  );
}
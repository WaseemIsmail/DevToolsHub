import { useState } from "react";
import { testRegex } from "../../utils/regexUtils";
import CopyButton from "../../components/CopyButton";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");
  const [hasTested, setHasTested] = useState(false); // ⭐ new state

  const handleTest = () => {
    setHasTested(true); // mark as tested

    const result = testRegex(pattern, text);

    if (result.success) {
      setMatches(result.matches);
      setError("");
    } else {
      setMatches([]);
      setError(result.error);
    }
  };

  const clearFields = () => {
    setPattern("");
    setText("");
    setMatches([]);
    setError("");
    setHasTested(false); // reset test state
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Regex Tester
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Test regular expressions and instantly see matching results.
        </p>

        {/* Regex Pattern */}
        <input
          type="text"
          className="w-full border rounded p-3 mb-4 font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter regex pattern (example: \\d+)"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        />

        {/* Test Text */}
        <textarea
          className="w-full border rounded p-3 mb-4 font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="5"
          placeholder="Enter text to test..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={handleTest}
            disabled={!pattern || !text}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Test Regex
          </button>

          <button
            onClick={clearFields}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Clear
          </button>

          {hasTested && matches.length > 0 && (
            <CopyButton text={matches.join("\n")} />
          )}
        </div>

        {/* Error */}
        {hasTested && error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Matches */}
        {hasTested && !error && matches.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">
              Matches ({matches.length})
            </h2>

            <ul className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto space-y-1">
              {matches.map((match, index) => (
                <li key={index} className="font-mono">
                  {match}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No Matches */}
        {hasTested && !error && matches.length === 0 && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded">
            No matches found.
          </div>
        )}

      </div>
    </div>
  );
}
import { useState } from "react";
import CopyButton from "../../components/CopyButton";

export default function ColorConverter() {

  const [input, setInput] = useState("");
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  const [error, setError] = useState("");

  const hexToRGB = (hexValue) => {

    const cleanHex = hexValue.replace("#", "");

    if (cleanHex.length !== 6) return null;

    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;

  };

  const rgbToHex = (rgbValue) => {

    const parts = rgbValue.match(/\d+/g);

    if (!parts || parts.length < 3) return null;

    const r = parseInt(parts[0]).toString(16).padStart(2, "0");
    const g = parseInt(parts[1]).toString(16).padStart(2, "0");
    const b = parseInt(parts[2]).toString(16).padStart(2, "0");

    return `#${r}${g}${b}`;

  };

  const handleConvert = () => {

    if (input.startsWith("#")) {

      const result = hexToRGB(input);

      if (result) {
        setHex(input);
        setRgb(result);
        setError("");
      } else {
        setError("Invalid HEX color");
        setHex("");
        setRgb("");
      }

    } else {

      const result = rgbToHex(input);

      if (result) {
        setHex(result);
        setRgb(input);
        setError("");
      } else {
        setError("Invalid RGB format (example: rgb(255,0,0))");
        setHex("");
        setRgb("");
      }

    }

  };

  const clearFields = () => {
    setInput("");
    setHex("");
    setRgb("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          Color Converter
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Convert colors between HEX and RGB formats instantly.
        </p>

        {/* Input */}
        <input
          className="w-full border rounded p-3 mb-4 font-mono"
          placeholder="Enter HEX (#ff0000) or RGB (rgb(255,0,0))"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">

          <button
            onClick={handleConvert}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Convert
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

        {/* Results */}
        {(hex || rgb) && (

          <div className="space-y-4">

            {/* HEX */}
            <div className="border rounded p-3 flex justify-between items-center">

              <span className="font-mono">
                HEX: {hex}
              </span>

              <CopyButton text={hex} />

            </div>

            {/* RGB */}
            <div className="border rounded p-3 flex justify-between items-center">

              <span className="font-mono">
                RGB: {rgb}
              </span>

              <CopyButton text={rgb} />

            </div>

            {/* Color Preview */}
            <div className="flex items-center gap-4">

              <div
                className="w-24 h-24 rounded border"
                style={{ backgroundColor: hex }}
              />

              <span className="text-gray-600">
                Color Preview
              </span>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}
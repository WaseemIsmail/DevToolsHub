import { useState } from "react";
import { Link } from "react-router-dom";
import CopyButton from "../../components/CopyButton";

export default function ColorConverter() {
  const [input, setInput] = useState("");
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  const [error, setError] = useState("");

  const hexToRGB = (hexValue) => {
    const cleanHex = hexValue.replace("#", "").trim();

    if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) return null;

    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const rgbToHex = (rgbValue) => {
    const parts = rgbValue.match(/\d+/g);

    if (!parts || parts.length < 3) return null;

    const rNum = Number(parts[0]);
    const gNum = Number(parts[1]);
    const bNum = Number(parts[2]);

    if (
      Number.isNaN(rNum) ||
      Number.isNaN(gNum) ||
      Number.isNaN(bNum) ||
      rNum < 0 ||
      rNum > 255 ||
      gNum < 0 ||
      gNum > 255 ||
      bNum < 0 ||
      bNum > 255
    ) {
      return null;
    }

    const r = rNum.toString(16).padStart(2, "0");
    const g = gNum.toString(16).padStart(2, "0");
    const b = bNum.toString(16).padStart(2, "0");

    return `#${r}${g}${b}`;
  };

  const handleConvert = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please enter a HEX or RGB color value");
      setHex("");
      setRgb("");
      return;
    }

    if (trimmedInput.startsWith("#")) {
      const result = hexToRGB(trimmedInput);

      if (result) {
        setHex(trimmedInput);
        setRgb(result);
        setError("");
      } else {
        setError("Invalid HEX color. Example: #ff0000");
        setHex("");
        setRgb("");
      }
    } else {
      const result = rgbToHex(trimmedInput);

      if (result) {
        setHex(result);
        setRgb(trimmedInput);
        setError("");
      } else {
        setError("Invalid RGB format. Example: rgb(255, 0, 0)");
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
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Tool Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
            Color Converter
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Convert colors between HEX and RGB formats instantly. This free
            online color converter is useful for developers, designers, and
            anyone working with web colors.
          </p>

          {/* Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter HEX or RGB Value
            </label>
            <input
              className="w-full border rounded-lg p-3 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Example: #ff0000 or rgb(255, 0, 0)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={handleConvert}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Convert
            </button>

            <button
              onClick={clearFields}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear
            </button>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Results */}
          {(hex || rgb) && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex justify-between items-center gap-4">
                <span className="font-mono break-all">HEX: {hex}</span>
                <CopyButton text={hex} />
              </div>

              <div className="border rounded-lg p-4 flex justify-between items-center gap-4">
                <span className="font-mono break-all">RGB: {rgb}</span>
                <CopyButton text={rgb} />
              </div>

              <div className="border rounded-lg p-4 flex items-center gap-4">
                <div
                  className="w-24 h-24 rounded border shrink-0"
                  style={{ backgroundColor: hex }}
                />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Color Preview</p>
                  <p className="text-gray-600 text-sm">
                    Preview of the converted color value.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* What is Color Conversion */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is a Color Converter?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A color converter helps you switch between different color formats
            used in web and software development. HEX and RGB are two of the
            most common formats used in HTML, CSS, design systems, and user
            interface development.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This tool allows you to quickly convert HEX color values like
            <span className="font-mono"> #ff0000 </span>
            into RGB format like
            <span className="font-mono"> rgb(255, 0, 0) </span>
            and vice versa.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Enter a HEX color value such as <span className="font-mono">#ff0000</span>.</p>
            <p>2. Or enter an RGB value such as <span className="font-mono">rgb(255, 0, 0)</span>.</p>
            <p>3. Click <strong>Convert</strong> to get the converted result.</p>
            <p>4. Copy the HEX or RGB result using the copy button.</p>
            <p>5. Use the color preview box to visually confirm the output.</p>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Example
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">HEX Input</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
#00ff00
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">RGB Output</h3>
              <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
rgb(0, 255, 0)
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
            <li>• Converting CSS color values during front-end development</li>
            <li>• Matching design colors between design tools and code</li>
            <li>• Testing color values for websites and applications</li>
            <li>• Learning the difference between HEX and RGB formats</li>
            <li>• Quickly checking colors while building user interfaces</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What is the difference between HEX and RGB?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HEX uses hexadecimal notation, while RGB uses red, green, and
                blue numeric values. Both represent the same colors in different
                formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Where are HEX and RGB colors used?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                They are commonly used in CSS, web design, front-end
                development, applications, and digital design systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Can this tool convert shorthand HEX values?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This version supports standard 6-character HEX values like
                <span className="font-mono"> #ff0000</span>. You can extend it
                later if you want shorthand HEX support like
                <span className="font-mono"> #f00</span>.
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
              to="/url-encoder"
              className="text-blue-600 hover:underline font-medium"
            >
              URL Encoder
            </Link>
            <Link
              to="/hash-generator"
              className="text-blue-600 hover:underline font-medium"
            >
              Hash Generator
            </Link>
            <Link
              to="/json-formatter"
              className="text-blue-600 hover:underline font-medium"
            >
              JSON Formatter
            </Link>
            <Link
              to="/base64-encoder"
              className="text-blue-600 hover:underline font-medium"
            >
              Base64 Encoder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
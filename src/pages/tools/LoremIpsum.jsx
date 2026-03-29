import { useState } from "react";
import { Link } from "react-router-dom";
import CopyButton from "../../components/CopyButton";

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3);
  const [result, setResult] = useState("");

  const loremWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
    "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
    "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
    "pariatur",
  ];

  const generateParagraph = () => {
    const length = Math.floor(Math.random() * 80) + 40;
    const sentence = [];

    for (let i = 0; i < length; i++) {
      const word = loremWords[Math.floor(Math.random() * loremWords.length)];
      sentence.push(word);
    }

    let paragraph = sentence.join(" ");
    paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + ".";

    return paragraph;
  };

  const generateLorem = () => {
    const safeParagraphs = Math.min(Math.max(Number(paragraphs) || 1, 1), 20);
    const text = [];

    for (let i = 0; i < safeParagraphs; i++) {
      text.push(generateParagraph());
    }

    setParagraphs(safeParagraphs);
    setResult(text.join("\n\n"));
  };

  const clearFields = () => {
    setParagraphs(3);
    setResult("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Tool Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
            Lorem Ipsum Generator
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Generate placeholder Lorem Ipsum text instantly for design,
            prototyping, wireframes, content mockups, and front-end development.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap items-end gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Paragraphs
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={paragraphs}
                onChange={(e) => setParagraphs(e.target.value)}
                className="border rounded-lg p-2 w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={generateLorem}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Generate
            </button>

            <button
              onClick={clearFields}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear
            </button>

            {result && <CopyButton text={result} />}
          </div>

          {/* Output */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Generated Text
            </label>
            <textarea
              value={result}
              readOnly
              rows="12"
              className="w-full border rounded-lg p-3 font-mono bg-gray-50"
              placeholder="Generated Lorem Ipsum text will appear here..."
            />
          </div>
        </div>

        {/* What is Lorem Ipsum */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is Lorem Ipsum?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem Ipsum is placeholder text commonly used in design, publishing,
            and web development to fill layouts before real content is ready.
            It helps developers and designers focus on structure, spacing, and
            visual hierarchy without being distracted by meaningful text.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This generator creates simple filler paragraphs that can be used in
            landing pages, cards, mockups, prototypes, templates, and user
            interface previews.
          </p>
        </div>

        {/* How to Use */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Tool
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Enter the number of paragraphs you want to generate.</p>
            <p>2. Click <strong>Generate</strong>.</p>
            <p>3. Review the generated placeholder text.</p>
            <p>4. Use the copy button to copy the text quickly.</p>
            <p>5. Click Clear to reset the tool.</p>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Common Use Cases
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>• Filling website layouts before final content is ready</li>
            <li>• Creating realistic UI and UX mockups</li>
            <li>• Testing typography, spacing, and content sections</li>
            <li>• Building template previews and demo pages</li>
            <li>• Using placeholder text during front-end development</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Why is Lorem Ipsum used?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It helps designers and developers preview layouts with text
                without needing final written content.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Can I generate multiple paragraphs?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. This tool allows you to generate between 1 and 20
                paragraphs at a time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Is the generated text meaningful?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. Lorem Ipsum is filler text and is meant only for layout,
                design, and placeholder purposes.
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
            <Link
              to="/color-converter"
              className="text-blue-600 hover:underline font-medium"
            >
              Color Converter
            </Link>
            <Link
              to="/regex-tester"
              className="text-blue-600 hover:underline font-medium"
            >
              Regex Tester
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
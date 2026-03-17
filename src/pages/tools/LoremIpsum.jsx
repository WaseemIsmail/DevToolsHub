import { useState } from "react";
import CopyButton from "../../components/CopyButton";

export default function LoremIpsum() {

  const [paragraphs, setParagraphs] = useState(3);
  const [result, setResult] = useState("");

  const loremWords = [
    "lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit",
    "sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore",
    "magna","aliqua","ut","enim","ad","minim","veniam","quis","nostrud",
    "exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea",
    "commodo","consequat","duis","aute","irure","dolor","in","reprehenderit",
    "in","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla",
    "pariatur"
  ];

  const generateParagraph = () => {

    const length = Math.floor(Math.random() * 80) + 40;
    let sentence = [];

    for (let i = 0; i < length; i++) {
      const word = loremWords[Math.floor(Math.random() * loremWords.length)];
      sentence.push(word);
    }

    let paragraph = sentence.join(" ");
    paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + ".";

    return paragraph;

  };

  const generateLorem = () => {

    let text = [];

    for (let i = 0; i < paragraphs; i++) {
      text.push(generateParagraph());
    }

    setResult(text.join("\n\n"));

  };

  const clearFields = () => {
    setParagraphs(3);
    setResult("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          Lorem Ipsum Generator
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Generate placeholder Lorem Ipsum text for design and development.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-6">

          <input
            type="number"
            min="1"
            max="20"
            value={paragraphs}
            onChange={(e) => setParagraphs(Number(e.target.value))}
            className="border rounded p-2 w-24"
          />

          <button
            onClick={generateLorem}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate
          </button>

          <button
            onClick={clearFields}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Clear
          </button>

          {result && (
            <CopyButton text={result} />
          )}

        </div>

        {/* Output */}
        <textarea
          value={result}
          readOnly
          rows="10"
          className="w-full border rounded p-3 font-mono bg-gray-50"
          placeholder="Generated Lorem Ipsum text will appear here..."
        />

      </div>

    </div>
  );
}
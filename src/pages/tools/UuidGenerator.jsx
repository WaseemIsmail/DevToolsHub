import { useState } from "react";
import { generateUUID, generateMultipleUUIDs } from "../../utils/uuidTool";
import CopyButton from "../../components/CopyButton";

export default function UuidGenerator() {

  const [uuid, setUuid] = useState("");
  const [uuidList, setUuidList] = useState([]);
  const [count, setCount] = useState(1);

  const handleGenerateSingle = () => {
    const newUuid = generateUUID();
    setUuid(newUuid);
    setUuidList([]);
  };

  const handleGenerateMultiple = () => {
    const list = generateMultipleUUIDs(Number(count));
    setUuidList(list);
    setUuid("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold mb-2 text-center">
          UUID Generator
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Generate unique UUIDs instantly.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">

          <button
            onClick={handleGenerateSingle}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate UUID
          </button>

          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="border p-2 rounded w-24"
          />

          <button
            onClick={handleGenerateMultiple}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Generate Multiple
          </button>

        </div>


        {/* Single UUID */}
        {uuid && (

          <div className="mb-6">

            <textarea
              value={uuid}
              readOnly
              className="w-full p-3 border rounded bg-gray-50 font-mono"
            />

            <div className="mt-3">
              <CopyButton text={uuid} />
            </div>

          </div>

        )}


        {/* Multiple UUIDs */}
        {uuidList.length > 0 && (

          <div>

            <textarea
              value={uuidList.join("\n")}
              readOnly
              className="w-full h-48 p-3 border rounded bg-gray-50 font-mono"
            />

            <div className="mt-3">
              <CopyButton text={uuidList.join("\n")} />
            </div>

          </div>

        )}

      </div>

    </div>
  );
}
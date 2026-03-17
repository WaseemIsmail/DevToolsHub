import { useState } from "react";
import CopyButton from "../../components/CopyButton";

export default function TimestampConverter() {

  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");

  const convertToDate = () => {
    if (!timestamp) return;

    const d = new Date(parseInt(timestamp) * 1000);
    setDate(d.toString());
  };

  const convertToTimestamp = () => {
    if (!date) return;

    const ts = Math.floor(new Date(date).getTime() / 1000);
    setTimestamp(ts);
  };

  const getCurrentTimestamp = () => {
    const ts = Math.floor(Date.now() / 1000);
    setTimestamp(ts);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          Timestamp Converter
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Convert Unix timestamps to human-readable dates and vice versa.
        </p>


        {/* Timestamp Section */}
        <div className="mb-6">

          <label className="block font-medium mb-2">
            Unix Timestamp
          </label>

          <input
            type="number"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="w-full border p-2 rounded font-mono"
            placeholder="Enter timestamp..."
          />

          <div className="flex flex-wrap gap-2 mt-3">

            <button
              onClick={convertToDate}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Convert to Date
            </button>

            <button
              onClick={getCurrentTimestamp}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Current Timestamp
            </button>

            {timestamp && (
              <CopyButton text={timestamp.toString()} />
            )}

          </div>

        </div>


        {/* Date Section */}
        <div>

          <label className="block font-medium mb-2">
            Readable Date
          </label>

          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter date..."
          />

          <div className="flex flex-wrap gap-2 mt-3">

            <button
              onClick={convertToTimestamp}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Convert to Timestamp
            </button>

            {date && (
              <CopyButton text={date} />
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
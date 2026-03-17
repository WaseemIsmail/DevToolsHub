import { useState } from "react";
import CopyButton from "../../components/CopyButton";

export default function PasswordGenerator() {

  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(newPassword);

  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          Password Generator
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Generate strong and secure passwords instantly.
        </p>


        {/* Output */}
        <textarea
          value={password}
          readOnly
          placeholder="Generated password will appear here..."
          className="w-full h-24 p-3 border rounded bg-gray-50 mb-4 font-mono"
        />


        {/* Length Selector */}
        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Password Length: {length}
          </label>

          <input
            type="range"
            min="6"
            max="40"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />

        </div>


        {/* Buttons */}
        <div className="flex gap-3">

          <button
            onClick={generatePassword}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate Password
          </button>

          {password && (
            <CopyButton text={password} />
          )}

        </div>

      </div>

    </div>
  );
}
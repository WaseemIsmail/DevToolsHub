import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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

  const clearFields = () => {
    setLength(12);
    setPassword("");
  };

  return (
    <>
      <Helmet>
        <title>Password Generator | DevToolsHub</title>
        <meta
          name="description"
          content="Generate strong and secure passwords instantly for accounts, applications, testing, and development use cases."
        />
        <meta
          name="keywords"
          content="password generator, secure password generator, random password generator, strong password tool, devtools hub"
        />
        <link
          rel="canonical"
          href="https://devtoolshub-tools.netlify.app/password-generator"
        />
        <meta property="og:title" content="Password Generator | DevToolsHub" />
        <meta
          property="og:description"
          content="Generate strong and secure passwords instantly for accounts, applications, testing, and development use cases."
        />
        <meta
          property="og:url"
          content="https://devtoolshub-tools.netlify.app/password-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Password Generator | DevToolsHub"
        />
        <meta
          name="twitter:description"
          content="Generate strong and secure passwords instantly for accounts, applications, testing, and development use cases."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tool Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Password Generator
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Generate strong and secure passwords instantly for accounts,
              applications, testing, and development use cases.
            </p>

            {/* Output */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Generated Password
              </label>
              <textarea
                value={password}
                readOnly
                placeholder="Generated password will appear here..."
                className="w-full h-24 p-3 border rounded-lg bg-gray-50 font-mono"
              />
            </div>

            {/* Length Selector */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-800">
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

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>6</span>
                <span>40</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={generatePassword}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Generate Password
              </button>

              <button
                onClick={clearFields}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Clear
              </button>

              {password && <CopyButton text={password} />}
            </div>
          </div>

          {/* What is a Password Generator */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is a Password Generator?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              A password generator creates random passwords made from letters,
              numbers, and symbols. It helps users create stronger passwords than
              simple or predictable ones.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Strong passwords are useful for protecting accounts, systems, test
              environments, and application access. Randomly generated passwords
              are generally harder to guess than manually created ones.
            </p>
          </div>

          {/* How to Use */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Use This Tool
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>1. Adjust the password length using the slider.</p>
              <p>2. Click <strong>Generate Password</strong>.</p>
              <p>3. Review the generated password in the output area.</p>
              <p>4. Use the copy button to copy it quickly.</p>
              <p>5. Click Clear if you want to reset the tool.</p>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Common Use Cases
            </h2>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>• Creating passwords for personal or work accounts</li>
              <li>• Generating credentials for test environments</li>
              <li>• Producing random passwords for development workflows</li>
              <li>• Avoiding weak or repeated passwords</li>
              <li>• Quickly generating secure strings when needed</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Why should I use a generated password?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Generated passwords are usually more random and harder to guess
                  than passwords people create manually.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Is a longer password better?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In general, longer passwords are stronger because they are
                  harder to guess or brute-force.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Does this tool store my password?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This page generates the password directly in the browser and
                  displays it immediately for you to copy.
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
                to="/hash-generator"
                className="text-blue-600 hover:underline font-medium"
              >
                Hash Generator
              </Link>
              <Link
                to="/base64-encoder"
                className="text-blue-600 hover:underline font-medium"
              >
                Base64 Encoder
              </Link>
              <Link
                to="/jwt-decoder"
                className="text-blue-600 hover:underline font-medium"
              >
                JWT Decoder
              </Link>
              <Link
                to="/url-encoder"
                className="text-blue-600 hover:underline font-medium"
              >
                URL Encoder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
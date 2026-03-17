import { useState } from "react";

export default function HTTPStatusCodes() {

  const [search, setSearch] = useState("");

  const statusCodes = [

    { code: 200, name: "OK", description: "The request has succeeded." },
    { code: 201, name: "Created", description: "The request succeeded and a resource was created." },
    { code: 204, name: "No Content", description: "The request succeeded but returned no content." },

    { code: 301, name: "Moved Permanently", description: "The requested resource has been moved permanently." },
    { code: 302, name: "Found", description: "The resource resides temporarily under a different URI." },
    { code: 304, name: "Not Modified", description: "The resource has not been modified since last request." },

    { code: 400, name: "Bad Request", description: "The server could not understand the request." },
    { code: 401, name: "Unauthorized", description: "Authentication is required to access the resource." },
    { code: 403, name: "Forbidden", description: "The server understood the request but refuses to authorize it." },
    { code: 404, name: "Not Found", description: "The requested resource could not be found." },

    { code: 500, name: "Internal Server Error", description: "The server encountered an unexpected condition." },
    { code: 502, name: "Bad Gateway", description: "The server received an invalid response from upstream server." },
    { code: 503, name: "Service Unavailable", description: "The server is currently unable to handle the request." }

  ];

  const filtered = statusCodes.filter(
    (s) =>
      s.code.toString().includes(search) ||
      s.name.toLowerCase().includes(search.toLowerCase())
  );

  const getColor = (code) => {

    if (code >= 200 && code < 300) return "bg-green-100 text-green-700";
    if (code >= 300 && code < 400) return "bg-blue-100 text-blue-700";
    if (code >= 400 && code < 500) return "bg-yellow-100 text-yellow-700";
    if (code >= 500) return "bg-red-100 text-red-700";

    return "bg-gray-100";

  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        <h1 className="text-2xl font-bold text-center mb-2">
          HTTP Status Codes
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Quick reference guide for common HTTP response status codes.
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search status code or name..."
          className="w-full border rounded p-3 mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Codes */}
        <div className="space-y-4">

          {filtered.map((status) => (

            <div
              key={status.code}
              className="border rounded p-4 bg-gray-50 flex justify-between items-start"
            >

              <div>

                <h2 className="text-lg font-semibold font-mono">
                  {status.code} — {status.name}
                </h2>

                <p className="text-gray-600">
                  {status.description}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded text-sm font-semibold ${getColor(status.code)}`}
              >
                {Math.floor(status.code / 100)}xx
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
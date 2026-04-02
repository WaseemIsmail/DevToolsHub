import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    { code: 503, name: "Service Unavailable", description: "The server is currently unable to handle the request." },
  ];

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return statusCodes.filter(
      (s) =>
        s.code.toString().includes(query) ||
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
    );
  }, [search]);

  const getColor = (code) => {
    if (code >= 200 && code < 300) return "bg-green-100 text-green-700";
    if (code >= 300 && code < 400) return "bg-blue-100 text-blue-700";
    if (code >= 400 && code < 500) return "bg-yellow-100 text-yellow-700";
    if (code >= 500) return "bg-red-100 text-red-700";

    return "bg-gray-100 text-gray-700";
  };

  const getGroupLabel = (code) => {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 300 && code < 400) return "Redirection";
    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500) return "Server Error";

    return "Other";
  };

  return (
    <>
      <Helmet>
        <title>HTTP Status Codes | DevToolsHub</title>
        <meta
          name="description"
          content="Quickly search and understand common HTTP response status codes. Free reference tool for developers, testers, and students."
        />
        <meta
          name="keywords"
          content="http status codes, status code checker, 404 meaning, 500 error, 401 vs 403, developer tools"
        />
        <link
          rel="canonical"
          href="https://devtoolshub-tools.netlify.app/http-status-codes"
        />
        <meta property="og:title" content="HTTP Status Codes | DevToolsHub" />
        <meta
          property="og:description"
          content="Free reference tool to search and understand common HTTP response status codes."
        />
        <meta
          property="og:url"
          content="https://devtoolshub-tools.netlify.app/http-status-codes"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="HTTP Status Codes | DevToolsHub"
        />
        <meta
          name="twitter:description"
          content="Quickly search and understand common HTTP response status codes."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tool Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">
              HTTP Status Codes
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Quickly search and understand common HTTP response status codes.
              This reference tool helps developers, testers, and students check
              status code meanings and common response categories.
            </p>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by status code, name, or description
              </label>
              <input
                type="text"
                placeholder="Example: 404, unauthorized, server error..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Status Code List */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Common HTTP Response Codes
            </h2>

            {filtered.length === 0 ? (
              <p className="text-gray-600">No status codes matched your search.</p>
            ) : (
              <div className="space-y-4">
                {filtered.map((status) => (
                  <div
                    key={status.code}
                    className="border rounded-xl p-4 bg-gray-50 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold font-mono text-gray-900 mb-1">
                        {status.code} — {status.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {status.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 shrink-0">
                      <span
                        className={`px-3 py-1 rounded text-sm font-semibold ${getColor(
                          status.code
                        )}`}
                      >
                        {Math.floor(status.code / 100)}xx
                      </span>

                      <span className="px-3 py-1 rounded text-sm font-semibold bg-gray-200 text-gray-700">
                        {getGroupLabel(status.code)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* What are HTTP Status Codes */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What are HTTP Status Codes?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              HTTP status codes are standard server responses that indicate the
              result of a client request. They help developers and applications
              understand whether a request succeeded, failed, was redirected, or
              could not be completed.
            </p>

            <p className="text-gray-700 leading-relaxed">
              These response codes are commonly used in web development, API
              testing, debugging, browser communication, and backend application
              development.
            </p>
          </div>

          {/* Status Code Groups */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Main HTTP Status Code Groups
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border rounded-xl p-5 bg-green-50">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  2xx Success
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The request was received, understood, and successfully processed.
                </p>
              </div>

              <div className="border rounded-xl p-5 bg-blue-50">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  3xx Redirection
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Further action is needed to complete the request, often through
                  another URL.
                </p>
              </div>

              <div className="border rounded-xl p-5 bg-yellow-50">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  4xx Client Error
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The request contains bad syntax or cannot be completed from the
                  client side.
                </p>
              </div>

              <div className="border rounded-xl p-5 bg-red-50">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  5xx Server Error
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The server failed to complete a valid request because of an
                  internal issue.
                </p>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Common Use Cases
            </h2>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>• Checking API responses during development and testing</li>
              <li>• Understanding browser and server communication</li>
              <li>• Debugging failed requests in web applications</li>
              <li>• Learning common response meanings in backend development</li>
              <li>• Quickly looking up status code categories and behavior</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  What does a 404 status code mean?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A 404 means the requested resource could not be found on the
                  server.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  What is the difference between 401 and 403?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A 401 usually means authentication is required, while a 403
                  means the request was understood but access is not allowed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Why are HTTP status codes important?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  They help developers understand how a server handled a request
                  and are essential for debugging, API testing, and backend
                  development.
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
                to="/url-encoder"
                className="text-blue-600 hover:underline font-medium"
              >
                URL Encoder
              </Link>
              <Link
                to="/regex-tester"
                className="text-blue-600 hover:underline font-medium"
              >
                Regex Tester
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
    </>
  );
}
import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
import tools from "../data/toolsList";

export default function Home() {
  const featuredTools = [
    {
      title: "JSON Formatter",
      link: "/json-formatter",
      description:
        "Format, beautify, and validate JSON quickly for better readability and debugging.",
    },
    {
      title: "Base64 Encoder",
      link: "/base64-encoder",
      description:
        "Encode and decode Base64 strings easily for development and testing tasks.",
    },
    {
      title: "Regex Tester",
      link: "/regex-tester",
      description:
        "Test regular expressions instantly and check matches with simple examples.",
    },
    {
      title: "UUID Generator",
      link: "/uuid-generator",
      description:
        "Generate unique UUIDs for databases, APIs, and software applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Free Developer Tools for Everyday Coding Tasks
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            DevToolsHub provides free online developer tools to help with JSON
            formatting, Base64 encoding and decoding, UUID generation, regex
            testing, SQL formatting, data conversion, and more.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#tools"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Explore Tools
            </a>

            <Link
              to="/about-us"
              className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl shadow-md border p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            What is DevToolsHub?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            DevToolsHub is a free online platform that brings together useful
            developer utilities in one place. Whether you need to format JSON,
            test regex patterns, generate UUIDs, convert data formats, or work
            with encoded values, the goal is to make those tasks quick and
            simple.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The platform is built for developers, students, testers, and anyone
            who needs practical browser-based tools without unnecessary
            complexity.
          </p>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Popular Developer Tools
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tool.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {tool.description}
              </p>

              <Link
                to={tool.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Open Tool
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section id="tools" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-4">
          All Developer Tools
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Explore free tools for formatting, encoding, decoding, generating,
          and converting data. DevToolsHub helps simplify common development
          tasks with fast and easy-to-use browser-based utilities.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      </section>

      {/* Why Use DevToolsHub */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-md border p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Why Use DevToolsHub?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast and Simple
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Access useful developer tools instantly without complex setup or
                unnecessary steps.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Useful for Daily Work
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From formatting JSON to testing regex patterns, the tools are
                designed for practical everyday technical tasks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Built for Developers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The platform is created for developers, students, testers, and
                anyone who needs reliable browser-based utilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
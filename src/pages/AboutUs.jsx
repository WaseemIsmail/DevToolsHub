import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            About Us
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Learn more about DevToolsHub, why it was created, and the purpose
            behind building a simple and useful platform for developers and
            technical users.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is a free online platform created to provide
              developers, students, and tech professionals with simple, fast,
              and reliable tools for everyday technical tasks. The goal is to
              make useful browser-based developer utilities easily accessible in
              one place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What We Do
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub offers a growing collection of browser-based tools
              such as JSON formatters, Base64 encoders and decoders, UUID
              generators, hash generators, regex testers, SQL formatters, and
              more. These tools are built to help users save time, improve
              productivity, and complete technical tasks more efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The mission of DevToolsHub is to create a trusted and useful
              developer resource that is fast, practical, and easy to use. The
              platform is focused on simplifying routine development work by
              offering tools that can be used quickly without unnecessary
              complexity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Who DevToolsHub Is For
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is designed for developers, software engineers,
              testers, students, and anyone who needs quick access to technical
              utilities. Whether the task is formatting data, converting values,
              testing patterns, or generating useful outputs, the platform is
              built to support practical workflows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Why We Built DevToolsHub
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Many online tools can feel limited, cluttered, or difficult to
              use. DevToolsHub was created to provide a cleaner and more focused
              experience where users can access helpful tools quickly and
              confidently. The platform is intended to keep growing through
              useful improvements and additional tools based on real user needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Commitment
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is committed to staying simple, practical, and
              user-friendly. As the platform grows, the focus will remain on
              improving usability, performance, and the overall usefulness of
              the tool collection for the developer community.
            </p>
          </section>
        </div>

        {/* Extra Section */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explore the Platform
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            DevToolsHub continues to expand with practical tools for everyday
            development and technical work. The aim is to provide a growing set
            of utilities that are easy to access and simple to use.
          </p>

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
              to="/uuid-generator"
              className="text-blue-600 hover:underline font-medium"
            >
              UUID Generator
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
export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            About Us
          </h1>

          <p className="text-gray-600">
            Learn more about DevToolsHub and the purpose behind this platform.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-8 border">
          <section>
            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is a free online platform created to provide
              developers, students, and tech professionals with simple, fast,
              and reliable tools for everyday technical tasks. Our goal is to
              make useful developer utilities easily accessible in one place.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
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
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our mission is to create a trusted and useful developer resource
              that is fast, secure, and easy to use. We aim to simplify routine
              development work by offering practical tools that run directly in
              the browser whenever possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Who DevToolsHub Is For
            </h2>

            <p className="text-gray-700 leading-relaxed">
              DevToolsHub is designed for developers, software engineers,
              testers, students, and anyone who needs quick access to technical
              utilities. Whether you are debugging data, converting formats, or
              testing patterns, our platform is built to support your workflow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Why We Built DevToolsHub
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Many online tools can feel limited, cluttered, or difficult to
              use. DevToolsHub was created to provide a cleaner and more focused
              experience where users can access useful tools quickly and
              confidently. We want to continue improving the platform by adding
              more tools and features based on real user needs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Our Commitment
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We are committed to keeping DevToolsHub simple, practical, and
              user-friendly. As the platform grows, we will continue improving
              performance, usability, and expanding the toolset to better serve
              the developer community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
import ToolCard from "../components/ToolCard";
import tools from "../data/toolsList";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Free Developer Tools
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Simple and powerful tools for developers including JSON formatting,
            encoding utilities, generators, converters and more.
          </p>

        </div>

      </section>


      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Developer Tools
        </h2>

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

    </div>
  );
}
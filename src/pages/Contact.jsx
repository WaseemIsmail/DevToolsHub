export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Contact
          </h1>

          <p className="text-gray-600">
            Have questions, suggestions, or found a bug? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 border space-y-6">

          <p className="text-gray-700 leading-relaxed">
            DevToolsHub is an open developer utility platform. If you have
            feedback, feature requests, or technical issues, feel free to reach
            out using the contact information below.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a
                  href="mailto:waseemismail.dev@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  waseemismail.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">💻</span>
              <div>
                <p className="font-medium text-gray-900">Project</p>
                <p className="text-gray-700">DevToolsHub</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">⏱</span>
              <div>
                <p className="font-medium text-gray-900">Response Time</p>
                <p className="text-gray-700">Usually within 24–48 hours</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
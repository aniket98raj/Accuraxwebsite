import { BookOpen, AlertCircle, GraduationCap } from "lucide-react";

export function AboutOurPlatform() {
  const learningTopics = [
    "Risk management theory",
    "Capital preservation concepts",
    "Trading discipline structures",
    "Probability-based session planning"
  ];

  const clearStatements = [
    "We do not manage client funds",
    "We do not accept investment capital",
    "We do not execute trades",
    "We do not provide buy/sell signals",
    "We do not offer guaranteed returns"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* About Our Platform Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Our Platform
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Our platform is an <span className="font-bold text-white">educational knowledge-based service</span> created to help learners understand:
            </p>

            <ul className="space-y-4 mb-8">
              {learningTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3 text-lg md:text-xl text-gray-300">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              We focus only on <span className="font-bold text-white">education and conceptual learning</span>.
            </p>
          </div>
        </div>

        {/* We Clearly State Section */}
        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-2 border-red-600 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-8">
            <AlertCircle className="w-10 h-10 text-red-500 flex-shrink-0" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We Clearly State:
            </h2>
          </div>

          <ul className="space-y-4">
            {clearStatements.map((statement, index) => (
              <li key={index} className="flex items-start gap-3 text-lg md:text-xl text-gray-200">
                <span className="text-red-400 font-bold mt-1">•</span>
                <span>{statement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

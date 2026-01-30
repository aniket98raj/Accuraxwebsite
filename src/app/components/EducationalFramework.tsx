import { Zap, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function EducationalFramework() {
  const concepts = [
    {
      emoji: "🦎",
      title: "Godzilla Concept",
      subtitle: "Risk Structure Learning",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500",
      link: "/educational/godzilla"
    },
    {
      emoji: "🐺",
      title: "Wolf Concept",
      subtitle: "Discipline Control Learning",
      color: "from-orange-500 to-amber-500",
      borderColor: "border-orange-500",
      link: "/educational/wolf"
    },
    {
      emoji: "🐢",
      title: "Turtle Concept",
      subtitle: "Capital Preservation Learning",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      link: "/educational/turtle"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Three <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Frameworks</span> to Master
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Probability-based capital control concepts designed for educational purposes
          </p>
        </div>

        {/* Concept Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {concepts.map((concept, index) => (
            <Link 
              key={index}
              to={concept.link}
              className="group bg-gradient-to-br from-gray-900/80 to-black border-2 border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Emoji */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {concept.emoji}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {concept.title}
              </h3>

              {/* Subtitle */}
              <p className={`text-lg md:text-xl font-bold bg-gradient-to-r ${concept.color} bg-clip-text text-transparent`}>
                {concept.subtitle}
              </p>

              {/* Learn More */}
              <div className="mt-6 pt-6 border-t border-gray-800 group-hover:border-gray-600 transition-colors">
                <span className="text-blue-400 text-sm font-semibold group-hover:text-blue-300">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* What We Teach */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-10 md:p-12 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What We Teach
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Probability Behaviour",
              "Drawdown Control Education",
              "Capital Allocation Concepts",
              "Session Risk Planning"
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl border-2 border-gray-300 hover:border-blue-400 transition-all hover:shadow-lg"
              >
                <p className="text-lg md:text-xl font-bold text-gray-900">
                  <span className="text-blue-600">{index + 1}.</span> {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimers */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {[
            "All Concepts are hypothetical and mathematical explained using examples only.",
            "We Teach Concepts, not Trades. We sell knowledge, Not Profits.",
            "Subscription provides access to educational content only.",
            "Mathematical probability concepts understanding purposes only."
          ].map((disclaimer, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-5 text-center"
            >
              <p className="text-base md:text-lg font-semibold text-blue-200">
                {disclaimer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
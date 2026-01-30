import { CheckCircle, Lightbulb } from "lucide-react";

export function WhatYouWillLearn() {
  const learningPoints = [
    "Money management concepts",
    "Loss recovery model structures",
    "Drawdown control techniques",
    "Risk–reward balancing methods",
    "Trading psychology discipline",
    "Capital survival frameworks"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Lightbulb className="w-12 h-12 text-green-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              What You Will <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learn</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive educational framework designed to build strong foundational knowledge
          </p>
        </div>

        {/* Learning Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {learningPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 hover:border-green-500/50 rounded-2xl p-8 group transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="flex items-start gap-5">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-xl md:text-2xl text-gray-200 group-hover:text-white transition-colors">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl px-8 py-6">
            <p className="text-lg md:text-xl text-blue-200 font-semibold">
              Structured learning path from fundamentals to advanced concepts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
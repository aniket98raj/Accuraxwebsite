import { CheckCircle } from "lucide-react";

export function SafeWordingGuidelines() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/20 to-black border-y border-green-500/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-10 h-10 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Educational <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Commitment</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AccuraX focuses on education and probability-based concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Safe Wording Column */}
          <div className="bg-black/50 border border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Our Focus Areas</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Trading education",
                "Risk management education",
                "Capital discipline learning",
                "Probability-based concepts",
                "Educational subscription"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Principles Column */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Key Principles</h3>
            </div>
            <ul className="space-y-4">
              {[
                "We teach concepts, not trades",
                "We sell knowledge, not profits",
                "Hypothetical examples only",
                "Academic probability theory",
                "Educational framework approach"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl">
          <p className="text-orange-200 text-center text-sm">
            <strong>Important:</strong> All content on AccuraX is for educational purposes only. 
            We provide conceptual frameworks and hypothetical examples based on probability theory. 
            Past performance examples do not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}

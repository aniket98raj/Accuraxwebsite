import { BookOpen, AlertTriangle } from "lucide-react";

export function RiskManagementEducation() {
  const educationalFocus = [
    "Trading risk management concepts",
    "Capital protection techniques",
    "Loss recovery models (theory-based)",
    "Session control frameworks",
    "Probability-based trading education"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-12 h-12 text-blue-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Educational <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Framework</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
            Learn Risk Management & Capital Control Concepts
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-3xl p-10 md:p-14 shadow-2xl">
          
          {/* Intro Text */}
          <p className="text-2xl md:text-3xl text-white mb-12 font-semibold">
            We provide structured educational content focused on:
          </p>

          {/* Educational Focus List */}
          <div className="mb-14 space-y-6">
            {educationalFocus.map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform shadow-lg shadow-blue-500/50"></div>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer Section 1 */}
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-l-4 border-blue-500 rounded-r-xl p-8 mb-6 shadow-lg">
            <p className="text-xl md:text-2xl text-gray-100">
              This platform is created <span className="font-bold text-white">only for learning and educational purposes</span>.
            </p>
          </div>

          {/* Disclaimer Section 2 */}
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-l-4 border-red-500 rounded-r-xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-7 h-7 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl text-gray-100">
                We do <span className="font-bold text-red-400">not</span> provide trading services, investment advice, or profit-based programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
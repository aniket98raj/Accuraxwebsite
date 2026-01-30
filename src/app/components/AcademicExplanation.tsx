import { BookOpen, GraduationCap } from "lucide-react";

export function AcademicExplanation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <GraduationCap className="w-12 h-12 text-blue-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Academic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Foundation</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Understanding the mathematical foundation behind trading concepts
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-3xl p-10 md:p-14 relative shadow-2xl">
          {/* Decorative Corner */}
          <div className="absolute top-8 right-8">
            <BookOpen className="w-8 h-8 text-blue-400/30" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            <p>
              <span className="text-blue-400 font-semibold">In probability theory</span>, profitability does{" "}
              <span className="text-orange-400 font-bold">not</span> depend only{" "}
              <span className="text-blue-400 font-semibold">on</span> accuracy percentage.
            </p>

            <p className="text-white font-semibold">
              It depends <span className="text-blue-400">on</span> the relationship between:
            </p>

            <div className="ml-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-200">Risk per attempt</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-200">Reward <span className="text-blue-400 font-semibold">structure</span></span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-200">Capital allocation</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-200">Drawdown <span className="text-blue-400 font-semibold">control</span></span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-200">
                This concept <span className="text-orange-400 font-bold">is</span> explained{" "}
                <span className="text-blue-400 font-semibold">using</span> hypothetical academic examples only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <p className="text-blue-200 text-base md:text-lg lg:text-xl">
              All concepts are presented in an academic framework using mathematical probability theory 
              and hypothetical examples for educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Diamond } from "lucide-react";

export function OurEducationalConcepts() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rotate-45 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
              <Diamond className="w-7 h-7 text-white -rotate-45" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Educational Concepts</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-10 text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 flex-shrink-0"></div>
              <p>
                We provide <span className="text-white font-bold">three independent educational concept frameworks</span>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 flex-shrink-0"></div>
              <p>
                Each concept is designed for <span className="text-white font-bold">learning different approaches to risk management and capital discipline</span>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 flex-shrink-0"></div>
              <p>
                These concepts are <span className="text-white font-bold">not connected, not signals</span>, and <span className="text-white font-bold">not trading advice</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
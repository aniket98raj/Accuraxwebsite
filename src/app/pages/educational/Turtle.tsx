import { Shield, TrendingUp, Target, Clock } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { AcademicExplanation } from "../../components/AcademicExplanation";
import { WhatYouWillLearn } from "../../components/WhatYouWillLearn";

export function Turtle() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-6xl">🐢</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Turtle Concept
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-8">
            Capital Discipline Framework
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conservative approach to capital preservation and long-term growth
          </p>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Overview
          </h3>

          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            The Turtle Concept is built around <span className="font-bold">slow, disciplined, capital-preservation learning models.</span>
          </p>

          <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
            This concept emphasizes:
          </p>

          <ul className="space-y-4 text-xl md:text-2xl text-white">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Low exposure theory</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Long-term survival mindset</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Session pacing education</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Drawdown avoidance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Capital sustainability concepts</span>
            </li>
          </ul>
        </div>

        {/* Concept Image */}
        <div className="mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200&fit=crop"
            alt="Turtle Concept"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
          />
        </div>

        {/* Academic Explanation */}
        <AcademicExplanation />

        {/* Strategy Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Educational Approach</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Turtle Concept is inspired by legendary educational experiments and emphasizes 
              capital preservation learning, risk management theory, and systematic understanding. Like a turtle's protective 
              shell, this educational framework prioritizes defensive concepts over aggressive strategies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This conservative learning approach focuses on understanding small, consistent theoretical gains with strict risk control concepts. 
              It's designed for teaching long-term wealth accumulation theory rather than quick profit promises, making it 
              ideal for learners who value stability understanding and peace of mind.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Capital Protection</h3>
                  <p className="text-gray-400 text-sm">Strict risk management with maximum 1-2% risk per trade</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Long-Term Focus</h3>
                  <p className="text-gray-400 text-sm">Designed for steady growth over months and years, not days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Risk First",
                description: "Capital preservation is the top priority with tight stop-losses"
              },
              {
                icon: Clock,
                title: "Patience Rewarded",
                description: "Waits for high-probability setups with favorable risk/reward"
              },
              {
                icon: TrendingUp,
                title: "Compound Growth",
                description: "Focuses on consistent small wins that compound over time"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-black rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Hypothetical Learning Metrics</h2>
          <p className="text-center text-green-100 mb-8">*Theoretical examples for educational purposes only</p>
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-5xl font-bold mb-2">68%</div>
              <div className="text-blue-100">Win Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3.5:1</div>
              <div className="text-blue-100">Risk/Reward</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">52%</div>
              <div className="text-blue-100">Annual Return</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">-5%</div>
              <div className="text-blue-100">Max Drawdown</div>
            </div>
          </div>
        </div>

        {/* Risk Management Rules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Risk Management Rules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Position Sizing</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Maximum 1% account risk per trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>No more than 5% total capital at risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Scaled position entry for larger trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Reduced size after consecutive losses</span>
                </li>
              </ul>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Stop-Loss Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Always use protective stop-losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Trail stops to lock in profits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Stop-loss placed at technical levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Never move stops against position</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Core Principles</h2>
          <div className="space-y-4">
            <div className="bg-black border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-white font-bold mb-2">1. Survive First, Profit Second</h3>
              <p className="text-gray-300">The primary goal is to preserve capital. Profits will naturally follow when risk is managed properly.</p>
            </div>
            <div className="bg-black border-l-4 border-purple-500 p-6 rounded-r-xl">
              <h3 className="text-white font-bold mb-2">2. Consistency Over Excitement</h3>
              <p className="text-gray-300">Small, steady gains compound into substantial wealth over time. Avoid the temptation of risky "home run" trades.</p>
            </div>
            <div className="bg-black border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-white font-bold mb-2">3. Discipline is Everything</h3>
              <p className="text-gray-300">Stick to the system even during drawdowns. Emotional trading is the enemy of success.</p>
            </div>
            <div className="bg-black border-l-4 border-purple-500 p-6 rounded-r-xl">
              <h3 className="text-white font-bold mb-2">4. Time is Your Advantage</h3>
              <p className="text-gray-300">Let compound interest work in your favor. The turtle wins the race through patience and persistence.</p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Who Is This For?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Conservative traders who prioritize capital preservation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Long-term investors seeking steady, compounding returns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Beginners who want to build trading discipline</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Traders who value peace of mind and minimal stress</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Those managing retirement or long-term portfolios</span>
            </li>
          </ul>
        </div>

        {/* What You Will Learn */}
        <WhatYouWillLearn />
      </div>
    </div>
  );
}
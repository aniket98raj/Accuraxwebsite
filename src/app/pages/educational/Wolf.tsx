import { Users, TrendingUp, Target, Brain } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { AcademicExplanation } from "../../components/AcademicExplanation";
import { WhatYouWillLearn } from "../../components/WhatYouWillLearn";

export function Wolf() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-6xl">🐺</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Wolf Concept
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-8">
            Educational Control Framework
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering discipline and systematic position management
          </p>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Overview
          </h3>

          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            The Wolf Concept focuses on <span className="font-bold">discipline-based capital control</span> and structured risk behavior education.
          </p>

          <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
            It helps learners understand:
          </p>

          <ul className="space-y-4 text-xl md:text-2xl text-white">
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span>Step-based exposure control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span>Psychological risk management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span>Loss-sequence understanding</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span>Capital survival mindset</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span>Decision discipline theory</span>
            </li>
          </ul>
        </div>

        {/* Concept Image */}
        <div className="mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=1200&fit=crop"
            alt="Wolf Concept"
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
              The Wolf Concept teaches pack-hunting strategies for learning - patient, coordinated, 
              and methodical. This educational approach waits for multiple technical indicators to align 
              in theoretical examples, ensuring students understand high-probability setup identification.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Like wolves hunting together, this framework uses multiple timeframe analysis and 
              confirmation signal education to teach perfect timing concepts. It's systematic, 
              disciplined, and designed for understanding consistent learning patterns.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Multi-Signal Confirmation</h3>
                  <p className="text-gray-400 text-sm">Waits for multiple indicators to align before entering trades</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Intelligent Timing</h3>
                  <p className="text-gray-400 text-sm">Patient approach that waits for optimal entry conditions</p>
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
                icon: Target,
                title: "Signal Confluence",
                description: "Multiple technical indicators must align before trade execution"
              },
              {
                icon: Users,
                title: "Pack Strategy",
                description: "Combines trend, momentum, and volume analysis for confirmation"
              },
              {
                icon: TrendingUp,
                title: "Adaptive Approach",
                description: "Adjusts strategy based on market conditions and volatility"
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
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Hypothetical Learning Metrics</h2>
          <p className="text-center text-orange-100 mb-8">*Theoretical examples for educational purposes only</p>
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Win Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2.8:1</div>
              <div className="text-blue-100">Risk/Reward</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">124%</div>
              <div className="text-blue-100">Annual Return</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">-8%</div>
              <div className="text-blue-100">Max Drawdown</div>
            </div>
          </div>
        </div>

        {/* Trading Signals Used */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Trading Signals Used</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Technical Indicators</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Moving Average Convergence (EMA crossovers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>RSI and momentum oscillators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Volume analysis and confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Support and resistance levels</span>
                </li>
              </ul>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Confirmation Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Minimum 3 signals must align</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Higher timeframe trend confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Volume must support the move</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>No major news events in conflict</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Who Is This For?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Intermediate to advanced traders who value confirmation signals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Patient traders who prefer quality setups over quantity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Those seeking consistent returns with lower drawdowns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Traders who appreciate systematic, rule-based approaches</span>
            </li>
          </ul>
        </div>

        {/* What You Will Learn */}
        <WhatYouWillLearn />
      </div>
    </div>
  );
}
import { TrendingUp, Target, Shield, Zap } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { AcademicExplanation } from "../../components/AcademicExplanation";
import { WhatYouWillLearn } from "../../components/WhatYouWillLearn";

export function Godzilla() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-6xl">🦎</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Godzilla Concept
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-8">
            Educational Risk Framework
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Understanding high-volatility behavior and structured exposure planning
          </p>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Overview
          </h3>

          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            The Godzilla Concept is an educational framework focused on:
          </p>

          <ul className="space-y-4 text-xl md:text-2xl text-white mb-10">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">•</span>
              <span>Understanding high-volatility behavior</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">•</span>
              <span>Session risk allocation theory</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">•</span>
              <span>Structured exposure planning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">•</span>
              <span>Controlled recovery logic (theoretical)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">•</span>
              <span>Capital protection awareness</span>
            </li>
          </ul>

          <p className="text-xl md:text-2xl text-white leading-relaxed">
            This concept is shared <span className="font-bold">only for learning purposes</span> using hypothetical examples.
          </p>
        </div>

        {/* Concept Image */}
        <div className="mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&fit=crop"
            alt="Godzilla Concept"
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
              The Godzilla Concept teaches aggressive risk management frameworks that focus on 
              identifying and understanding major market movements. This educational approach 
              emphasizes learning about high-impact theoretical strategies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Students learn about bold position management theories and are introduced to 
              higher risk-reward ratio concepts. It combines theoretical technical analysis with 
              momentum indicator education to explain breakout opportunity identification.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">High Impact</h3>
                  <p className="text-gray-400 text-sm">Focuses on major market movements with significant profit potential</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Momentum-Based</h3>
                  <p className="text-gray-400 text-sm">Leverages strong market momentum and trend continuation</p>
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
                title: "Precision Entry",
                description: "Advanced algorithms identify optimal entry points with high probability setups"
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Built-in stop-loss and position sizing to protect your capital"
              },
              {
                icon: TrendingUp,
                title: "Trend Following",
                description: "Captures major trending moves across multiple timeframes"
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
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Hypothetical Learning Metrics</h2>
          <p className="text-center text-pink-100 mb-8">*Theoretical examples for educational purposes only</p>
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-5xl font-bold mb-2">78%</div>
              <div className="text-blue-100">Win Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3.2:1</div>
              <div className="text-blue-100">Risk/Reward</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">145%</div>
              <div className="text-blue-100">Annual Return</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">-12%</div>
              <div className="text-blue-100">Max Drawdown</div>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Who Is This For?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Experienced traders comfortable with aggressive strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Traders seeking high-reward opportunities with calculated risk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Those who prefer momentum and trend-following approaches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Traders with sufficient capital to handle larger position sizes</span>
            </li>
          </ul>
        </div>

        {/* What You Will Learn */}
        <WhatYouWillLearn />
      </div>
    </div>
  );
}
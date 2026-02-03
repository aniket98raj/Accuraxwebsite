import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "GODZILLA",
    emoji: "🦖",
    subtitle: "High Risk Growth Model",
    price: "399",
    description: "For aggressive traders seeking high-risk, fast growth opportunities",
    features: [
      "Rule-based Money Management System",
      "Fixed 3% risk per trade",
      "Designed to work with ~55% probability of success",
      "Uses positive risk-reward structure",
      "Higher probability helps maintain consistency",
      "Can be profitable due to discipline + compounding logic",
      "Suitable for high-risk, fast-growth traders"
    ],
    disclaimer: "Performance is probability-based, not guaranteed.",
    popular: false
  },
  {
    name: "WOLF",
    emoji: "🐺",
    subtitle: "Loss Recovery Model",
    price: "499",
    description: "Balanced approach with structured loss recovery for medium-risk traders",
    features: [
      "Structured Loss Recovery Money Management System",
      "Designed around ~50% probability",
      "Concept: In a set of 6 trades, 1 winning trade can cover all previous losses and generate net profit",
      "Uses predefined recovery rules (no emotional decisions)",
      "Focus on capital recovery + controlled growth",
      "Medium risk, rule-driven execution",
      "Best for traders who want balance between risk and safety"
    ],
    disclaimer: "Recovery works on probability and execution discipline, not certainty.",
    popular: true
  },
  {
    name: "TURTLE",
    emoji: "🐢",
    subtitle: "Capital Protection Model",
    price: "599",
    description: "Conservative approach prioritizing capital protection and stable growth",
    features: [
      "Conservative Capital Protection Money Management System",
      "Designed to work with ~22.22% probability (around 2 wins in 9 trades, wins can occur randomly)",
      "Uses high reward vs low risk structure",
      "Even with ~30% probability, system can be net profitable",
      "Losses remain small, wins are relatively larger",
      "Focus on slow, steady and stable growth",
      "Ideal for patient, low-risk traders"
    ],
    disclaimer: "This model focuses on survival and long-term probability, not frequent wins.",
    popular: false
  }
];

export function Pricing() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            Pricing Plans
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Perfect Plan</span>
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-black relative ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 ring-2 ring-blue-500/50' 
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">{plan.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-3">{plan.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-gray-400 text-sm">₹</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Excluding taxes</p>
              </div>

              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Disclaimer */}
              <div className="mb-6 p-3 bg-gray-900/50 border border-gray-800 rounded-lg">
                <p className="text-xs text-gray-400 italic text-center">
                  {plan.disclaimer}
                </p>
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-gray-800'
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* What You Get Section */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="bg-black border border-gray-800 rounded-2xl p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Money Management Calculation Tools</h4>
                  <p className="text-gray-400 text-sm">Professional tools to calculate your position sizes and risk</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Probability & Maths-Based Risk Framework</h4>
                  <p className="text-gray-400 text-sm">Learn probability theory applied to trading decisions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Exact Amount Calculation Per Trade</h4>
                  <p className="text-gray-400 text-sm">Know exactly how much to risk on each trade</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Educational Explanation of How the System Works</h4>
                  <p className="text-gray-400 text-sm">Complete documentation and learning materials</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg md:col-span-2">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Rule-Based Structure to Avoid Emotional Trading</h4>
                  <p className="text-gray-400 text-sm">Systematic approach to eliminate emotional decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Money Management Tools Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 border border-blue-500/20 rounded-2xl p-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Smart Money Management Tools
            </h2>
            <p className="text-xl md:text-2xl italic text-gray-300 mb-8">
              (Education • Maths • Probability Based)
            </p>
            <div className="space-y-4 text-lg text-gray-200 mb-8">
              <p>
                We provide <span className="font-bold text-white">money management tools</span> built on{" "}
                <span className="font-bold text-white">mathematics, probability, and risk control</span>. 
                These tools <span className="font-bold text-white">do not tell you what to buy or sell</span>. 
                They only calculate <span className="font-bold text-white">how much amount to use per trade</span>, based on a selected model.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 justify-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👉</span>
                <p className="text-xl text-gray-200">No tips. No calls. No guarantees.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">👉</span>
                <p className="text-xl text-gray-200">Only <span className="font-bold text-white">logic, discipline, and tools</span>.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
import { Bot, BarChart3, Shield, Zap, Brain, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Algorithms",
    description: "Advanced machine learning models analyze market patterns and execute trades with precision.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Get instant insights with comprehensive dashboards and customizable indicators.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data and funds are protected with enterprise-grade encryption and security protocols.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Execute trades in milliseconds with our high-performance trading infrastructure.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Brain,
    title: "Smart Strategy Builder",
    description: "Create and backtest custom trading strategies with our intuitive visual builder.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monitor your portfolio performance with detailed reports and analytics.",
    color: "from-pink-500 to-rose-500"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to Trade Better
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful tools and features designed to give you an edge in the market
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-black hover:bg-white/5 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
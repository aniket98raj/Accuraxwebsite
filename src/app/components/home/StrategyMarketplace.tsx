import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { TrendingUp, Star, Clock, BarChart3 } from "lucide-react";

const strategies = [
  {
    name: "Mean Reversion Pro",
    category: "Momentum",
    performance: "Example Case Study",
    risk: "Medium",
    timeframe: "1H",
    rating: 4.8,
    users: 1234,
    description: "Educational framework on price reversals after extreme movements"
  },
  {
    name: "Trend Following Elite",
    category: "Trend",
    performance: "Hypothetical Model",
    risk: "Low",
    timeframe: "4H",
    rating: 4.9,
    users: 2156,
    description: "Conceptual learning on following market trends with dynamic management"
  },
  {
    name: "Breakout Hunter",
    category: "Breakout",
    performance: "Learning Module",
    risk: "Medium",
    timeframe: "15M",
    rating: 4.7,
    users: 987,
    description: "Education on identifying key support/resistance breakouts"
  },
  {
    name: "Options Scalper",
    category: "Scalping",
    performance: "Concept Study",
    risk: "High",
    timeframe: "5M",
    rating: 4.6,
    users: 756,
    description: "High-frequency scalping concepts for options trading education"
  }
];

export function StrategyMarketplace() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
              Educational Strategy Library
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Pre-Built Learning Modules & Concept Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore our library of educational frameworks and hypothetical strategy concepts
            </p>
          </div>
          <Button variant="outline" className="hidden lg:flex border-gray-700 text-gray-300 hover:bg-white/5">
            View All Modules
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <Card key={index} className="p-6 bg-black border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                  {strategy.category}
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-medium">{strategy.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {strategy.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {strategy.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Performance</span>
                  <span className="text-sm font-bold text-green-400">{strategy.performance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Risk Level</span>
                  <span className={`text-sm font-medium ${
                    strategy.risk === 'Low' ? 'text-green-400' : 
                    strategy.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>{strategy.risk}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Timeframe
                  </span>
                  <span className="text-sm font-medium text-gray-300">{strategy.timeframe}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{strategy.users.toLocaleString()} users</span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Active
                  </span>
                </div>
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-gray-800 group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all">
                  Learn Strategy
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 lg:hidden">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-white/5">
            View All Modules
          </Button>
        </div>
      </div>
    </section>
  );
}
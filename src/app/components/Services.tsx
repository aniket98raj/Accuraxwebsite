import { Code, LineChart, Rocket, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Algorithmic Trading",
    description: "Deploy sophisticated trading algorithms that work 24/7 to capitalize on market opportunities.",
    features: ["Custom Strategy Development", "Backtesting Tools", "Live Market Execution", "Risk Management"]
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    description: "Comprehensive market analysis tools powered by AI to identify trends and opportunities.",
    features: ["Technical Analysis", "Sentiment Analysis", "Pattern Recognition", "Predictive Models"]
  },
  {
    icon: Rocket,
    title: "Portfolio Management",
    description: "Optimize your portfolio with intelligent asset allocation and rebalancing strategies.",
    features: ["Auto-Rebalancing", "Diversification Tools", "Performance Tracking", "Tax Optimization"]
  },
  {
    icon: Users,
    title: "Social Trading",
    description: "Follow and learn from top traders or share your own strategies with the community.",
    features: ["Copy Trading", "Strategy Sharing", "Leaderboards", "Community Insights"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-500/20">
            Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Trading Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From algorithmic trading to portfolio management, we've got you covered
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3OTU1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Trading Platform Dashboard"
            className="rounded-2xl shadow-2xl w-full ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
import { Search, Cpu, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Strategy",
    description: "Browse our marketplace of 500+ pre-built strategies or create your own using our visual strategy builder.",
    number: "01"
  },
  {
    icon: Cpu,
    title: "Backtest & Optimize",
    description: "Test your strategy against historical data and optimize parameters to maximize performance.",
    number: "02"
  },
  {
    icon: Rocket,
    title: "Deploy & Automate",
    description: "Connect your broker and deploy your strategy with one click. Let the algorithm trade for you 24/7.",
    number: "03"
  },
  {
    icon: BarChart,
    title: "Monitor & Adjust",
    description: "Track real-time performance, receive alerts, and make adjustments as market conditions change.",
    number: "04"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-500/20">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Trading in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From strategy selection to live deployment, we've made algorithmic trading accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-800 to-transparent"></div>
                )}
                
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

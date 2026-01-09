import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCircle } from "lucide-react";

const features = {
  backtesting: {
    title: "Advanced Backtesting Engine",
    description: "Test your strategies against years of historical data with tick-level precision. Understand how your algorithm would have performed in various market conditions.",
    image: "https://images.unsplash.com/photo-1766218326892-4b261b02a03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGRhdGElMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY3OTU4MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: [
      "Historical data from 2010 onwards",
      "Multiple asset classes supported",
      "Realistic slippage & commission modeling",
      "Monte Carlo simulations"
    ]
  },
  builder: {
    title: "Visual Strategy Builder",
    description: "Create sophisticated trading algorithms without coding. Our intuitive drag-and-drop interface makes strategy development accessible to everyone.",
    image: "https://images.unsplash.com/photo-1762279389020-eeeb69c25813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzY3OTA0MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: [
      "No coding required",
      "200+ technical indicators",
      "Custom indicator support",
      "Real-time strategy validation"
    ]
  },
  execution: {
    title: "Lightning-Fast Execution",
    description: "Execute trades in milliseconds with our optimized infrastructure. Direct connectivity to major exchanges ensures minimal latency.",
    image: "https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwZGVzayUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njc5MjU1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: [
      "Sub-millisecond execution",
      "99.99% uptime guarantee",
      "Smart order routing",
      "Real-time position management"
    ]
  },
  analytics: {
    title: "Comprehensive Analytics",
    description: "Monitor every aspect of your trading performance with detailed analytics and real-time reporting. Make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzY3OTU4MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: [
      "Real-time P&L tracking",
      "Risk metrics & analysis",
      "Performance attribution",
      "Custom dashboards"
    ]
  }
};

export function PlatformFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-500/20">
            Platform Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional-grade tools that give you a competitive edge in the markets
          </p>
        </div>

        <Tabs defaultValue="backtesting" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-black border border-gray-800 p-1">
            <TabsTrigger value="backtesting" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Backtesting
            </TabsTrigger>
            <TabsTrigger value="builder" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Strategy Builder
            </TabsTrigger>
            <TabsTrigger value="execution" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Execution
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl ring-1 ring-white/10 w-full"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

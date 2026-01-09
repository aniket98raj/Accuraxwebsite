import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";

const brokers = [
  { name: "Interactive Brokers", logo: "IB", color: "from-blue-600 to-cyan-600" },
  { name: "TD Ameritrade", logo: "TD", color: "from-green-600 to-emerald-600" },
  { name: "E*TRADE", logo: "ET", color: "from-purple-600 to-pink-600" },
  { name: "Robinhood", logo: "RH", color: "from-orange-600 to-red-600" },
  { name: "Alpaca", logo: "AL", color: "from-yellow-600 to-orange-600" },
  { name: "Webull", logo: "WB", color: "from-indigo-600 to-purple-600" }
];

export function Integrations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-500/20">
            Broker Integrations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Connect with Your Preferred Broker
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seamless integration with major brokers. Connect your account and start trading in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brokers.map((broker, index) => (
            <Card key={index} className="p-6 bg-black border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all group">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${broker.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {broker.logo}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">{broker.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Connected</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Don't see your broker?
          </h3>
          <p className="text-gray-400 mb-4">
            We're constantly adding new integrations. Request your broker and we'll prioritize it.
          </p>
          <button className="text-blue-400 hover:text-blue-300 font-medium">
            Request Integration →
          </button>
        </div>
      </div>
    </section>
  );
}

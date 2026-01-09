import { TrendingUp, Users, DollarSign, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Traders",
    change: "+12% this month"
  },
  {
    icon: DollarSign,
    value: "$5B+",
    label: "Trading Volume",
    change: "+25% this quarter"
  },
  {
    icon: TrendingUp,
    value: "98.5%",
    label: "Uptime",
    change: "Last 30 days"
  },
  {
    icon: Award,
    value: "500+",
    label: "Strategies Available",
    change: "Pre-built & tested"
  }
];

export function Stats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.change}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

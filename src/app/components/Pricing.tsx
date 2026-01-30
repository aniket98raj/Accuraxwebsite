import { Button } from "./ui/button";
import { Check, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "Forever Free",
    description: "Perfect for beginners learning trading concepts",
    features: [
      "1 Learning Module Access",
      "Basic Educational Content",
      "Practice Simulation",
      "Community Support",
      "Mobile App Access",
      "Educational Resources"
    ],
    cta: "Start Learning Free",
    popular: false
  },
  {
    name: "Professional",
    price: "99",
    period: "per month",
    description: "For serious learners who want comprehensive education",
    features: [
      "10 Learning Module Access",
      "Real-Time Educational Data",
      "Advanced Learning Simulations",
      "Priority Support 24/7",
      "Advanced Educational Analytics",
      "API Access for Learning",
      "Historical Analysis Tools",
      "Custom Educational Indicators"
    ],
    cta: "Start Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "299",
    period: "per month",
    description: "Maximum educational content for institutional learning",
    features: [
      "Unlimited Module Access",
      "Premium Educational Content",
      "Multi-User Learning Accounts",
      "Dedicated Account Manager",
      "Custom Educational Integration",
      "White-Label Options",
      "Advanced Risk Management",
      "Custom Development"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-500/20">
            Educational Subscription Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible educational subscription options for learners at every level
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 bg-black ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105' 
                  : 'border-2 border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  {plan.price !== "0" && <span className="text-gray-400">/{plan.period.split(" ")[1]}</span>}
                </div>
                <p className="text-sm text-gray-400">{plan.period}</p>
                <p className="text-gray-400 mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-500/20">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-gray-800'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
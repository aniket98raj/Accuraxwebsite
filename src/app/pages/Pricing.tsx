import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for individual traders getting started",
    features: [
      "5 Active strategies",
      "Basic backtesting",
      "1 Broker connection",
      "Email support",
      "Real-time alerts",
      "Mobile app access",
      "Strategy marketplace access",
      "Historical data (1 year)"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "149",
    description: "For serious traders who need advanced features",
    features: [
      "Unlimited strategies",
      "Advanced backtesting",
      "3 Broker connections",
      "Priority support",
      "Real-time alerts",
      "Mobile app access",
      "Strategy marketplace access",
      "Historical data (5 years)",
      "Custom indicators",
      "API access",
      "Advanced analytics",
      "Paper trading"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "499",
    description: "For professional trading firms and institutions",
    features: [
      "Unlimited strategies",
      "Enterprise backtesting",
      "Unlimited broker connections",
      "24/7 Dedicated support",
      "Real-time alerts",
      "Mobile app access",
      "Strategy marketplace access",
      "Historical data (10+ years)",
      "Custom indicators",
      "Full API access",
      "White-label solutions",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option"
    ],
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
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
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
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
                {plan.popular ? 'Start Free Trial' : 'Get Started'}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Can I change my plan later?</h3>
              <p className="text-gray-400">
                Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for monthly subscriptions.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Is there a setup fee?</h3>
              <p className="text-gray-400">
                No setup fees. What you see is what you pay. All plans come with full access during the 14-day free trial.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-400">
                Absolutely. You can cancel your subscription at any time with no questions asked. Your access will continue until the end of your billing period.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Do you offer annual billing?</h3>
              <p className="text-gray-400">
                Yes! Contact our sales team for annual billing options and receive up to 20% discount on all plans.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the right plan for your trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-white/5"
            >
              Schedule a Demo
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

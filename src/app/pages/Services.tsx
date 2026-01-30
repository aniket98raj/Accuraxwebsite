import { CheckCircle, BookOpen, Diamond, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      emoji: "🦎",
      title: "Godzilla Concept",
      subtitle: "Educational Risk Framework",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500",
      description: "Understanding high-volatility behavior and structured exposure planning",
      features: [
        "Session risk allocation theory",
        "Controlled recovery logic (theoretical)",
        "Capital protection awareness",
        "Volatility behavior patterns"
      ],
      link: "/educational/godzilla"
    },
    {
      emoji: "🐺",
      title: "Wolf Concept",
      subtitle: "Educational Control Framework",
      color: "from-orange-500 to-amber-500",
      borderColor: "border-orange-500",
      description: "Mastering discipline and systematic position management",
      features: [
        "Sequential position planning",
        "Controlled exposure methodology",
        "Discipline-based recovery models",
        "Session control frameworks"
      ],
      link: "/educational/wolf"
    },
    {
      emoji: "🐢",
      title: "Turtle Concept",
      subtitle: "Capital Discipline Framework",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      description: "Conservative approach to capital preservation and long-term growth",
      features: [
        "Capital preservation techniques",
        "Conservative risk models",
        "Patience-based strategies",
        "Long-term sustainability focus"
      ],
      link: "/educational/turtle"
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Educational <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Three comprehensive educational frameworks designed to teach probability-based capital control concepts
          </p>
        </div>

        {/* Service Cards */}
        {services.map((service, index) => (
          <div key={index} className="mb-16">
            <div className="bg-gradient-to-br from-gray-900/80 to-black border-2 border-gray-800 hover:border-gray-600 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Service Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{service.emoji}</div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {service.title}
                    </h2>
                    <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-black/50 border border-gray-800 rounded-xl p-4">
                      <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                <span>Learn More About {service.title}</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}

        {/* What's Included Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-3xl p-10 md:p-14 mb-16">
          <div className="flex items-center gap-4 mb-10">
            <Diamond className="w-12 h-12 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What's Included
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Money management education",
              "Loss recovery model explanation",
              "Session-based risk planning",
              "Capital allocation theory",
              "Exposure control techniques",
              "Hypothetical case studies",
              "Probability behavior analysis",
              "Drawdown control education",
              "Risk-reward balancing methods"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-black/50 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-all">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-lg text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Focus */}
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-3xl p-10 md:p-12 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-12 h-12 text-blue-400 flex-shrink-0" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Educational Focus
            </h3>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
            <p>
              All our services are <span className="font-bold text-white">purely educational</span> and designed to teach concepts, theories, and methodologies.
            </p>
            <p>
              We do <span className="font-bold text-red-400">not</span> provide trading signals, investment advice, or fund management services.
            </p>
            <p>
              Our subscriptions grant access to <span className="font-bold text-white">learning materials only</span>.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-l-4 border-orange-500 rounded-r-2xl p-10 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-10 h-10 text-orange-400" />
            Important Notice
          </h3>
          <div className="space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed">
            <p>
              These educational modules are <span className="font-bold text-white">theoretical learning resources</span>.
            </p>
            <p>
              All concepts are explained using <span className="font-bold text-white">hypothetical examples and mathematical probability theory</span> for educational purposes only.
            </p>
            <p>
              We teach <span className="font-bold text-white">concepts, not trades</span>. We sell <span className="font-bold text-white">knowledge, not profits</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
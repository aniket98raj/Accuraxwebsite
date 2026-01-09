import { CheckCircle, Target, Users, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AccuraX.in</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionizing algorithmic trading with cutting-edge AI technology and unparalleled market insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc5NTQ5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Team"
              className="rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At AccuraX, we're committed to democratizing algorithmic trading by making sophisticated 
              trading strategies accessible to everyone. Our platform combines cutting-edge AI technology 
              with user-friendly interfaces to help traders of all levels maximize their potential.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Precision",
              description: "We deliver accurate, data-driven trading solutions"
            },
            {
              icon: Users,
              title: "Community",
              description: "Building a supportive ecosystem for all traders"
            },
            {
              icon: CheckCircle,
              title: "Integrity",
              description: "Transparent operations and honest communication"
            },
            {
              icon: TrendingUp,
              title: "Innovation",
              description: "Constantly evolving with market trends"
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center p-6 bg-black rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
        <div className="grid md:grid-cols-4 gap-8 text-white text-center">
          <div>
            <div className="text-5xl font-bold mb-2">10K+</div>
            <div className="text-blue-100">Active Traders</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">$5B+</div>
            <div className="text-blue-100">Trading Volume</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">98%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </section>
    </div>
  );
}
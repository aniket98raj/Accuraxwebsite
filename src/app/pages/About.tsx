import { CheckCircle, Target, Users, TrendingUp, BookOpen, Shield, Award, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AccuraX</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering traders with educational frameworks focused on probability-based capital control concepts.
          </p>
        </div>

        {/* Mission Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY5NjM3ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AccuraX Platform"
              className="rounded-2xl shadow-2xl ring-1 ring-white/10 w-full"
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                At AccuraX, we're committed to teaching probability-based capital control concepts through 
                comprehensive educational frameworks.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                We believe in empowering traders with <span className="text-white font-bold">knowledge, not profits</span>. 
                Our mission is to provide mathematical and hypothetical concepts that help traders understand 
                risk structure, discipline control, and capital preservation.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-l-4 border-blue-500 rounded-r-xl p-6">
              <p className="text-2xl md:text-3xl text-blue-200 italic font-semibold">
                "We teach concepts, not trades. We sell knowledge, not profits."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-3xl p-10 md:p-14">
          <div className="flex items-center gap-4 mb-10">
            <Users className="w-12 h-12 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Who We Are
            </h2>
          </div>
          <div className="space-y-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p>
              AccuraX is an <span className="text-white font-bold">educational platform</span> dedicated to teaching trading concepts 
              through a structured, academic approach.
            </p>
            <p>
              We provide <span className="text-white font-bold">three independent educational frameworks</span> (Godzilla, Wolf, and Turtle Concepts) 
              designed to help traders understand different approaches to risk management and capital discipline.
            </p>
            <p>
              Our platform focuses on <span className="text-white font-bold">mathematical probability theory</span> and uses hypothetical 
              examples to explain complex trading concepts in an accessible way.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Core <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Education First",
              description: "We prioritize teaching concepts over trading signals",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Users,
              title: "Knowledge Sharing",
              description: "Building a learning ecosystem for all traders",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: Shield,
              title: "Transparency",
              description: "Clear communication about our educational approach",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Award,
              title: "Mathematical Rigor",
              description: "Probability-based concepts backed by mathematics",
              color: "from-orange-500 to-red-500"
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What Makes Us <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Different</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Concept-Focused Learning",
              description: "We teach theoretical frameworks and probability concepts, not trading tips or signals."
            },
            {
              icon: BookOpen,
              title: "Academic Approach",
              description: "All content is presented using mathematical theory and hypothetical examples for educational purposes."
            },
            {
              icon: Shield,
              title: "No False Promises",
              description: "We never promise profits, returns, or guaranteed results. We only provide educational knowledge."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <Icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Educational Commitment */}
      <section className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Educational Commitment
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
            <p>
              AccuraX is designed <span className="font-bold text-white">exclusively for educational and learning purposes</span>.
            </p>
            <p>
              We do <span className="font-bold text-red-400">not</span> provide trading services, investment advice, 
              trading signals, or profit-based programs.
            </p>
            <p>
              All concepts are hypothetical and explained using mathematical probability theory for understanding purposes only.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-white pt-6">
              Learn. Understand. Grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Button } from "../ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function NewHero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tagline */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 mb-8">
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 10,000+ Active Traders</span>
            </div>
            
            <div className="space-y-6">
              {/* First Line */}
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white italic">
                  We teach <span className="text-blue-400 not-italic">concepts</span>, not trades.
                </p>
              </div>
              
              {/* Second Line */}
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-6 rounded-xl border-l-4 border-purple-500">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white italic">
                  We sell <span className="text-purple-400 not-italic">knowledge</span>, not profits.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkyODgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Trading Charts and Analytics"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
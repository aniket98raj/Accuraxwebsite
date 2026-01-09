import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
              <TrendingUp className="w-4 h-4" />
              <span>AI-Powered Trading Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Trade Smarter with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AccuraX
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Harness the power of advanced algorithms and AI-driven insights to maximize your trading potential. 
              Execute strategies with precision and confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-gray-700 text-gray-300 hover:bg-white/5">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmclMjBjaGFydHN8ZW58MXx8fHwxNzY3ODYxNjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Trading Dashboard"
                className="rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Secure</div>
                    <div className="font-bold text-white">Bank-level Security</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-black/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Fast</div>
                    <div className="font-bold text-white">Lightning Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
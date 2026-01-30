import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Trading Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "AccuraX has completely transformed my understanding of trading concepts. The educational framework is incredibly comprehensive, and I've gained valuable knowledge about risk management and probability-based strategies.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Learning Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "The platform's approach to teaching capital discipline and risk structure is unmatched. AccuraX focuses on concepts and education, which is exactly what I was looking for.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Educational Subscriber",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "What sets AccuraX apart is their commitment to education over everything else. The hypothetical examples and probability theory lessons have been invaluable for my learning journey.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our community has to say about their success with AccuraX
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-black border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-800"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
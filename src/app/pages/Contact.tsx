import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" className="bg-black border-gray-700 text-white focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="bg-black border-gray-700 text-white focus:border-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" className="bg-black border-gray-700 text-white focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-black border-gray-700 text-white focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input placeholder="How can we help you?" className="bg-black border-gray-700 text-white focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={6}
                  className="bg-black border-gray-700 text-white focus:border-blue-500"
                />
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwfGVufDF8fHx8MTc2Nzk1Njk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Support Team"
                className="rounded-2xl shadow-2xl mb-8 ring-1 ring-white/10"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">support@accurax.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Call Us</h3>
                  <p className="text-gray-400">+91 7366057969</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9am - 6pm IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
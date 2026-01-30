import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoIcon } from "./Logo";

export function Footer() {
  return (
    <footer id="about" className="bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <LogoIcon className="w-9 h-9 transition-transform group-hover:scale-105" />
              <span className="text-xl font-bold text-white">AccuraX</span>
            </Link>
            <p className="text-blue-300/70 text-sm italic font-medium mt-3 leading-relaxed">
              We teach concepts, not trades. We sell knowledge, not profits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Educational Concepts */}
          <div>
            <h3 className="text-white font-bold mb-4">Educational Concepts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/educational/godzilla" className="hover:text-white transition-colors block">
                  <span className="text-gray-400">Godzilla -</span> <span className="text-pink-400">Risk Structure</span>
                </Link>
              </li>
              <li>
                <Link to="/educational/wolf" className="hover:text-white transition-colors block">
                  <span className="text-gray-400">Wolf -</span> <span className="text-orange-400">Discipline Control</span>
                </Link>
              </li>
              <li>
                <Link to="/educational/turtle" className="hover:text-white transition-colors block">
                  <span className="text-gray-400">Turtle -</span> <span className="text-green-400">Capital Preservation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pricing" className="hover:text-white transition-colors">Subscription</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:support@accurax.in" className="hover:text-white transition-colors">
                  support@accurax.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+917366057969" className="hover:text-white transition-colors">
                  +91 7366057969
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 AccuraX. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
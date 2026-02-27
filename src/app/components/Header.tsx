import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoIcon } from "./Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [educationalDropdownOpen, setEducationalDropdownOpen] = useState(false);
  const [mobileEducationalOpen, setMobileEducationalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const educationalLinks = [
    { name: "Godzilla Concept", path: "/educational/godzilla" },
    { name: "Wolf Concept", path: "/educational/wolf" },
    { name: "Turtle Concept", path: "/educational/turtle" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEducationalDropdownOpen(false);
      }
    };

    if (educationalDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [educationalDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <LogoIcon className="w-8 h-8 sm:w-9 sm:h-9 transition-transform group-hover:scale-105" />
              <span className="text-lg sm:text-xl font-bold text-white">AccuraX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              About Us
            </Link>

            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Services
            </Link>

            {/* Educational Concepts Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() => setEducationalDropdownOpen(!educationalDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/educational') 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Educational Concepts
              </button>

              {/* Dropdown Menu */}
              {educationalDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 shadow-lg rounded-md overflow-hidden">
                  {educationalLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 text-sm border-b border-gray-800 last:border-b-0 transition-colors ${
                        isActive(link.path)
                          ? 'text-blue-400 bg-gray-900'
                          : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                      }`}
                      onClick={() => setEducationalDropdownOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Subscription
            </Link>
            <Link 
              to="/disclaimer" 
              className={`transition-colors ${isActive('/disclaimer') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Disclaimer
            </Link>
            <Link 
              to="/risk-disclosure" 
              className={`transition-colors ${isActive('/risk-disclosure') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Risk Disclosure
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-3">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link 
                to="/services" 
                className={`transition-colors ${isActive('/services') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>

              {/* Mobile Educational Concepts */}
              <div>
                <button
                  className={`flex items-center justify-between w-full transition-colors ${
                    location.pathname.startsWith('/educational')
                      ? 'text-blue-400 font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setMobileEducationalOpen(!mobileEducationalOpen)}
                >
                  Educational Concepts
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileEducationalOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileEducationalOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {educationalLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`transition-colors text-sm ${
                          isActive(link.path)
                            ? 'text-blue-400 font-medium'
                            : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/pricing" 
                className={`transition-colors ${isActive('/pricing') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Subscription
              </Link>
              <Link 
                to="/disclaimer" 
                className={`transition-colors ${isActive('/disclaimer') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Disclaimer
              </Link>
              <Link 
                to="/risk-disclosure" 
                className={`transition-colors ${isActive('/risk-disclosure') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Risk Disclosure
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-gray-800">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
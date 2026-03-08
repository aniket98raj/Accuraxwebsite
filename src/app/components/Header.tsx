import { Button } from "./ui/button";
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoIcon } from "./Logo";
import { useAuth } from "../context/AuthContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [educationalDropdownOpen, setEducationalDropdownOpen] = useState(false);
  const [mobileEducationalOpen, setMobileEducationalOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, profile, signOut } = useAuth();

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
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
    navigate("/");
  };

  const initials =
    profile?.full_name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) ||
    user?.email?.[0]?.toUpperCase() ||
    "U";

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
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-all"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{initials}</span>
                  </div>
                  <span className="text-gray-300 text-sm max-w-[100px] truncate">
                    {profile?.full_name || user.email}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-black border border-gray-700 shadow-xl rounded-xl overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-800">
                      <p className="text-white text-sm font-medium truncate">{profile?.full_name || "User"}</p>
                      <p className="text-gray-500 text-xs truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/user-dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      My Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-400 hover:bg-gray-900 transition-colors border-t border-gray-800"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button className="bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
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
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/user-dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-gray-300 hover:text-white py-2 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      My Dashboard
                    </Link>
                    <button
                      onClick={() => { handleSignOut(); setMobileMenuOpen(false); }}
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 py-2 transition-colors w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
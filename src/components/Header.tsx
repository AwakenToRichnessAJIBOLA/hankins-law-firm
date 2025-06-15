
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// Removed: import { Gavel } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 teal-gradient rounded-full flex items-center justify-center shadow group-hover:scale-105 transition-transform">
              {/* Elegant Law Themed Logo SVG */}
              <svg
                viewBox="0 0 44 44"
                fill="none"
                className="w-8 h-8"
                aria-label="Hankins Law Firm logo"
              >
                <circle cx="22" cy="22" r="21" fill="url(#paint0_linear)" stroke="white" strokeWidth="2"/>
                <g>
                  <path d="M22 30V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 37c0-6.627 4.253-12 6-12s6 5.373 6 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 19h16l-8 8-8-8z" fill="white" fillOpacity=".18" />
                  <ellipse cx="22" cy="13.5" rx="4" ry="2.5" fill="white" fillOpacity=".8"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#14b8a6"/>
                    <stop offset="0.6" stopColor="#0ea5e9"/>
                    <stop offset="1" stopColor="#99f6e4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl text-teal-800 group-hover:text-teal-600 transition-colors">
                Hankins Law Firm
              </h1>
              <p className="text-xs text-teal-600 -mt-1">Fighting for Justice</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/practice-areas"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              Practice Areas
            </Link>
            <Link
              to="/testimonials"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/attorneys"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              Attorneys
            </Link>
            <Link
              to="/blog"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="hover-scale">
              <Button className="teal-gradient text-white font-semibold hover:opacity-90">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-teal-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-teal-800 hover:text-teal-600 font-medium">Home</Link>
              <Link to="/about" className="text-teal-800 hover:text-teal-600 font-medium">About Us</Link>
              <Link to="/practice-areas" className="text-teal-800 hover:text-teal-600 font-medium">Practice Areas</Link>
              <Link to="/testimonials" className="text-teal-800 hover:text-teal-600 font-medium">Testimonials</Link>
              <Link to="/attorneys" className="text-teal-800 hover:text-teal-600 font-medium">Attorneys</Link>
              <Link to="/blog" className="text-teal-800 hover:text-teal-600 font-medium">Resources</Link>
              <Link to="/contact" className="text-teal-800 hover:text-teal-600 font-medium">Contact</Link>
              <Link to="/contact" className="hover-scale">
                <Button className="teal-gradient text-white font-semibold w-full mt-4 shadow">
                  Free Consultation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}lovable-uploads/c8591f01-479e-4e11-b2bd-a98676f503fa.png`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src={logoSrc}
                alt="Hankins Law Firm logo"
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 object-contain group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="min-w-0 flex-shrink">
                <h1 className="font-display font-bold text-xs sm:text-sm md:text-lg lg:text-2xl text-teal-800 group-hover:text-teal-600 transition-colors leading-tight whitespace-nowrap truncate">
                  Hankins Law Firm
                </h1>
                <p className="text-xs sm:text-xs md:text-sm text-teal-600 leading-tight whitespace-nowrap truncate hidden xs:block">
                  Fighting for Justice
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              to="/practice-areas"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              Practice Areas
            </Link>
            <Link
              to="/testimonials"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              Testimonials
            </Link>
            <Link
              to="/attorneys"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              Attorneys
            </Link>
            <Link
              to="/blog"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-teal-800 hover:text-teal-600 font-medium transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact" className="hover-scale">
              <Button className="teal-gradient text-white font-semibold hover:opacity-90 whitespace-nowrap">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-teal-800 flex-shrink-0 p-1"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

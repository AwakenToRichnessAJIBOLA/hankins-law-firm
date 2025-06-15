
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
              <Gavel className="h-6 w-6 text-navy-900" />
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl text-navy-900">
                Hankins Law Firm
              </h1>
              <p className="text-xs text-navy-600 -mt-1">Fighting for Justice</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/practice-areas"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              Practice Areas
            </Link>
            <Link
              to="/testimonials"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/attorneys"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              Attorneys
            </Link>
            <Link
              to="/blog"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-navy-700 hover:text-gold-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="gold-gradient text-navy-900 font-semibold hover:opacity-90">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-navy-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-navy-700 hover:text-gold-600 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-navy-700 hover:text-gold-600 font-medium">
                About Us
              </Link>
              <Link to="/practice-areas" className="text-navy-700 hover:text-gold-600 font-medium">
                Practice Areas
              </Link>
              <Link to="/testimonials" className="text-navy-700 hover:text-gold-600 font-medium">
                Testimonials
              </Link>
              <Link to="/attorneys" className="text-navy-700 hover:text-gold-600 font-medium">
                Attorneys
              </Link>
              <Link to="/blog" className="text-navy-700 hover:text-gold-600 font-medium">
                Resources
              </Link>
              <Link to="/contact" className="text-navy-700 hover:text-gold-600 font-medium">
                Contact
              </Link>
              <Button className="gold-gradient text-navy-900 font-semibold w-full mt-4">
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

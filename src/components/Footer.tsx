
import { Link } from "react-router-dom";
import { linkedin, facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Hankins Law Firm</h3>
            <p className="text-gray-300 mb-4">
              Fighting for Justice. Protecting Your Rights.
            </p>
            <p className="text-gray-300 text-sm">
              Licensed to practice in all state courts
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/attorneys" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Justice Street</p>
              <p>Legal District, LD 12345</p>
              <p>Phone: (555) 123-LAWS</p>
              <p>Email: info@hankinslaw.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Stay updated with legal insights and firm news.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="gold-gradient text-navy-900 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-gold-400">
                <linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-gold-400">
                <facebook className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-center md:text-right text-gray-300 text-sm">
              <p>&copy; 2024 Hankins Law Firm. All rights reserved.</p>
              <p className="mt-1">
                <Link to="/privacy" className="hover:text-gold-400">Privacy Policy</Link> |{" "}
                <Link to="/disclaimer" className="hover:text-gold-400">Legal Disclaimer</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

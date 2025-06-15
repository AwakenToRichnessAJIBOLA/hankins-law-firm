
import { Link } from "react-router-dom";
import { Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="blue-gradient text-white">
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
                <Link to="/about" className="text-gray-300 hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-300 hover:text-white/80 transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/attorneys" className="text-gray-300 hover:text-white/80 transition-colors">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white/80 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Barr. John Hankins, ESQ</p>
              <p>Hankins Law Firm</p>
              <p>Phone: +44 7418 318124</p>
              <p>Email: JohnHankins@consultant.com</p>
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
              <Button className="teal-gradient text-white font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white/80">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white/80">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-center md:text-right text-gray-300 text-sm">
              <p>&copy; 2024 Hankins Law Firm. All rights reserved.</p>
              <p className="mt-1">
                <Link to="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link> |{" "}
                <Link to="/disclaimer" className="hover:text-white/80 transition-colors">Legal Disclaimer</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

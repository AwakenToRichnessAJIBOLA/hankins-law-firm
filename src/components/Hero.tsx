
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-800/60 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Fighting for Justice.
          <span className="block text-gold-400">Protecting Your Rights.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          With over 20 years of experience, Hankins Law Firm delivers powerful legal solutions
          with integrity, compassion, and unwavering dedication to our clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="gold-gradient text-navy-900 font-bold text-lg px-8 py-4 hover:opacity-90">
              Schedule Your Free Consultation
            </Button>
          </Link>
          <Link to="/about">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4"
            >
              Learn About Our Firm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

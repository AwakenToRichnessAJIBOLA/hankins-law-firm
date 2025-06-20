
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[90vh] flex items-center justify-center animate-fade-in">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 teal-gradient/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-3 sm:px-4 animate-slide-up">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-xl">
          Fighting for Justice.
          <span className="block text-teal-300">Protecting Your Rights.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-teal-50/80 max-w-2xl mx-auto">
          With over 20 years of experience, Hankins Law Firm delivers powerful legal solutions
          with integrity, compassion, and unwavering dedication to our clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/contact" className="hover-scale">
            <Button size="lg" className="teal-gradient text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-md hover:opacity-90 w-full sm:w-auto">
              Schedule Your Free Consultation
            </Button>
          </Link>
          <Link to="/about" className="hover-scale">
            <Button
              size="lg"
              className="teal-gradient text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-md hover:opacity-90 w-full sm:w-auto"
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

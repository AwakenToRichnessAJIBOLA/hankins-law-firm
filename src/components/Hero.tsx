
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:h-[90vh] flex items-center justify-center animate-fade-in">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 teal-gradient/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 animate-slide-up">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-xl">
          Fighting for Justice.
          <span className="block text-teal-300">Protecting Your Rights.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-teal-50/80 max-w-2xl mx-auto">
          With over 20 years of experience, Hankins Law Firm delivers powerful legal solutions
          with integrity, compassion, and unwavering dedication to our clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hover-scale">
            <Button size="lg" className="teal-gradient text-white font-bold text-lg px-8 py-4 shadow-md hover:opacity-90">
              Schedule Your Free Consultation
            </Button>
          </Link>
          <Link to="/about" className="hover-scale">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 shadow border-white bg-white/10 hover:bg-white/20"
            >
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold">
                Learn About Our Firm
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 teal-gradient text-white animate-fade-in">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up">
          Ready to Get Started?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
          Don't wait to protect your rights. Contact Hankins Law Firm today for a free consultation
          and let our experienced attorneys guide you through your legal challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/contact" className="hover-scale">
            <Button size="lg" className="teal-gradient text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:opacity-90 w-full sm:w-auto">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

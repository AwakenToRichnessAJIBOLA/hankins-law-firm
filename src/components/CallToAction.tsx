
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 premium-gradient text-white animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold mb-6 animate-slide-up">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
          Don't wait to protect your rights. Contact Hankins Law Firm today for a free consultation
          and let our experienced attorneys guide you through your legal challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hover-scale">
            <Button size="lg" className="blue-gradient text-white font-bold text-lg px-8 py-4 shadow-lg hover:opacity-90">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

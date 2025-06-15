
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 premium-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Don't wait to protect your rights. Contact Hankins Law Firm today for a free consultation
          and let our experienced attorneys guide you through your legal challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="gold-gradient text-navy-900 font-bold text-lg px-8 py-4">
              Schedule Free Consultation
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4"
          >
            Call (555) 123-LAWS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

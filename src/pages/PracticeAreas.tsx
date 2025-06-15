
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const practiceAreas = [
  {
    title: "Personal Injury",
    description: "When you've been injured due to someone else's negligence, you need an advocate who will fight for the compensation you deserve.",
    details: [
      "Motor vehicle accidents",
      "Slip and fall cases",
      "Medical malpractice",
      "Product liability",
      "Wrongful death claims"
    ],
    icon: "🚗"
  },
  {
    title: "Family Law",
    description: "Family legal matters require sensitivity and expertise. We guide families through difficult transitions with compassion.",
    details: [
      "Divorce proceedings",
      "Child custody and support",
      "Spousal support/alimony",
      "Property division",
      "Adoption services"
    ],
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Estate Planning & Wills",
    description: "Protect your legacy and ensure your loved ones are provided for with comprehensive estate planning services.",
    details: [
      "Will drafting and execution",
      "Trust creation and management",
      "Power of attorney documents",
      "Healthcare directives",
      "Probate administration"
    ],
    icon: "📋"
  },
  {
    title: "Civil Litigation",
    description: "When disputes arise, our experienced trial attorneys are ready to represent your interests in court.",
    details: [
      "Contract disputes",
      "Business litigation",
      "Employment law",
      "Real estate disputes",
      "Insurance claims"
    ],
    icon: "🏛️"
  }
];

const PracticeAreas = () => {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 premium-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl font-bold mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Hankins Law Firm provides comprehensive legal services across multiple practice areas,
              ensuring expert representation for all your legal needs.
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {practiceAreas.map((area, index) => (
                <Card key={index} className="premium-shadow hover-lift bg-white">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{area.icon}</div>
                      <CardTitle className="text-2xl font-bold text-navy-900">
                        {area.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600 text-lg">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-navy-900 mb-3">Our Services Include:</h4>
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 gold-gradient rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't navigate legal challenges alone. Our experienced attorneys are here
              to provide the guidance and representation you need.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gold-gradient text-navy-900 font-bold text-lg px-8 py-4">
                Schedule Your Free Consultation Today
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PracticeAreas;

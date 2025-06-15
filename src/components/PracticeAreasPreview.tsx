
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const practiceAreas = [
  {
    title: "Personal Injury",
    description: "Comprehensive representation for accident victims, ensuring you receive the compensation you deserve.",
    icon: "⚖️"
  },
  {
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, and other family legal matters.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Estate Planning",
    description: "Protect your legacy with comprehensive wills, trusts, and estate planning services.",
    icon: "📋"
  },
  {
    title: "Civil Litigation",
    description: "Experienced trial attorneys ready to fight for your rights in court.",
    icon: "🏛️"
  }
];

const PracticeAreasPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {practiceAreas.map((area) => (
            <Card key={area.title} className="hover-lift premium-shadow bg-white">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{area.icon}</div>
                <CardTitle className="text-xl font-bold text-navy-900">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/practice-areas">
            <Button className="bg-navy-700 hover:bg-navy-800 text-white font-semibold px-8 py-3">
              View All Practice Areas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasPreview;

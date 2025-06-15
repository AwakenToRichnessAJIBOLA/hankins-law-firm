
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
    <section className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-teal-800 mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {practiceAreas.map((area, i) => (
            <div key={area.title} className="hover-lift transition-shadow duration-200">
              <Card className="glass-effect border-teal-100 shadow-lg animate-fade-in" style={{ animationDelay: `${0.07 * i}s`, animationFillMode:'both' }}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <CardTitle className="text-xl font-bold text-teal-800">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-700 text-center">{area.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/practice-areas" className="hover-scale">
            <Button className="teal-gradient text-white font-semibold px-8 py-3 shadow-lg">
              View All Practice Areas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasPreview;

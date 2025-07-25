
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
          <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {practiceAreas.map((area, i) => (
            <div key={area.title} className="hover-lift transition-shadow duration-200 h-full">
              <Card 
                className="bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 border-transparent shadow-lg animate-fade-in flex flex-col h-full min-h-[320px]"
                style={{ animationDelay: `${0.07 * i}s`, animationFillMode:'both' }}
              >
                <CardHeader className="text-center flex-grow">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <CardTitle className="text-xl font-bold text-white drop-shadow">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center flex-grow">
                  <p className="text-white/90 text-center drop-shadow">{area.description}</p>
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

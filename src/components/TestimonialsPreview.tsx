
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sandra T.",
    text: "Hankins Law Firm gave me hope when I had none. They fought hard and treated me like family. Forever grateful.",
    case: "Personal Injury"
  },
  {
    name: "Michael R.",
    text: "Professional, compassionate, and incredibly knowledgeable. They guided me through a difficult divorce with care.",
    case: "Family Law"
  },
  {
    name: "Emma L.",
    text: "The estate planning team was thorough and patient, ensuring my family's future is secure.",
    case: "Estate Planning"
  }
];

const TestimonialsPreview = () => {
  return (
    <section className="py-20 bg-teal-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with Hankins Law Firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 border-transparent premium-shadow animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode:'both' }}
            >
              <CardContent className="p-8">
                <div className="text-white text-4xl mb-4">"</div>
                <p className="text-white mb-6 italic text-lg drop-shadow">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/80">{testimonial.case}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/testimonials" className="hover-scale">
            <Button className="teal-gradient text-white font-semibold px-8 py-3 shadow">
              Read More Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;


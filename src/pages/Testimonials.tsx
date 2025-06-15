import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const testimonials = [
  {
    name: "Sandra T.",
    case: "Personal Injury",
    text: "Hankins Law Firm gave me hope when I had none. After my car accident, I was overwhelmed by medical bills and insurance companies. James and his team fought hard for me and treated me like family throughout the entire process. Forever grateful.",
    rating: 5
  },
  {
    name: "Michael R.",
    case: "Family Law",
    text: "Going through a divorce was the most difficult time in my life. The attorneys at Hankins Law Firm were professional, compassionate, and incredibly knowledgeable. They guided me through every step with care and secured a fair outcome for me and my children.",
    rating: 5
  },
  {
    name: "Emma L.",
    case: "Estate Planning",
    text: "The estate planning team was thorough and patient, answering all my questions and ensuring my family's future is secure. They made the complex process simple and gave me peace of mind knowing my affairs are in order.",
    rating: 5
  },
  {
    name: "Robert K.",
    case: "Civil Litigation",
    text: "When my business partner tried to take advantage of our contract, Hankins Law Firm stepped in and fought for my rights. Their expertise in civil litigation saved my business and my reputation. I couldn't have asked for better representation.",
    rating: 5
  },
  {
    name: "Maria S.",
    case: "Personal Injury",
    text: "After my slip and fall accident, I wasn't sure if I had a case. The team at Hankins Law Firm took the time to investigate thoroughly and secured a settlement that covered all my medical expenses and lost wages. They truly care about their clients.",
    rating: 5
  },
  {
    name: "David P.",
    case: "Family Law",
    text: "Child custody cases are emotionally draining, but having Hankins Law Firm by my side made all the difference. They understood what was at stake and fought tirelessly to ensure I could remain an active part of my children's lives.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 premium-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their experience with Hankins Law Firm.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="premium-shadow hover-lift bg-white">
                  <CardContent className="p-8">
                    <div className="text-gold-600 text-4xl mb-4">"</div>
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                    
                    {/* Star Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold-500 text-xl">★</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-navy-700 font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.case}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 premium-gradient text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gold-gradient bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-gray-300">Cases Won</p>
              </div>
              <div>
                <div className="text-4xl font-bold gold-gradient bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold gold-gradient bg-clip-text text-transparent mb-2">
                  $50M+
                </div>
                <p className="text-gray-300">Recovered for Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold gold-gradient bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Testimonials;

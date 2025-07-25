
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const attorneys = [
  {
    name: "John Hankins",
    title: "Founding Partner",
    image: import.meta.env.BASE_URL + "lovable-uploads/6ff312ee-8727-42f0-807f-02342b900471.png", // Founder image
    specialties: ["Personal Injury", "Civil Litigation", "Trial Advocacy"],
    education: ["Harvard Law School, J.D.", "Yale University, B.A."],
    barAdmissions: ["State Bar (2003)", "Federal Court (2004)"],
    bio: "John founded Hankins Law Firm with a commitment to providing exceptional legal representation. With over 20 years of experience, he has successfully represented hundreds of clients in complex litigation matters."
  },
  {
    name: "Sarah Mitchell",
    title: "Senior Associate",
    image: import.meta.env.BASE_URL + "lovable-uploads/d46e56ac-58a0-411d-9310-40119f2dee73.png", // Solo female image
    specialties: ["Family Law", "Divorce", "Child Custody"],
    education: ["Stanford Law School, J.D.", "UC Berkeley, B.A."],
    barAdmissions: ["State Bar (2010)", "Family Court (2011)"],
    bio: "Sarah specializes in family law matters and is known for her compassionate approach to sensitive family issues. She has helped numerous families navigate difficult transitions with dignity and care."
  },
  {
    name: "Michael Rodriguez",
    title: "Associate Attorney",
    image: import.meta.env.BASE_URL + "lovable-uploads/f7f6a73d-beb5-4db7-96e9-0ee16464e0d7.png", // Provided male professional image
    specialties: ["Estate Planning", "Wills & Trusts", "Probate"],
    education: ["Georgetown Law, J.D.", "Duke University, B.A."],
    barAdmissions: ["State Bar (2015)", "Probate Court (2016)"],
    bio: "Michael focuses on estate planning and helps clients protect their legacy. His attention to detail and thorough approach ensures that every client's estate plan is comprehensive and effective."
  }
];

const Attorneys = () => {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 premium-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl font-bold mb-6">
              Our Attorneys
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Meet the experienced legal professionals who are dedicated to
              fighting for your rights and protecting your interests.
            </p>
          </div>
        </section>

        {/* Attorneys Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {attorneys.map((attorney, index) => (
                <Card key={index} className="premium-shadow hover-lift bg-white max-w-6xl mx-auto">
                  <CardContent className="p-12">
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                        <img
                          src={attorney.image}
                          alt={attorney.name}
                          className="rounded-lg w-full max-w-md mx-auto"
                        />
                      </div>
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">
                            {attorney.name}
                          </h2>
                          <p className="text-gold-600 font-semibold text-lg mb-4">
                            {attorney.title}
                          </p>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {attorney.bio}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-navy-900 mb-3">
                              Areas of Practice
                            </h4>
                            <ul className="space-y-1">
                              {attorney.specialties.map((specialty, idx) => (
                                <li key={idx} className="flex items-center text-gray-600">
                                  <div className="w-2 h-2 gold-gradient rounded-full mr-3"></div>
                                  {specialty}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-navy-900 mb-3">Education</h4>
                            <ul className="space-y-1">
                              {attorney.education.map((edu, idx) => (
                                <li key={idx} className="text-gray-600">{edu}</li>
                              ))}
                            </ul>
                            
                            <h4 className="font-semibold text-navy-900 mb-3 mt-4">
                              Bar Admissions
                            </h4>
                            <ul className="space-y-1">
                              {attorney.barAdmissions.map((bar, idx) => (
                                <li key={idx} className="text-gray-600">{bar}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
                Why Choose Our Team?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our attorneys bring together decades of combined experience,
                unwavering dedication, and a proven track record of success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="premium-shadow hover-lift bg-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    Elite Education
                  </h3>
                  <p className="text-gray-600">
                    Our attorneys graduated from top-tier law schools and bring
                    exceptional legal knowledge to every case.
                  </p>
                </CardContent>
              </Card>

              <Card className="premium-shadow hover-lift bg-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    Proven Results
                  </h3>
                  <p className="text-gray-600">
                    With hundreds of successful cases and millions recovered
                    for clients, our track record speaks for itself.
                  </p>
                </CardContent>
              </Card>

              <Card className="premium-shadow hover-lift bg-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    Personal Attention
                  </h3>
                  <p className="text-gray-600">
                    We believe every client deserves personalized attention
                    and direct access to their attorney.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Attorneys;


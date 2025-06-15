
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-5xl font-bold text-navy-900 mb-6">
                  About Hankins Law Firm
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  At Hankins Law Firm, we are committed to delivering powerful legal solutions
                  with integrity, compassion, and experience. For over two decades, we have
                  been fighting for justice and protecting the rights of our clients.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 gold-gradient rounded-full mr-4"></div>
                    <span className="text-navy-700">Over 20 years of legal experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 gold-gradient rounded-full mr-4"></div>
                    <span className="text-navy-700">Licensed in all state courts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 gold-gradient rounded-full mr-4"></div>
                    <span className="text-navy-700">Hundreds of successful cases</span>
                  </div>
                </div>
              </div>
              <div className="lg:text-right">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Attorney James Hankins"
                  className="rounded-lg premium-shadow w-full max-w-md mx-auto lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="premium-shadow">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="James Hankins, Founding Partner"
                        className="rounded-lg w-full"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                        James Hankins, Esq.
                      </h2>
                      <p className="text-gold-600 font-semibold mb-4">Founding Partner</p>
                      <p className="text-gray-600 mb-6">
                        James Hankins founded Hankins Law Firm in 2004 with a simple mission:
                        to provide exceptional legal representation while treating every client
                        with dignity and respect. A graduate of Harvard Law School, James has
                        built a reputation as a fierce advocate for his clients' rights.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-2">Education</h4>
                          <p className="text-gray-600">Harvard Law School, J.D.</p>
                          <p className="text-gray-600">Yale University, B.A.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-2">Bar Admissions</h4>
                          <p className="text-gray-600">State Bar (2003)</p>
                          <p className="text-gray-600">Federal Court (2004)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-navy-900 text-center mb-16">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="premium-shadow hover-lift bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    Justice
                  </h3>
                  <p className="text-gray-600">
                    We fight tirelessly for what's right, ensuring every client receives
                    fair treatment under the law.
                  </p>
                </CardContent>
              </Card>
              <Card className="premium-shadow hover-lift bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    Integrity
                  </h3>
                  <p className="text-gray-600">
                    Our reputation is built on honesty, transparency, and ethical
                    practice in all our dealings.
                  </p>
                </CardContent>
              </Card>
              <Card className="premium-shadow hover-lift bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                    Compassion
                  </h3>
                  <p className="text-gray-600">
                    We understand that legal issues are personal, and we treat
                    every client with empathy and care.
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

export default About;

import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 premium-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Ready to discuss your legal needs? We're here to help.
              Contact us today for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-8">
                  <Card className="premium-shadow bg-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-navy-900 mb-4">Office Location</h3>
                      <p className="text-gray-600">
                        Hankins Law Firm<br />
                        Lincoln’s Inn, 12 Stone Buildings, London WC2A 3TH, United Kingdom
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="premium-shadow bg-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-navy-900 mb-4">Contact Information</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>
                          <strong>Name:</strong> Barr. John Hankins, ESQ
                        </p>
                        <p>
                          <strong>Phone:</strong> +44 7418 318124
                        </p>
                        <p>
                          <strong>Email:</strong> JohnHankins@consultant.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="premium-shadow bg-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-navy-900 mb-4">Business Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="premium-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-navy-900">
                      Schedule Your Free Consultation
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-navy-900 font-semibold">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-navy-900 font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-navy-900 font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-navy-900 font-semibold">
                          Tell us about your legal needs *
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent"
                          placeholder="Please describe your legal situation..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full gold-gradient text-navy-900 font-bold text-lg py-3"
                      >
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        All consultations are confidential and protected by attorney-client privilege.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - REMOVED */}
        {/* 
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                Interactive Map - 123 Justice Street, Legal District, LD 12345
              </p>
            </div>
          </div>
        </section>
        */}
      </div>
    </Layout>
  );
};

export default Contact;

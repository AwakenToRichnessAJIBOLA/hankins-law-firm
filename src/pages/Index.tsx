
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import PracticeAreasPreview from "@/components/PracticeAreasPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PracticeAreasPreview />
      <TestimonialsPreview />
      <CallToAction />
    </Layout>
  );
};

export default Index;

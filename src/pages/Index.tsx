import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import DropshippingSection from "@/components/DropshippingSection";
import ContentSection from "@/components/ContentSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import AudienceSection from "@/components/AudienceSection";
import WorkshopSection from "@/components/WorkshopSection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <DropshippingSection />
      <ContentSection />
      <DifferentialsSection />
      <AudienceSection />
      <WorkshopSection />
      <OfferSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;

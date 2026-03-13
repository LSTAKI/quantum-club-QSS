import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SponsorsSection from "@/components/SponsorsSection";
import BelagaviSection from "@/components/BelagaviSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SponsorsSection />
      <BelagaviSection />
      <VenueSection />
      <Footer />
    </div>
  );
};

export default Index;

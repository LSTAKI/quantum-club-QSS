import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ExploreGrid from "@/components/ExploreGrid";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ExploreGrid />
      <VenueSection />
      <Footer />
    </div>
  );
};

export default Index;

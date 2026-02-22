import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeakersSection from "@/components/SpeakersSection";

const Speakers = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <SpeakersSection />
    </div>
    <Footer />
  </div>
);

export default Speakers;

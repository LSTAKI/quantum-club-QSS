import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

const Team = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <TeamSection />
    </div>
    <Footer />
  </div>
);

export default Team;

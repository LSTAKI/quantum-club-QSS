import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import GlowCursor from "@/components/GlowCursor";
import { FloatingOrb, PulsingDot } from "@/components/TechEffects";
import { Award } from "lucide-react";

const committeeMembers = [
  { name: "Dr. Prabhu", role: "IITD" },
  { name: "Dr. M K Rabinal", role: "Former chairperson Dept of Physics KUD" },
  { name: "Dr. Basavaraj Angadi", role: "Professor BU" },
  { name: "Dr. Udaykumar V Kadhke", role: "Professor SKU Ballari" },
  { name: "Dr. Ajith Padnya", role: "Special Officer, VTU VRIF TCOE" },
  { name: "Dr. Dinesh Rangappa", role: "P. G. Coordinator, VIAT Muddenahalli" },
  { name: "Dr. Nagarjuna Swamy", role: "Regional Director, R.O. Mysore" },
  { name: "Dr. H. V. Sudarshan Reddy", role: "Regional Director, R.O. Bangalore" },
  { name: "Prof. Nagarajappa", role: "Principal, UBDTCE, Davangere" },
  { name: "Dr. R. R. Malagi", role: "Principal, VTU CEC, Gokak" },
  { name: "Dr. S. B. Dandagi", role: "Regional Director, R.O. Belagavi" },
  { name: "Dr. Meghna Kulkarni", role: "Chairperson Dept. of E&CE" },
  { name: "Dr. Prahlad P Rathod", role: "Chairperson Dept. of MBA" },
  { name: "Dr. Nagraj S. Patil", role: "Chairperson Dept. of Civil Engg." },
  { name: "Dr. Babureddy", role: "Chairperson Dept. of Mech. Engg." },
  { name: "Dr. Mahantesh N. Birje", role: "Professor in Dept. of CS&E." },
  { name: "Dr. Roopa J", role: "Technology Manager-Post-Doc [CeNSE, IISc, Bengaluru]. Asst.Professor, RV College of Engineering, Bengaluru" },
];

const AdvisoryCommittee = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent/30 selection:text-white">
      <GlowCursor color="218, 165, 32" />
      <Navbar />

      <main className="flex-grow pt-24 pb-20 relative overflow-hidden">
        <FloatingOrb size={300} color="accent" position="top-left" delay={0} />
        <FloatingOrb size={250} color="gold" position="bottom-right" delay={2} />
        
        <div className="container relative" style={{ zIndex: 5 }}>
          <div className="text-center mb-16 mt-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-2 flex items-center justify-center gap-2"
            >
              <PulsingDot color="accent" />
              {"// Guiding the Vision"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Advisory Committee
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Meet the esteemed visionaries and industry leaders guiding the VTU Quantum Club towards excellence.
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {committeeMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, borderColor: "hsl(var(--accent))" }}
                className="group rounded-lg p-6 border border-border bg-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.05), transparent 70%)",
                  }}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-2 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvisoryCommittee;

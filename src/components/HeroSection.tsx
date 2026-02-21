import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <img
      src={heroBg}
      alt="Quantum lab"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div
      className="absolute inset-0"
      style={{ background: "var(--hero-overlay)" }}
    />

    {/* Content */}
    <div className="relative z-10 container text-center text-navy-foreground">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-gold mb-4"
      >
        VTU Quantum Club
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
      >
        Quantum Student Summit
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-navy-foreground/80"
      >
        Exploring the Frontiers of Quantum Science — A student-led initiative by VTU Quantum Club fostering undergraduate research and collaboration.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
      >
        <div className="flex items-center gap-2 text-navy-foreground/70">
          <CalendarDays size={18} className="text-gold" />
          <span className="text-sm font-medium">16 – 17 December 2025</span>
        </div>
        <div className="hidden sm:block w-px h-5 bg-navy-foreground/30" />
        <div className="flex items-center gap-2 text-navy-foreground/70">
          <MapPin size={18} className="text-gold" />
          <span className="text-sm font-medium">Visvesvaraya Technological University</span>
        </div>
      </motion.div>

    </div>
  </section>
);

export default HeroSection;

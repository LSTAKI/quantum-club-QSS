import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "@/assets/hero-quantum.mp4";

const HEADLINES = [
  "Quantum Student Summit",
  "Explore. Innovate. Discover.",
  "The Future is Quantum",
  "Where Science Meets Ambition",
];

const HeroSection = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsla(213, 80%, 8%, 0.75) 0%, hsla(210, 70%, 14%, 0.6) 40%, hsla(215, 65%, 18%, 0.65) 70%, hsla(213, 80%, 6%, 0.8) 100%)",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, hsla(213, 80%, 6%, 0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-6"
          style={{ color: "hsla(210, 80%, 80%, 0.8)" }}
        >
          VTU Quantum Club
        </motion.p>

        <div className="h-[4.5rem] md:h-[6rem] lg:h-[7.5rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              {HEADLINES[headlineIdx]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg max-w-xl mx-auto mt-6 mb-10"
          style={{ color: "hsla(210, 30%, 85%, 0.7)" }}
        >
          16 – 17 December 2025 · Visvesvaraya Technological University
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="animate-bounce"
        >
          <span style={{ color: "hsla(210, 50%, 75%, 0.5)" }} className="text-sm">
            Scroll to explore ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

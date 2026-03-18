import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "@/assets/hero-quantum.mp4";
import ParticleField from "@/components/ParticleField";
import { GridOverlay, ScanLine, FloatingOrb, TypewriterText } from "@/components/TechEffects";

const HEADLINES = [
  "Quantum Students Summit",
  "Explore. Innovate. Discover.",
  "The Future is Quantum",
  "Where Science Meets Ambition",
];

const HeroSection = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(blink);
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

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsla(213, 80%, 4%, 0.88) 0%, hsla(210, 70%, 10%, 0.75) 40%, hsla(215, 65%, 14%, 0.7) 70%, hsla(213, 80%, 4%, 0.9) 100%)",
        }}
      />

      {/* Tech effects */}
      <ParticleField particleCount={80} color="0, 164, 220" maxDistance={140} />
      <GridOverlay opacity={0.04} />
      <ScanLine />
      <FloatingOrb size={400} color="accent" position="top-right" />
      <FloatingOrb size={300} color="gold" position="bottom-left" delay={3} />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, hsla(213, 80%, 4%, 0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container text-center px-4" style={{ zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-mono font-medium tracking-[0.35em] uppercase mb-6"
            style={{ color: "hsl(var(--accent))" }}
          >
            {/* Terminal style prefix */}
            <span className="opacity-50">{">"}</span> VTU Quantum Club
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1"
            >
              _
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="h-[4.5rem] md:h-[6rem] lg:h-[7.5rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIdx}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{
                color: "white",
                textShadow: "0 0 40px rgba(0, 164, 220, 0.3), 0 0 80px rgba(0, 164, 220, 0.1)",
              }}
            >
              {HEADLINES[headlineIdx]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg max-w-xl mx-auto mt-6 mb-10 font-mono"
          style={{ color: "hsla(210, 30%, 85%, 0.7)" }}
        >
          <span className="text-accent/60">[</span> 16 – 17 April 2026 <span className="text-accent/60">·</span> Visvesvaraya Technological University <span className="text-accent/60">]</span>
        </motion.p>

        {/* Animated hexagon border decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: "hsl(var(--accent))" }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-sm font-mono"
            style={{ color: "hsla(var(--accent) / 0.5)" }}
          >
            ↓ scroll.explore() ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

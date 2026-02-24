import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventsVideo from "@/assets/events-quantum.mp4";

const HEADLINES = [
  "Summit Events",
  "Learn. Compete. Connect.",
  "Beyond the Classroom",
  "Shape the Quantum Future",
];

const EventsHero = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={eventsVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
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
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsla(199, 89%, 48%, 0.15), hsla(199, 89%, 48%, 0.05))",
            border: "1px solid hsla(199, 89%, 48%, 0.2)",
          }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 rounded-sm border"
            style={{ borderColor: "hsla(199, 89%, 48%, 0.5)" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-6"
          style={{ color: "hsla(210, 80%, 80%, 0.8)" }}
        >
          What Awaits You
        </motion.p>

        <div className="h-[4.5rem] md:h-[6rem] lg:h-[7.5rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIdx}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ color: "white", textShadow: "0 0 40px hsla(199, 89%, 48%, 0.3)" }}
            >
              {HEADLINES[headlineIdx]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg max-w-xl mx-auto mt-6 mb-4"
          style={{ color: "hsla(210, 30%, 85%, 0.7)" }}
        >
          Talks · Competitions · Panels · Networking
        </motion.p>

        {/* Animated divider */}
        <motion.div
          className="mx-auto mb-10 h-[1px] max-w-xs"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            background: "linear-gradient(90deg, transparent, hsla(199, 89%, 48%, 0.4), transparent)",
          }}
        />

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

export default EventsHero;

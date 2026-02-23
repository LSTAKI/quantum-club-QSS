import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_WORDS = [
  "Poster Presentations",
  "Qubitathon",
  "Plenary Talks",
  "Panel Discussion",
  "Workshops",
  "Networking",
  "Demos",
  "Research",
];

const HEADLINES = [
  "Summit Events",
  "Learn. Compete. Connect.",
  "Beyond the Classroom",
  "Shape the Quantum Future",
];

const TextWallRow = ({ reverse, offset }: { reverse?: boolean; offset?: number }) => (
  <div
    className="whitespace-nowrap flex gap-8 md:gap-12"
    style={{
      animation: `${reverse ? "scroll-wall-reverse" : "scroll-wall"} 25s linear infinite`,
      animationDelay: `${offset || 0}s`,
    }}
  >
    {[...SCROLL_WORDS, ...SCROLL_WORDS, ...SCROLL_WORDS].map((word, i) => (
      <span
        key={i}
        className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-heading font-bold uppercase select-none"
        style={{ color: "hsla(270, 60%, 80%, 0.07)" }}
      >
        {word}
      </span>
    ))}
  </div>
);

const EventsHero = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(270, 60%, 12%) 0%, hsl(280, 50%, 18%) 40%, hsl(260, 55%, 22%) 70%, hsl(270, 60%, 10%) 100%)",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-0 pointer-events-none overflow-hidden -rotate-12 scale-125">
        <TextWallRow />
        <TextWallRow reverse offset={-5} />
        <TextWallRow offset={-10} />
        <TextWallRow reverse offset={-15} />
        <TextWallRow offset={-20} />
        <TextWallRow reverse offset={-8} />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(270, 60%, 15%, 0.9) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-medium tracking-[0.35em] uppercase mb-6"
          style={{ color: "hsla(270, 80%, 80%, 0.8)" }}
        >
          What Awaits You
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
          style={{ color: "hsla(270, 30%, 85%, 0.7)" }}
        >
          Talks · Competitions · Panels · Networking
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="animate-bounce"
        >
          <span style={{ color: "hsla(270, 50%, 75%, 0.5)" }} className="text-sm">
            Scroll to explore ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsHero;

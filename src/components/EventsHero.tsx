import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

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

/* Floating particle */
const Particle = ({ delay, size, x, y, duration }: { delay: number; size: number; x: string; y: string; duration: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: "radial-gradient(circle, hsla(199, 89%, 48%, 0.4), transparent 70%)",
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0.5, 1.2, 0.8, 1.1, 0.5],
      y: [0, -40, -20, -60, -80],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const PARTICLES = [
  { delay: 0, size: 6, x: "15%", y: "70%", duration: 6 },
  { delay: 1.2, size: 4, x: "80%", y: "60%", duration: 7 },
  { delay: 2.5, size: 8, x: "45%", y: "80%", duration: 5 },
  { delay: 0.8, size: 3, x: "25%", y: "40%", duration: 8 },
  { delay: 3.0, size: 5, x: "70%", y: "50%", duration: 6 },
  { delay: 1.8, size: 7, x: "55%", y: "30%", duration: 7 },
  { delay: 0.5, size: 4, x: "90%", y: "75%", duration: 5 },
  { delay: 2.0, size: 6, x: "10%", y: "25%", duration: 8 },
  { delay: 3.5, size: 3, x: "35%", y: "55%", duration: 6 },
  { delay: 1.0, size: 5, x: "60%", y: "85%", duration: 7 },
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
        style={{ color: "hsla(210, 60%, 80%, 0.07)" }}
      >
        {word}
      </span>
    ))}
  </div>
);

/* Animated orbiting ring */
const OrbitRing = ({ size, duration, delay, opacity }: { size: number; duration: number; delay: number; opacity: number }) => (
  <motion.div
    className="absolute rounded-full border pointer-events-none"
    style={{
      width: size,
      height: size,
      left: "50%",
      top: "50%",
      marginLeft: -size / 2,
      marginTop: -size / 2,
      borderColor: `hsla(199, 89%, 48%, ${opacity})`,
    }}
    initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
    animate={{ rotate: 360, scale: [0.8, 1.05, 0.95, 1], opacity: [0, opacity, opacity, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  />
);

const EventsHero = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, (v) => `${v}px`);
  const glowY = useTransform(mouseY, (v) => `${v}px`);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(213, 80%, 8%) 0%, hsl(210, 70%, 14%) 40%, hsl(215, 65%, 18%) 70%, hsl(213, 80%, 6%) 100%)",
      }}
    >
      {/* Mouse-following glow */}
      <motion.div
        className="absolute pointer-events-none w-[500px] h-[500px] rounded-full"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, hsla(199, 89%, 48%, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Scrolling text wall */}
      <div className="absolute inset-0 flex flex-col justify-center gap-0 pointer-events-none overflow-hidden -rotate-12 scale-125">
        <TextWallRow />
        <TextWallRow reverse offset={-5} />
        <TextWallRow offset={-10} />
        <TextWallRow reverse offset={-15} />
        <TextWallRow offset={-20} />
        <TextWallRow reverse offset={-8} />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Orbit rings */}
      <OrbitRing size={300} duration={20} delay={0} opacity={0.06} />
      <OrbitRing size={500} duration={30} delay={2} opacity={0.04} />
      <OrbitRing size={700} duration={40} delay={4} opacity={0.03} />

      {/* Center vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(213, 70%, 12%, 0.9) 0%, transparent 70%)",
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

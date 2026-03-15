import { motion } from "framer-motion";

const GridOverlay = ({ opacity = 0.03 }: { opacity?: number }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      zIndex: 1,
      opacity,
      backgroundImage: `
        linear-gradient(rgba(0, 164, 220, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 164, 220, 0.3) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
);

const ScanLine = () => (
  <motion.div
    className="absolute left-0 right-0 h-px pointer-events-none"
    style={{
      zIndex: 3,
      background: "linear-gradient(90deg, transparent, rgba(0, 164, 220, 0.15), transparent)",
    }}
    animate={{ top: ["0%", "100%"] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  />
);

const FloatingOrb = ({
  size = 200,
  color = "accent",
  position = "top-right",
  delay = 0,
}: {
  size?: number;
  color?: string;
  position?: string;
  delay?: number;
}) => {
  const posClass =
    position === "top-right"
      ? "-top-20 -right-20"
      : position === "bottom-left"
      ? "-bottom-20 -left-20"
      : position === "center"
      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      : "-top-20 -left-20";

  return (
    <motion.div
      className={`absolute ${posClass} rounded-full pointer-events-none`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, hsl(var(--${color}) / 0.12), transparent 70%)`,
        filter: "blur(40px)",
        zIndex: 1,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

const CyberBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/30" />
    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/30" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/30" />
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/30" />
    {children}
  </div>
);

const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.span
    className={`relative inline-block ${className}`}
    whileHover={{
      textShadow: [
        "0 0 0px transparent",
        "-2px 0 rgba(0, 164, 220, 0.7), 2px 0 rgba(218, 165, 32, 0.7)",
        "0 0 0px transparent",
      ],
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.span>
);

const TypewriterText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => (
  <motion.span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + i * 0.03, duration: 0.05 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const PulsingDot = ({ color = "accent", size = 3 }: { color?: string; size?: number }) => (
  <span className="relative inline-flex">
    <span
      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
      style={{ background: `hsl(var(--${color}))`, width: size * 4, height: size * 4 }}
    />
    <span
      className="relative inline-flex rounded-full"
      style={{ background: `hsl(var(--${color}))`, width: size * 4, height: size * 4 }}
    />
  </span>
);

export { GridOverlay, ScanLine, FloatingOrb, CyberBorder, GlitchText, TypewriterText, PulsingDot };

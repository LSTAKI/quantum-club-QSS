import { motion } from "framer-motion";
import promoVideo from "@/assets/promo-video.mp4";

const VideoHero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={promoVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-navy-foreground px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-gold mb-4"
      >
        VTU Quantum Club Presents
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
      >
        Quantum Summit 2025
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl max-w-2xl text-navy-foreground/80 mb-8"
      >
        Exploring the Frontiers of Quantum Science
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="animate-bounce mt-8"
      >
        <span className="text-navy-foreground/60 text-sm">Scroll to explore ↓</span>
      </motion.div>
    </div>
  </section>
);

export default VideoHero;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
const introImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80";
import GlowCursor from "@/components/GlowCursor";
import { CyberBorder, FloatingOrb, PulsingDot } from "@/components/TechEffects";

const RegistrationModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative bg-card rounded-2xl border border-border/50 shadow-card-hover p-2 w-full max-w-3xl h-[85vh] md:h-[800px] flex flex-col overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-end p-2 pb-0">
        <button onClick={onClose} className="p-1 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 w-full overflow-hidden mt-2 rounded-lg">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSffNY_tcZ6BwnnEdPIMYGqTig-IUj9XG83pJ4nlq6zE5nFpcg/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </motion.div>
  </motion.div>
);

const IntroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
    <GlowCursor color="0, 164, 220" />
    <FloatingOrb size={250} color="accent" position="top-left" delay={1} />
    <FloatingOrb size={200} color="gold" position="bottom-left" delay={4} />

    <div className="container relative" style={{ zIndex: 5 }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-3 flex items-center gap-2"
          >
            <PulsingDot color="accent" size={2} />
            About Quantum Student Summit
          </motion.p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Where Curiosity Meets{" "}
            <span className="text-gradient-gold">Quantum Innovation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The VTU Quantum Club is a student-run initiative that brings together undergraduate researchers, educators, and industry professionals to share breakthroughs in quantum physics, computing, and related sciences.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From poster sessions and keynote talks to hands-on workshops, VTU Quantum Club creates an immersive environment where the next generation of quantum scientists can present their research, build networks, and spark new collaborations.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button variant="gold" size="lg" onClick={() => setIsModalOpen(true)}>
              Register Now
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <CyberBorder className="p-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={introImage}
                alt="Students collaborating in a quantum lab"
                className="rounded-lg shadow-card object-cover w-full aspect-[4/3] transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </CyberBorder>

          {/* Decorative tech elements */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg border border-accent/20"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ zIndex: -1 }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-32 h-32 rounded-lg border border-gold/20"
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ zIndex: -1 }}
          />
        </motion.div>
      </div>
    </div>

      <AnimatePresence>
        {isModalOpen && <RegistrationModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default IntroSection;

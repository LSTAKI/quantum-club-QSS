import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import introImage from "@/assets/intro-image.jpg";
import GlowCursor from "@/components/GlowCursor";
import { CyberBorder, FloatingOrb, PulsingDot } from "@/components/TechEffects";

const REGISTER_URL = "https://konfhub.com/quantum-student-summit";

const IntroSection = () => (
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
          >
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg">
                Register Now
              </Button>
            </a>
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
  </section>
);

export default IntroSection;

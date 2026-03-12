import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import introImage from "@/assets/intro-image.jpg";

const REGISTER_URL = "https://konfhub.com/";

const IntroSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            About Quantum Student Summit
          </p>
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
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg">
              Register Now
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <img
            src={introImage}
            alt="Students collaborating in a quantum lab"
            className="rounded-lg shadow-card object-cover w-full aspect-[4/3]"
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg bg-gold/20 -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-lg bg-accent/10 -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default IntroSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsHero from "@/components/EventsHero";
import GlowCursor from "@/components/GlowCursor";
import { GridOverlay, CyberBorder } from "@/components/TechEffects";

const poster1 = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80";
const poster2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80";
const poster3 = "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80";
const plenary1 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80";
const plenary2 = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const POSTER_REGISTER_URL = "https://konfhub.com/poster";
const QUBITATHON_REGISTER_URL = "https://konfhub.com/qubitathon";
const POSTER_TOPICS_URL = "https://drive.google.com/file/d/1xPGZaed0q4Jh4riwVOPLc7X4YxJ_TIu4/view?usp=sharing";
const QUBITATHON_TOPICS_URL = "https://drive.google.com/file/d/1xPGZaed0q4Jh4riwVOPLc7X4YxJ_TIu4/view?usp=sharing";
const POSTER_RULEBOOK_URL = "https://drive.google.com/file/d/1xPGZaed0q4Jh4riwVOPLc7X4YxJ_TIu4/view?usp=sharing";
const QUBITATHON_RULEBOOK_URL = "https://drive.google.com/file/d/1xPGZaed0q4Jh4riwVOPLc7X4YxJ_TIu4/view?usp=sharing";

const SectionDivider = () => (
  <motion.div
    className="mx-auto h-[1px] max-w-lg"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)" }}
  />
);

const GlowImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <motion.div
    className={`relative overflow-hidden rounded-lg group ${className || ""}`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: "linear-gradient(135deg, hsla(199, 89%, 48%, 0.15) 0%, transparent 60%)" }}
    />
    {/* Scan line on hover */}
    <motion.div
      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
      style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(199, 89%, 48%, 0.03) 2px, hsla(199, 89%, 48%, 0.03) 4px)" }}
    />
  </motion.div>
);

const StatusDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
  </span>
);

const Events = () => (
  <div className="min-h-screen">
    <Navbar />
    <EventsHero />

    {/* Plenary Talks */}
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <motion.p {...staggerItem} className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-3 flex items-center gap-2">
              <StatusDot /> Keynote
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Plenary Talks
            </motion.h2>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4">
              Hear from leading experts and distinguished researchers sharing their latest breakthroughs and visions for the future of quantum science. Plenary sessions bring together the brightest minds in the field for talks that inspire and challenge.
            </motion.p>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed">
              These sessions cover grand themes — from the foundations of quantum mechanics to real-world applications in quantum computing, cryptography, and materials science.
            </motion.p>
          </motion.div>

          <motion.div {...scaleIn} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-2 gap-3 h-[360px]">
            <CyberBorder>
              <GlowImage src={plenary1} alt="Distinguished speaker lecturing" className="h-full" />
            </CyberBorder>
            <CyberBorder>
              <GlowImage src={plenary2} alt="Expert presenting research" className="h-full" />
            </CyberBorder>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Poster Presentations */}
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      <GridOverlay />
      <GlowCursor />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <motion.p {...staggerItem} className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-3 flex items-center gap-2">
              <StatusDot /> Interactive Session
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Poster Presentations
            </motion.h2>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4">
              Step into our poster hall where undergraduate researchers showcase their quantum science discoveries in an intimate, interactive setting. Engage directly with presenters, ask questions, and explore cutting-edge student research across quantum computing, quantum optics, and condensed matter physics.
            </motion.p>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4">
              This session is designed for meaningful one-on-one conversations, fostering networking opportunities between students, faculty mentors, and industry professionals.
            </motion.p>
            <motion.p {...staggerItem} className="text-sm font-mono font-semibold text-foreground mb-6">
              Team Size: Up to 2 members
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3 flex-wrap"
            >
              <a href={POSTER_TOPICS_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Topics</Button>
              </a>
              <a href={POSTER_RULEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Rule Book</Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div {...scaleIn} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-3 grid-rows-2 gap-3 h-[360px]">
            <GlowImage src={poster1} alt="Students at poster boards" className="col-span-2 row-span-1 shadow-card" />
            <GlowImage src={poster2} alt="Student explaining research" className="col-span-1 row-span-2 shadow-card" />
            <GlowImage src={poster3} alt="Poster session crowd" className="col-span-2 row-span-1 shadow-card" />
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDivider />



    {/* Qubitathon */}
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      <GlowCursor />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <motion.p {...staggerItem} className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-3 flex items-center gap-2">
              <StatusDot /> Ideathon
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Qubitathon
            </motion.h2>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4">
              A quantum-themed ideathon where industry professionals present real-world challenges, and student teams brainstorm innovative solutions. Teams must develop a compelling idea and build a simple working prototype within the event timeframe.
            </motion.p>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4">
              This is your chance to think big, collaborate under pressure, and showcase your problem-solving skills to industry leaders and academic mentors.
            </motion.p>
            <motion.p {...staggerItem} className="text-sm font-mono font-semibold text-foreground mb-6">
              Team Size: 3–4 members (compulsory PPT Presentation)
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3 flex-wrap"
            >
              <a href={QUBITATHON_TOPICS_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Topics</Button>
              </a>
              <a href={QUBITATHON_RULEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Rule Book</Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div {...scaleIn} transition={{ duration: 0.7, delay: 0.2 }} className="flex items-center justify-center">
            <motion.div
              className="tech-card w-full max-w-md aspect-square rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated corner accents */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-16"
                style={{ borderTop: "2px solid hsl(var(--accent) / 0.3)", borderLeft: "2px solid hsl(var(--accent) / 0.3)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16"
                style={{ borderBottom: "2px solid hsl(var(--accent) / 0.3)", borderRight: "2px solid hsl(var(--accent) / 0.3)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />

              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: "hsl(var(--gold) / 0.1)" }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-4xl">💡</span>
              </motion.div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Think. Build. Present.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                Industry-sourced problem statements · Team brainstorming · Prototype demo · Expert judging panel
              </p>

              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{ opacity: [0, 0.05, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ background: "radial-gradient(circle at center, hsl(var(--accent)), transparent 70%)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Events;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsHero from "@/components/EventsHero";

import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import talk1 from "@/assets/talk-1.jpg";
import talk2 from "@/assets/talk-2.jpg";
import plenary1 from "@/assets/plenary-1.jpg";
import plenary2 from "@/assets/plenary-2.jpg";
import panelImg from "@/assets/panel-discussion.jpg";

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

const panelists = [
  { name: "Dr. Anil Kumar", affiliation: "IISc Bangalore, Dept. of Physics" },
  { name: "Dr. Priya Natarajan", affiliation: "IIT Madras, Quantum Computing Lab" },
  { name: "Dr. Rajesh Gopakumar", affiliation: "ICTS-TIFR, Theoretical Sciences" },
  { name: "Dr. Sanhita Sinharay", affiliation: "IISc Bangalore, Molecular Sciences" },
  { name: "Dr. Vijay Kumar", affiliation: "VTU Belagavi, Applied Physics" },
];

const REGISTER_URL = "https://konfhub.com/";

/* Animated section divider */
const SectionDivider = () => (
  <motion.div
    className="mx-auto h-[1px] max-w-lg"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)",
    }}
  />
);

/* Glowing image wrapper with hover */
const GlowImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <motion.div
    className={`relative overflow-hidden rounded-lg group ${className || ""}`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, hsla(199, 89%, 48%, 0.1) 0%, transparent 60%)",
      }}
    />
  </motion.div>
);

const Events = () => (
  <div className="min-h-screen">
    <Navbar />
    <EventsHero />

    {/* Poster Presentations */}
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <motion.p
              {...staggerItem}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3"
            >
              Interactive Session
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
            <motion.p
              {...staggerItem}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              Step into our poster hall where undergraduate researchers showcase their quantum science discoveries in an intimate, interactive setting. Engage directly with presenters, ask questions, and explore cutting-edge student research across quantum computing, quantum optics, and condensed matter physics.
            </motion.p>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4">
              This session is designed for meaningful one-on-one conversations, fostering networking opportunities between students, faculty mentors, and industry professionals.
            </motion.p>
            <motion.p {...staggerItem} className="text-sm font-semibold text-foreground mb-6">
              Team Size: Up to 2 members
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg">
                  Register Now
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            {...scaleIn}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-3 grid-rows-2 gap-3 h-[360px]"
          >
            <GlowImage src={poster1} alt="Students at poster boards" className="col-span-2 row-span-1 shadow-card" />
            <GlowImage src={poster2} alt="Student explaining research" className="col-span-1 row-span-2 shadow-card" />
            <GlowImage src={poster3} alt="Poster session crowd" className="col-span-2 row-span-1 shadow-card" />
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Plenary Talks */}
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <motion.p {...staggerItem} className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Keynote
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

          <motion.div
            {...scaleIn}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 h-[360px]"
          >
            <GlowImage src={plenary1} alt="Distinguished speaker lecturing" className="shadow-card" />
            <GlowImage src={plenary2} alt="Expert presenting research" className="shadow-card" />
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Panel Discussion */}
    <section className="py-20 md:py-28 bg-surface overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...scaleIn}
            className="order-2 md:order-1"
          >
            <GlowImage
              src={panelImg}
              alt="Panel discussion at the summit"
              className="w-full aspect-[4/3] shadow-card"
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="order-1 md:order-2">
            <motion.p {...staggerItem} className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Discussion
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Panel Discussion
            </motion.h2>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-4 italic">
              "Undergraduate Research in India: Purpose, Passion, and the Pursuit of Quantum Science"
            </motion.p>
            <motion.p {...staggerItem} className="text-muted-foreground leading-relaxed mb-6">
              An engaging conversation featuring distinguished panelists from India's premier research institutions exploring the role of undergraduate research in advancing quantum science.
            </motion.p>
            <motion.h3
              {...staggerItem}
              className="font-heading text-lg font-semibold text-foreground mb-3"
            >
              Panelists
            </motion.h3>
            <ul className="space-y-2">
              {panelists.map((p, i) => (
                <motion.li
                  key={p.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>
                    <strong className="text-foreground">{p.name}</strong> — {p.affiliation}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* Qubitathon */}
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <motion.p {...staggerItem} className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Ideathon
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
            <motion.p {...staggerItem} className="text-sm font-semibold text-foreground mb-6">
              Team Size: 3–4 members (compulsory)
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg">
                  Register Now
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            {...scaleIn}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <motion.div
              className="w-full max-w-md aspect-square rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(var(--accent) / 0.08), hsl(var(--accent) / 0.02))",
                border: "1px solid hsl(var(--accent) / 0.15)",
              }}
              whileHover={{ scale: 1.03, borderColor: "hsl(var(--accent) / 0.3)" }}
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                Industry-sourced problem statements · Team brainstorming · Prototype demo · Expert judging panel
              </p>

              {/* Pulsing glow */}
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

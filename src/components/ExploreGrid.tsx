import { motion } from "framer-motion";
import { Mic2, Users, Calendar, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlowCursor from "@/components/GlowCursor";

const cards = [
  {
    icon: Mic2,
    title: "Speakers",
    description: "Hear from pioneering researchers and quantum industry leaders shaping the future of science.",
    href: "/speakers",
    isRoute: true,
    accent: "accent",
  },
  {
    icon: Users,
    title: "Team",
    description: "Meet the passionate student organizers behind VTU Quantum Club who make this summit possible.",
    href: "/team",
    isRoute: true,
    accent: "gold",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Workshops, poster sessions, panel discussions, and networking mixers across two exciting days.",
    href: "/events",
    isRoute: true,
    accent: "accent",
  },
  {
    icon: Handshake,
    title: "Sponsorship",
    description: "Partner with VTU Quantum Club to support the next generation of quantum scientists and innovators.",
    href: "/sponsors",
    isRoute: true,
    accent: "gold",
  },
];

const ExploreGrid = () => (
  <section id="explore" className="py-24 bg-background relative overflow-hidden">
    <GlowCursor color="0, 164, 220" />

    <div className="container relative" style={{ zIndex: 5 }}>
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-2"
        >
          {"// Discover"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground"
        >
          Explore VTU Quantum Club
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => {
          const inner = (
            <motion.div
              whileHover={{ y: -8, borderColor: `hsl(var(--${card.accent}))` }}
              transition={{ duration: 0.3 }}
              className="group rounded-lg border border-border/50 bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, hsl(var(--${card.accent}) / 0.08), transparent 70%)`,
                }}
              />

              <motion.div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative"
                style={{ background: `hsl(var(--${card.accent}) / 0.1)` }}
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <card.icon size={24} className="text-accent" />
              </motion.div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2 relative">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-3 transition-all relative">
                Learn More <ArrowRight size={14} />
              </span>
            </motion.div>
          );

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link to={card.href} className="block h-full">
                {inner}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExploreGrid;

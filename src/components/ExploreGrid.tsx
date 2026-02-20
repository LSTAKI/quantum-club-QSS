import { motion } from "framer-motion";
import { Mic2, Users, Calendar, Handshake, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Mic2,
    title: "Speakers",
    description: "Hear from pioneering researchers and quantum industry leaders shaping the future of science.",
    href: "#",
  },
  {
    icon: Users,
    title: "Team",
    description: "Meet the passionate student organizers behind VTU Quantum Club who make this summit possible.",
    href: "#",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Workshops, poster sessions, panel discussions, and networking mixers across two exciting days.",
    href: "#",
  },
  {
    icon: Handshake,
    title: "Sponsorship",
    description: "Partner with VTU Quantum Club to support the next generation of quantum scientists and innovators.",
    href: "#",
  },
];

const ExploreGrid = () => (
  <section id="explore" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
          Discover
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Explore VTU Quantum Club
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.a
            key={card.title}
            href={card.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-lg border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <card.icon size={24} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {card.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Learn More <ArrowRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ExploreGrid;

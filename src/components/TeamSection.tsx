import { motion } from "framer-motion";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  {
    name: "Arjun Desai",
    role: "President, VTU Quantum Club",
    quote: "Building a community where quantum curiosity thrives.",
    image: team1,
  },
  {
    name: "Meera Sharma",
    role: "Vice President & Events Lead",
    quote: "Every great discovery starts with a bold question.",
    image: team2,
  },
  {
    name: "Rohan Patil",
    role: "Technical Lead",
    quote: "Code, circuits, and qubits — that's our playground.",
    image: team3,
  },
  {
    name: "Ananya Kulkarni",
    role: "Outreach & PR Coordinator",
    quote: "Connecting minds across campuses for quantum collaboration.",
    image: team4,
  },
];

const TeamSection = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
          The People Behind It
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Meet Our Team
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-gold transition-colors duration-300">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {m.name}
            </h3>
            <p className="text-xs text-accent font-medium mb-3">{m.role}</p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{m.quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;

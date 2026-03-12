import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const speakers = [
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null, linkedin: "https://linkedin.com/in/" },
];

const SpeakersSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
          Distinguished Voices
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Our Speakers
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {speakers.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-gold transition-colors duration-300">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {s.name}
            </h3>
            <p className="text-xs text-accent font-medium mb-2">{s.role}</p>
            <a
              href={s.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-gold transition-colors duration-200 mb-3"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{s.quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpeakersSection;

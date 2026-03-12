import { motion } from "framer-motion";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

const speakers = [
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
  { name: "To be updated", role: "To be updated", quote: "To be updated", image: null },
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
            <p className="text-xs text-accent font-medium mb-3">{s.role}</p>
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

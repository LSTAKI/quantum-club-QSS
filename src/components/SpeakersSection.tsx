import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

import ParticleField from "@/components/ParticleField";
import GlowCursor from "@/components/GlowCursor";
import { GridOverlay, CyberBorder } from "@/components/TechEffects";

const defaultSpeakers = [
  { id: "1", name: "T. S. Mahesh", role: "Speaker", quote: "Professor, Physics (IISER)", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773402136/QP-5_uul59c.png", linkedin_url: "https://sites.iiserpune.ac.in/~mahesh.ts/", display_order: 0 },
  { id: "2", name: "Shankar Kumar Selvaraja", role: "Speaker", quote: "IISc Bangalore", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773399547/SP-1_hcyoxo.jpg", linkedin_url: "https://www.linkedin.com/in/shankarselvaraja", display_order: 1 },
  { id: "3", name: "Prabhu Ramappa", role: "Speaker", quote: "Associate Professor (Physics), Indian Institute of Technology Dharwad", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773400407/SP-2_wzcjwo.jpg", linkedin_url: "https://www.linkedin.com/in/r-prabhu", display_order: 2 },
  { id: "4", name: "Bhawana Rudra", role: "Speaker", quote: "Asst. Professor at National Institute of Technology Karnataka", image_url: "https://infotech.nitk.ac.in/sites/default/files/mam_one_full.png", linkedin_url: "https://www.linkedin.com/in/bhawana-rudra-25584086", display_order: 3 },
  { id: "5", name: "Usha Devi A R", role: "Speaker", quote: "Professor at Bangalore University", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773400919/SP-3_ksjvll.jpg", linkedin_url: "https://www.linkedin.com/in/usha-devi-a-r-16b240a8", display_order: 4 },
  { id: "6", name: "Karthiganesh Durai", role: "Speaker", quote: "Quantum Computing Architect", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773401076/SP-4_jtjise.jpg", linkedin_url: "https://www.linkedin.com/in/karthiganesh-durai-95535872", display_order: 5 },
];

const SpeakersSection = () => {
  const items = defaultSpeakers;

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <ParticleField />
      </div>
      <GridOverlay />
      <GlowCursor />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <motion.span
              className="h-px w-8 bg-accent/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            <span className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent">
              Distinguished Voices
            </span>
            <motion.span
              className="h-px w-8 bg-accent/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Speakers
          </h2>
          <motion.div
            className="mx-auto mt-4 h-px max-w-[200px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.5), transparent)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              <div className="tech-card rounded-xl p-6 h-full">
                {/* Glowing avatar */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <CyberBorder>
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {s.image_url && (
                        <img src={s.image_url} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      )}
                    </div>
                  </CyberBorder>
                  {/* Pulse ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-accent/30 opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{s.name}</h3>
                <p className="text-xs text-accent font-mono font-medium mb-2">{s.role}</p>
                {s.linkedin_url && (
                  <a
                    href={s.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-gold transition-colors duration-200 mb-3"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {s.quote && (
                  <p className="text-sm text-muted-foreground italic leading-relaxed">"{s.quote}"</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;

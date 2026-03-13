import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const speakers = [
  { name: "T. S. Mahesh", role: "Speaker", quote: "Professor, Physics (IISER)", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773402136/QP-5_uul59c.png" , linkedin: "https://sites.iiserpune.ac.in/~mahesh.ts/" },
  { name: "Shankar Kumar Selvaraja", role: "Speaker", quote: "IISc Bangalore", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773399547/SP-1_hcyoxo.jpg", linkedin: "https://www.linkedin.com/in/shankarselvaraja?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Prabhu Ramappa", role: "Speaker", quote: "Associate Professor (Physics), Indian Institute of Technology Dharwad", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773400407/SP-2_wzcjwo.jpg", linkedin: "https://www.linkedin.com/in/r-prabhu?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Bhawana Rudra", role: "Speaker", quote: "Asst. Professor at National Institute of Technology Karnataka", image: "https://infotech.nitk.ac.in/sites/default/files/mam_one_full.png", linkedin: "https://www.linkedin.com/in/bhawana-rudra-25584086?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Usha Devi A R", role: "Speaker", quote: "Professor at Bangalore University", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773400919/SP-3_ksjvll.jpg", linkedin: "https://www.linkedin.com/in/usha-devi-a-r-16b240a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Karthiganesh Durai", role: "Speaker", quote: "Quantum Computing Architect", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1773401076/SP-4_jtjise.jpg", linkedin: "https://www.linkedin.com/in/karthiganesh-durai-95535872?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

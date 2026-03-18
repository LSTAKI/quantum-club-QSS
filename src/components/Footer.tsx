import { Instagram, Linkedin, MessageCircle, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ParticleField from "@/components/ParticleField";
import { GridOverlay } from "@/components/TechEffects";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "/events" },
  { label: "Speakers", href: "/speakers" },
  { label: "Team", href: "/team" },
  { label: "Advisory Committee", href: "/advisory-committee" },
  { label: "Venue", href: "#venue" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/vtu_quantum_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/vtu-quantum-club/?viewAsMember=true", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://discord.gg/pghkwgfHmd", label: "Discord" },
];

const Footer = () => (
  <footer id="contact" className="relative overflow-hidden" style={{ background: "hsl(var(--navy))" }}>
    <ParticleField particleCount={30} color="0, 164, 220" maxDistance={100} />
    <GridOverlay opacity={0.02} />

    <div className="container py-16 relative" style={{ zIndex: 5 }}>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl font-bold mb-2 text-navy-foreground">
            VTU <span className="text-gold">Quantum Club</span>
          </h3>
          <p className="text-sm text-navy-foreground/60 leading-relaxed">
            VTU Quantum Club — A student-led initiative fostering undergraduate research and collaboration in quantum sciences at Visvesvaraya Technological University.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            {"// Quick Links"}
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-navy-foreground/60 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">→</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            {"// Contact"}
          </h4>
          <div className="space-y-3 text-sm text-navy-foreground/60">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <a href="mailto:vtuquantumclub@gmail.com" className="hover:text-accent transition-colors">
                vtuquantumclub@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-accent" />
              <a href="https://vtu-quantum-club.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                vtu-quantum-club.vercel.app
              </a>
            </div>
            <p>Public Relations Team</p>
            <p>VTU, Belagavi, Karnataka, India</p>
          </div>

          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ scale: 1.15, borderColor: "hsl(var(--accent))" }}
                className="w-10 h-10 rounded-full border border-navy-foreground/20 flex items-center justify-center text-navy-foreground/60 hover:text-accent transition-colors"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    <div className="border-t border-accent/10 relative" style={{ zIndex: 5 }}>
      <div className="container py-6 text-center text-xs text-navy-foreground/40 font-mono">
        © 2026 VTU Quantum Club <span className="text-accent/30">|</span> All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { Instagram, Linkedin, Twitter, Mail, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "/events" },
  { label: "Speakers", href: "/speakers" },
  { label: "Team", href: "/team" },
  { label: "Venue", href: "#venue" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://discord.gg/lovable-dev", label: "Discord" },
];

const Footer = () => (
  <footer id="contact" className="bg-navy text-navy-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-2">
            VTU <span className="text-gold">Quantum Club</span>
          </h3>
          <p className="text-sm text-navy-foreground/60 leading-relaxed">
            VTU Quantum Club — A student-led initiative fostering undergraduate research and collaboration in quantum sciences at Visvesvaraya Technological University.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-navy-foreground/60 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Get in Touch
          </h4>
          <div className="space-y-3 text-sm text-navy-foreground/60">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <a href="mailto:vtuquantumclub@gmail.com" className="hover:text-gold transition-colors">
                vtuquantumclub@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-gold" />
              <a href="https://vtu-quantum-club.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                vtu-quantum-club.vercel.app
              </a>
            </div>
            <p>Public Relations Team</p>
            <p>VTU, Belagavi, Karnataka, India</p>
          </div>

          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-navy-foreground/20 flex items-center justify-center text-navy-foreground/60 hover:text-gold hover:border-gold transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-navy-foreground/10">
      <div className="container py-6 text-center text-xs text-navy-foreground/40">
        © 2025 VTU Quantum Club. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";

const navLinks = [
  { label: "Home", href: "/#home", route: "/" },
  { label: "Events", href: "/events", route: "/events" },
  { label: "Speakers", href: "/speakers", route: "/speakers" },
  { label: "Sponsors", href: "/sponsors", route: "/sponsors" },
  { label: "Team", href: "/team", route: "/team" },
  { label: "Advisory Committee", href: "/advisory-committee", route: "/advisory-committee" },
  { label: "Schedule", href: "/schedule", route: "/schedule" },
  { label: "FAQ", href: "/faq", route: "/faq" },
  ];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (link: typeof navLinks[0]) => location.pathname === link.route && link.route !== "/";

  const renderLink = (l: typeof navLinks[0], className: string, onClick?: () => void) => {
    if (l.route !== "/") {
      return (
        <Link key={l.label} to={l.href} onClick={onClick} className={className}>
          {l.label}
        </Link>
      );
    }
    return (
      <a key={l.label} href={l.href} onClick={onClick} className={className}>
        {l.label}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-accent/10"
      style={{
        background: "linear-gradient(180deg, hsl(var(--background) / 0.95), hsl(var(--background) / 0.9))",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)",
        }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container flex items-center h-16 gap-6">
        <Link to="/" className="font-heading text-xl font-bold text-foreground tracking-tight">
          VTU <span className="text-gold">Quantum Club</span>
        </Link>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <nav className="flex items-center gap-1">
            {navLinks.map((l) =>
              renderLink(
                l,
                `px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                  isActive(l)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                }`
              )
            )}
          </nav>
          <ModeToggle />
        </div>

        <div className="ml-auto lg:hidden flex items-center gap-2">
          <ModeToggle />
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-accent/10 pb-4"
          style={{
            background: "hsl(var(--background) / 0.98)",
          }}
        >
          {navLinks.map((l) =>
            renderLink(
              l,
              `block px-6 py-3 text-sm transition-colors ${
                isActive(l) ? "text-accent font-semibold" : "text-foreground/80 hover:text-accent"
              }`,
              () => setOpen(false)
            )
          )}
          <div className="border-t border-accent/10 px-6 py-3">
            <ModeToggle />
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;

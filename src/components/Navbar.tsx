import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#explore" },
  { label: "Events", href: "#explore" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Venue", href: "#venue" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-heading text-xl font-bold text-navy-foreground tracking-tight">
          QCSS <span className="text-gold">2025</span>
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-navy-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="ml-4">
            Register Now
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-navy border-t border-navy-light/30 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-navy-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button variant="gold" size="sm" className="w-full">
              Register Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

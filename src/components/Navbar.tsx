import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#home", route: "/" },
  
  { label: "Events", href: "/events", route: "/events" },
  { label: "Speakers", href: "/speakers", route: "/speakers" },
  { label: "Team", href: "/team", route: "/team" },
  
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl font-bold text-navy-foreground tracking-tight">
          VTU <span className="text-gold">Quantum Club</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) =>
            renderLink(
              l,
              `px-3 py-2 text-sm font-medium transition-colors ${
                isActive(l) ? "text-gold border-b-2 border-gold" : "text-navy-foreground/80 hover:text-gold"
              }`
            )
          )}
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
          {navLinks.map((l) =>
            renderLink(
              l,
              `block px-6 py-3 text-sm transition-colors ${
                isActive(l) ? "text-gold font-semibold" : "text-navy-foreground/80 hover:text-gold"
              }`,
              () => setOpen(false)
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

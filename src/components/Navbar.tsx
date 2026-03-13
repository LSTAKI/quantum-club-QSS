import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { label: "Home", href: "/#home", route: "/" },
  { label: "Events", href: "/events", route: "/events" },
  { label: "Speakers", href: "/speakers", route: "/speakers" },
  { label: "Team", href: "/team", route: "/team" },
  { label: "Schedule", href: "/schedule", route: "/schedule" },
  { label: "FAQ", href: "/faq", route: "/faq" },
  { label: "Contact", href: "/contact", route: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

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
          {user ? (
            <div className="flex items-center gap-2 ml-3">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="gold" size="sm">Admin</Button>
                </Link>
              )}
              <Button variant="ghost" size="sm" onClick={signOut} className="text-navy-foreground/80 hover:text-gold">
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 ml-3">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-navy-foreground/80 hover:text-gold">
                  <LogIn className="w-4 h-4 mr-1" /> Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="gold" size="sm">Register</Button>
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-navy-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
          <div className="px-6 pt-3 flex gap-2">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" onClick={() => setOpen(false)}>
                    <Button variant="gold" size="sm">Admin</Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={() => { signOut(); setOpen(false); }} className="text-navy-foreground/80">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="ghost" size="sm" className="text-navy-foreground/80">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setOpen(false)}>
                  <Button variant="gold" size="sm">Register</Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

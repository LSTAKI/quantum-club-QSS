import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const defaultSponsors: any[] = [];

const tierOrder = ["title", "platinum", "gold", "silver", "partner"];

const tierLabels: Record<string, string> = {
  title: "Title Sponsor",
  platinum: "Platinum Partners",
  gold: "Gold Partners",
  silver: "Silver Partners",
  partner: "Partners",
};

const tierStyles: Record<string, string> = {
  title: "border-gold bg-gold/5",
  platinum: "border-accent bg-accent/5",
  gold: "border-gold/60 bg-gold/5",
  silver: "border-border bg-muted/30",
  partner: "border-border/50 bg-card",
};

const Sponsors = () => {
  const sponsors = defaultSponsors;
  const isLoading = false;

  const activeTiers = tierOrder.filter((tier) =>
    sponsors?.some((s) => s.tier.toLowerCase() === tier)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
              Our Sponsors & Partners
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Supported by Leading Institutions
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              The visionary organizations making the Quantum Student Summit 2026 a reality.
            </p>
          </motion.div>

          {(!sponsors || sponsors.length === 0) && (
            <p className="text-center text-muted-foreground text-lg py-20">
              To be updated
            </p>
          )}

          {activeTiers.map((tier) => {
            const tierSponsors = sponsors?.filter(
              (s) => s.tier.toLowerCase() === tier
            ) || [];

            return (
              <div key={tier} className="mb-16">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-heading text-xl font-semibold text-foreground mb-8 text-center tracking-widest uppercase"
                >
                  {tierLabels[tier] || tier}
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {tierSponsors.map((sponsor, i) => (
                    <motion.a
                      key={sponsor.id}
                      href={sponsor.website_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className={`block rounded-xl border-2 p-6 transition-shadow hover:shadow-card-hover ${tierStyles[tier] || tierStyles.partner}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {sponsor.tier}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      {sponsor.logo_url ? (
                        <img
                          src={sponsor.logo_url}
                          alt={sponsor.name}
                          className="h-12 object-contain mb-3"
                        />
                      ) : (
                        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                          {sponsor.name}
                        </h3>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sponsor.description}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;

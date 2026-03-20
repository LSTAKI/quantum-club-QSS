import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const defaultSponsors: any[] = [];

const tierColors: Record<string, string> = {
  title: "border-gold bg-gold/5",
  platinum: "border-accent bg-accent/5",
  gold: "border-gold/60 bg-gold/5",
  silver: "border-border bg-muted/30",
  partner: "border-border/50 bg-card",
};

const SponsorsSection = () => {
  const items = defaultSponsors;

  return (
    <section id="sponsors" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
            Our Sponsors & Partners
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Supported by Leading Institutions
          </h2>
        </motion.div>

        {items.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((sponsor, i) => (
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
                className={`block rounded-xl border-2 p-6 transition-shadow hover:shadow-card-hover ${tierColors[sponsor.tier] || tierColors.partner}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {sponsor.tier}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                {sponsor.logo_url ? (
                  <img src={sponsor.logo_url} alt={sponsor.name} className="h-12 object-contain mb-3" />
                ) : (
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{sponsor.name}</h3>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.description}</p>
              </motion.a>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg py-12">
            To be updated
          </p>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;

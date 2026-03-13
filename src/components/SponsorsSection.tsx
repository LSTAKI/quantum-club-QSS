import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { ExternalLink } from "lucide-react";

const defaultSponsors = [
  { id: "1", name: "QuantumTech Labs", description: "Leading quantum computing research lab", logo_url: "", website_url: "#", tier: "platinum", display_order: 0 },
  { id: "2", name: "National Science Foundation", description: "Supporting scientific research nationwide", logo_url: "", website_url: "#", tier: "gold", display_order: 1 },
  { id: "3", name: "Google Quantum AI", description: "Advancing quantum computing research", logo_url: "", website_url: "#", tier: "gold", display_order: 2 },
  { id: "4", name: "Microsoft Azure Quantum", description: "Cloud quantum computing platform", logo_url: "", website_url: "#", tier: "silver", display_order: 3 },
  { id: "5", name: "DST India", description: "Department of Science & Technology", logo_url: "", website_url: "#", tier: "silver", display_order: 4 },
  { id: "6", name: "Qiskit Community", description: "Open-source quantum development", logo_url: "", website_url: "#", tier: "partner", display_order: 5 },
];

const tierColors: Record<string, string> = {
  title: "border-gold bg-gold/5",
  platinum: "border-accent bg-accent/5",
  gold: "border-gold/60 bg-gold/5",
  silver: "border-border bg-muted/30",
  partner: "border-border/50 bg-card",
};

const SponsorsSection = () => {
  const { data: sponsors } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const { data } = await supabase.from("sponsors").select("*").order("display_order");
      return data && data.length > 0 ? data : defaultSponsors;
    },
  });

  const items = sponsors || defaultSponsors;

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
      </div>
    </section>
  );
};

export default SponsorsSection;

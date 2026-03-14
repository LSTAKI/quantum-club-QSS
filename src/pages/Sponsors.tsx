import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sponsors = () => {
  // Fetch sponsors from Supabase
  const { data: sponsors, isLoading } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const tiers = ["Platinum", "Gold", "Silver"];

  if (isLoading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading Sponsors...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Our Sponsors
          </h1>
          <p className="text-muted-foreground text-lg mb-20 max-w-2xl mx-auto">
            The visionary organizations making the Quantum Student Summit 2026 a reality.
          </p>

          {tiers.map((tier) => {
            const tierSponsors = sponsors?.filter((s) => s.tier === tier) || [];
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier} className="mb-24">
                <h2 className="text-2xl font-semibold mb-12 tracking-widest uppercase text-primary/80">
                  {tier} Partners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {tierSponsors.map((sponsor) => (
                    <motion.a
                      key={sponsor.id}
                      href={sponsor.website_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="group relative flex flex-col items-center justify-center p-12 rounded-3xl bg-card/50 border border-white/10 hover:border-primary/50 transition-all backdrop-blur-sm"
                    >
                      {sponsor.logo_url ? (
                        <img 
                          src={sponsor.logo_url} 
                          alt={sponsor.name} 
                          className="h-24 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <span className="text-2xl font-bold opacity-50">{sponsor.name}</span>
                      )}
                      <div className="mt-4 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </div>
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
import { motion } from "framer-motion";
import { Plane, Train, MapPin, ExternalLink } from "lucide-react";
import GlowCursor from "@/components/GlowCursor";
import { FloatingOrb, PulsingDot } from "@/components/TechEffects";

const touristPlaces = [
  { name: "Belgaum Fort (Belagavi Fort)", description: "A historic fort built in the 13th century with Jain temples and a mosque within its walls.", link: "https://en.wikipedia.org/wiki/Belgaum_Fort" },
  { name: "Gokak Falls", description: "A spectacular waterfall on the Ghataprabha River, often called the 'Niagara of India'.", link: "https://en.wikipedia.org/wiki/Gokak_Falls" },
  { name: "Kittur Fort", description: "The historic fort of Rani Chennamma, a symbol of resistance against British rule.", link: "https://en.wikipedia.org/wiki/Kittur,_Karnataka" },
  { name: "Kamal Basti", description: "A beautifully carved Jain temple located inside the Belgaum Fort, known for its lotus-shaped ceiling.", link: "https://en.wikipedia.org/wiki/Kamal_Basti" },
  { name: "Godchinamalki Falls", description: "A stunning twin waterfall surrounded by lush greenery, ideal for nature lovers.", link: "https://en.wikipedia.org/wiki/Godchinamalki_Falls" },
];

const travelRoutes = [
  { from: "Goa (Dabolim Airport)", distance: "~190 km", duration: "~4 hrs by road", airlines: "IndiGo, Air India, SpiceJet", airportCode: "GOI" },
  { from: "Goa (MOPA Airport)", distance: "~190 km", duration: "~4 hrs by road", airlines: "IndiGo, Akasa Air", airportCode: "GOX" },
  { from: "Kolhapur (Kolhapur Airport)", distance: "~120 km", duration: "~2.5 hrs by road", airlines: "IndiGo, Star Air", airportCode: "KLH" },
  { from: "Belagavi (Sambra Airport)", distance: "~10 km", duration: "~20 min by road", airlines: "IndiGo, Star Air", airportCode: "IXG" },
  { from: "Hubli (Hubli Airport)", distance: "~100 km", duration: "~2 hrs by road", airlines: "IndiGo, Star Air", airportCode: "HBX" },
];

const trainRoutes = [
  { from: "Belagavi", distance: "~9 km from Centre", stationCode: "BGM" },
  { from: "Hubballi", distance: "~110 km from Centre", stationCode: "UBL" },
  { from: "Madgaon", distance: "~124 km", stationCode: "MAO" },
  { from: "Vasco Da Gama", distance: "~135 km", stationCode: "VSG" },
];

const BelagaviSection = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <GlowCursor color="218, 165, 32" />
    <FloatingOrb size={250} color="gold" position="top-right" delay={2} />

    <div className="container relative" style={{ zIndex: 5 }}>
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-2"
        >
          {"// Explore the City"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground"
        >
          About Belagavi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Belagavi (Belgaum) is a vibrant city in northern Karnataka known for its rich history, pleasant climate, and proximity to stunning natural attractions.
        </motion.p>
      </div>

      {/* Tourist Places */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
        >
          <MapPin size={20} className="text-accent" />
          Nearest Tourist Places
          <PulsingDot color="accent" size={1.5} />
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {touristPlaces.map((place, i) => (
            <motion.a
              key={place.name}
              href={place.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "hsl(var(--accent))" }}
              className="group block rounded-lg p-5 border border-border bg-background hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.05), transparent 70%)",
                }}
              />
              <div className="flex items-start justify-between mb-2 relative">
                <h4 className="font-heading text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {place.name}
                </h4>
                <ExternalLink size={14} className="text-muted-foreground shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed relative">
                {place.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Travel Routes */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
        >
          <Plane size={20} className="text-accent" />
          How to Reach Belagavi by Flight
        </motion.h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {travelRoutes.map((route, i) => (
            <motion.div
              key={route.from}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-lg p-5 border border-border bg-background hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                {route.from} {route.airportCode !== "—" && (
                  <span className="text-accent font-mono text-xs ml-1">({route.airportCode})</span>
                )}
              </h4>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <p><span className="font-medium text-foreground">Distance:</span> {route.distance}</p>
                <p><span className="font-medium text-foreground">Travel Time:</span> {route.duration}</p>
                <p><span className="font-medium text-foreground">Airlines:</span> {route.airlines}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Train Routes */}
      <div className="mt-16">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
        >
          <Train size={20} className="text-accent" />
          How to Reach Belagavi by Train
        </motion.h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {trainRoutes.map((route, i) => (
            <motion.div
              key={route.from}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-lg p-5 border border-border bg-background hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                {route.from}{" "}
                <span className="text-accent font-mono text-xs ml-1">({route.stationCode})</span>
              </h4>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <p><span className="font-medium text-foreground">Distance:</span> {route.distance}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BelagaviSection;

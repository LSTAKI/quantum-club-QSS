import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import campusImage from "@/assets/campus.jpg";

const VenueSection = () => (
  <section id="venue" className="py-24 bg-surface">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={campusImage}
            alt="VTU Belagavi Campus"
            className="rounded-lg shadow-card object-cover w-full aspect-[4/3]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Host Institution
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Visvesvaraya Technological University
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Visvesvaraya Technological University (VTU), established on 1 April 1998, is one of the largest technological universities in India. Named after the legendary engineer and statesman Sir M. Visvesvaraya, VTU affiliates over 200 colleges across Karnataka with a motto of "Above all, be human" (Modalu Manavanagu).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Headquartered in Machhe, Belagavi, Karnataka, VTU offers undergraduate, postgraduate, and doctoral programs in engineering, technology, and allied sciences — driving innovation and academic excellence across the state.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin size={18} className="text-accent" />
            <span className="text-sm">Belagavi, Karnataka, India</span>
          </div>
          <Button variant="default" size="default">
            <ExternalLink size={16} className="mr-2" />
            Visit VTU
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VenueSection;

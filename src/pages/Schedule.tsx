import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import GlowCursor from "@/components/GlowCursor";
import { GridOverlay, ScanLine } from "@/components/TechEffects";
import { Calendar, Clock, MapPin } from "lucide-react";

const defaultSchedule = [
  { id: "1", day_number: 1, title: "Registration & Welcome", description: "Check-in and welcome kit distribution", start_time: "2026-04-16T08:00:00Z", end_time: "2026-04-16T09:00:00Z", location: "Main Hall", display_order: 0 },
  { id: "2", day_number: 1, title: "Inaugural Ceremony", description: "Opening address by Chief Patron", start_time: "2026-04-16T09:00:00Z", end_time: "2026-04-16T10:00:00Z", location: "Auditorium", display_order: 1 },
  { id: "3", day_number: 1, title: "Plenary Talk 1", description: "Keynote on Quantum Computing Foundations", start_time: "2026-04-16T10:30:00Z", end_time: "2026-04-16T12:00:00Z", location: "Auditorium", display_order: 2 },
  { id: "4", day_number: 1, title: "Poster Presentations", description: "Interactive poster session", start_time: "2026-04-16T13:00:00Z", end_time: "2026-04-16T15:00:00Z", location: "Exhibition Hall", display_order: 3 },
  { id: "5", day_number: 1, title: "Panel Discussion", description: "Undergraduate Research in India", start_time: "2026-04-16T15:30:00Z", end_time: "2026-04-16T17:00:00Z", location: "Auditorium", display_order: 4 },
  { id: "6", day_number: 2, title: "Plenary Talk 2", description: "Quantum Cryptography and Security", start_time: "2026-04-17T09:00:00Z", end_time: "2026-04-17T10:30:00Z", location: "Auditorium", display_order: 5 },
  { id: "7", day_number: 2, title: "Qubitathon Kickoff", description: "Problem statements revealed, team work begins", start_time: "2026-04-17T11:00:00Z", end_time: "2026-04-17T16:00:00Z", location: "Lab Complex", display_order: 6 },
  { id: "8", day_number: 2, title: "Qubitathon Presentations & Judging", description: "Teams present prototypes", start_time: "2026-04-17T16:00:00Z", end_time: "2026-04-17T17:30:00Z", location: "Auditorium", display_order: 7 },
  { id: "9", day_number: 2, title: "Valedictory & Awards", description: "Closing ceremony and prize distribution", start_time: "2026-04-17T17:30:00Z", end_time: "2026-04-17T18:30:00Z", location: "Auditorium", display_order: 8 },
];

const formatTime = (t: string) =>
  new Date(t).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });

const Schedule = () => {
  const { data: schedule } = useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      const { data } = await supabase.from("schedule").select("*").order("day_number").order("display_order");
      return data && data.length > 0 ? data : defaultSchedule;
    },
  });

  const items = schedule || defaultSchedule;
  const days = [...new Set(items.map((s) => s.day_number))].sort();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="relative py-20 md:py-28 bg-surface overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-20">
            <ParticleField />
          </div>
          <GridOverlay />
          <GlowCursor />
          <ScanLine />

          <div className="container max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 relative"
              >
                <Calendar className="w-8 h-8 text-gold" />
                <motion.div
                  className="absolute inset-0 rounded-full border border-gold/30"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Event Schedule</h1>
              <p className="text-muted-foreground mt-3 font-mono">
                <span className="text-accent/60">[</span> 16 – 17 April 2026 · Two Days of Quantum Exploration <span className="text-accent/60">]</span>
              </p>
              <motion.div
                className="mx-auto mt-4 h-px max-w-[250px]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5), transparent)" }}
              />
            </motion.div>

            {days.map((day) => (
              <div key={day} className="mb-12">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
                >
                  <motion.span
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-mono font-bold text-lg border border-accent/20"
                    whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent) / 0.5)" }}
                  >
                    {day}
                  </motion.span>
                  Day {day}
                </motion.h2>

                <div className="space-y-4 relative">
                  {/* Animated timeline line */}
                  <motion.div
                    className="absolute left-5 top-0 bottom-0 w-px"
                    style={{ background: "linear-gradient(180deg, hsl(var(--accent) / 0.5), hsl(var(--accent) / 0.1))" }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{ transformOrigin: "top", background: "linear-gradient(180deg, hsl(var(--accent) / 0.5), hsl(var(--accent) / 0.1))" }}
                  />

                  {items
                    .filter((s) => s.day_number === day)
                    .map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-14"
                      >
                        {/* Glowing timeline dot */}
                        <motion.div
                          className="absolute left-3.5 top-4 w-3 h-3 rounded-full bg-accent border-2 border-background z-10"
                          whileInView={{ boxShadow: ["0 0 0px hsl(var(--accent))", "0 0 8px hsl(var(--accent))", "0 0 0px hsl(var(--accent))"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />

                        <motion.div
                          className="tech-card rounded-xl p-5"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 className="font-heading font-semibold text-foreground text-lg">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                          <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-accent" />
                              {formatTime(item.start_time)}
                              {item.end_time && ` – ${formatTime(item.end_time)}`}
                            </span>
                            {item.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-gold" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;

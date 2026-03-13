import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

const defaultSchedule = [
  { id: "1", day_number: 1, title: "Registration & Welcome", description: "Check-in and welcome kit distribution", start_time: "2026-04-10T08:00:00Z", end_time: "2026-04-10T09:00:00Z", location: "Main Hall", display_order: 0 },
  { id: "2", day_number: 1, title: "Inaugural Ceremony", description: "Opening address by Chief Patron", start_time: "2026-04-10T09:00:00Z", end_time: "2026-04-10T10:00:00Z", location: "Auditorium", display_order: 1 },
  { id: "3", day_number: 1, title: "Plenary Talk 1", description: "Keynote on Quantum Computing Foundations", start_time: "2026-04-10T10:30:00Z", end_time: "2026-04-10T12:00:00Z", location: "Auditorium", display_order: 2 },
  { id: "4", day_number: 1, title: "Poster Presentations", description: "Interactive poster session", start_time: "2026-04-10T13:00:00Z", end_time: "2026-04-10T15:00:00Z", location: "Exhibition Hall", display_order: 3 },
  { id: "5", day_number: 1, title: "Panel Discussion", description: "Undergraduate Research in India", start_time: "2026-04-10T15:30:00Z", end_time: "2026-04-10T17:00:00Z", location: "Auditorium", display_order: 4 },
  { id: "6", day_number: 2, title: "Plenary Talk 2", description: "Quantum Cryptography and Security", start_time: "2026-04-11T09:00:00Z", end_time: "2026-04-11T10:30:00Z", location: "Auditorium", display_order: 5 },
  { id: "7", day_number: 2, title: "Qubitathon Kickoff", description: "Problem statements revealed, team work begins", start_time: "2026-04-11T11:00:00Z", end_time: "2026-04-11T16:00:00Z", location: "Lab Complex", display_order: 6 },
  { id: "8", day_number: 2, title: "Qubitathon Presentations & Judging", description: "Teams present prototypes", start_time: "2026-04-11T16:00:00Z", end_time: "2026-04-11T17:30:00Z", location: "Auditorium", display_order: 7 },
  { id: "9", day_number: 2, title: "Valedictory & Awards", description: "Closing ceremony and prize distribution", start_time: "2026-04-11T17:30:00Z", end_time: "2026-04-11T18:30:00Z", location: "Auditorium", display_order: 8 },
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
        <section className="py-20 md:py-28 bg-surface">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4"
              >
                <Calendar className="w-8 h-8 text-gold" />
              </motion.div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Event Schedule</h1>
              <p className="text-muted-foreground mt-3">10 – 11 April 2026 · Two Days of Quantum Exploration</p>
            </motion.div>

            {days.map((day) => (
              <div key={day} className="mb-12">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
                >
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                    {day}
                  </span>
                  Day {day}
                </motion.h2>

                <div className="space-y-4 relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-border/50" />

                  {items
                    .filter((s) => s.day_number === day)
                    .map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="relative pl-14"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-3.5 top-4 w-3 h-3 rounded-full bg-accent border-2 border-background z-10" />

                        <div className="rounded-xl border border-border/50 bg-card p-5 shadow-card hover:shadow-card-hover transition-shadow">
                          <h3 className="font-heading font-semibold text-foreground text-lg">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                          <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
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
                        </div>
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

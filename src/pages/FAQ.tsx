import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const defaultFaqs = [
  { id: "1", question: "What is the Quantum Student Summit?", answer: "The Quantum Student Summit is a premier student-driven conference organized by VTU Quantum Club, bringing together students, faculty, and industry professionals to explore quantum computing, physics, and related fields.", display_order: 0 },
  { id: "2", question: "Who can attend the summit?", answer: "The summit is open to all undergraduate and postgraduate students from any institution. Faculty members and industry professionals are also welcome.", display_order: 1 },
  { id: "3", question: "Is there a registration fee?", answer: "Please check the registration page for the latest information on fees and early bird discounts.", display_order: 2 },
  { id: "4", question: "What events are included?", answer: "The summit includes Poster Presentations, Qubitathon (ideathon), Plenary Talks, and Panel Discussions with distinguished speakers.", display_order: 3 },
  { id: "5", question: "Will accommodation be provided?", answer: "Accommodation details will be shared with registered participants. Please register early to secure your spot.", display_order: 4 },
  { id: "6", question: "How do I submit a poster?", answer: "Check the Events page for topics and rulebook links. Submissions are through the registration portal.", display_order: 5 },
];

const FAQ = () => {
  const { data: faqs } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data } = await supabase.from("faqs").select("*").order("display_order");
      return data && data.length > 0 ? data : defaultFaqs;
    },
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 md:py-28 bg-surface">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
              >
                <HelpCircle className="w-8 h-8 text-accent" />
              </motion.div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground mt-3">Everything you need to know about the summit</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {(faqs || defaultFaqs).map((faq, i) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <AccordionItem
                      value={faq.id}
                      className="rounded-lg border border-border/50 bg-card px-6 shadow-card"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

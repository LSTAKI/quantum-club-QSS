import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const update = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [f]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(form);
    setLoading(false);
    if (error) {
      toast({ title: "Failed to send", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "VTU, Machhe, Belagavi, Karnataka 590018" },
    { icon: Mail, label: "Email", value: "quantumclub@vtu.ac.in" },
    { icon: Phone, label: "Phone", value: "+91 831 249 8900" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 md:py-28 bg-surface">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h1>
              <p className="text-muted-foreground mt-3">Have questions? We'd love to hear from you.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{c.label}</p>
                      <p className="text-muted-foreground text-sm">{c.value}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-xl overflow-hidden border border-border/50 shadow-card h-64"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.123!2d74.5616!3d15.8121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf67ac8e!2sVisvesvaraya+Technological+University!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="VTU Location"
                  />
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border/50 bg-card p-8 shadow-card">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={form.name} onChange={update("name")} required placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={update("email")} required placeholder="you@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" value={form.message} onChange={update("message")} required rows={5} placeholder="Tell us more..." />
                  </div>
                  <Button type="submit" variant="gold" className="w-full" size="lg" disabled={loading}>
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

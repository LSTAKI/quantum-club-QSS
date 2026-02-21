import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import SpeakersSection from "@/components/SpeakersSection";
import TeamSection from "@/components/TeamSection";

import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import talk1 from "@/assets/talk-1.jpg";
import talk2 from "@/assets/talk-2.jpg";
import plenary1 from "@/assets/plenary-1.jpg";
import plenary2 from "@/assets/plenary-2.jpg";
import panelImg from "@/assets/panel-discussion.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const panelists = [
  { name: "Dr. Anil Kumar", affiliation: "IISc Bangalore, Dept. of Physics" },
  { name: "Dr. Priya Natarajan", affiliation: "IIT Madras, Quantum Computing Lab" },
  { name: "Dr. Rajesh Gopakumar", affiliation: "ICTS-TIFR, Theoretical Sciences" },
  { name: "Dr. Sanhita Sinharay", affiliation: "IISc Bangalore, Molecular Sciences" },
  { name: "Dr. Vijay Kumar", affiliation: "VTU Belagavi, Applied Physics" },
];

const REGISTER_URL = "#";

const Events = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Video Advertisement Hero */}
    <VideoHero />

    {/* Poster Presentations — text left, images right */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Interactive Session
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Poster Presentations
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Step into our poster hall where undergraduate researchers showcase their quantum science discoveries in an intimate, interactive setting. Engage directly with presenters, ask questions, and explore cutting-edge student research across quantum computing, quantum optics, and condensed matter physics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This session is designed for meaningful one-on-one conversations, fostering networking opportunities between students, faculty mentors, and industry professionals.
            </p>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg">
                Register Now
              </Button>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 grid-rows-2 gap-3 h-[360px]"
          >
            <img src={poster1} alt="Students at poster boards" className="col-span-2 row-span-1 rounded-lg object-cover w-full h-full shadow-card" />
            <img src={poster2} alt="Student explaining research" className="col-span-1 row-span-2 rounded-lg object-cover w-full h-full shadow-card" />
            <img src={poster3} alt="Poster session crowd" className="col-span-2 row-span-1 rounded-lg object-cover w-full h-full shadow-card" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Student Talks — images left, text right */}
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 gap-3 h-[360px] order-2 md:order-1"
          >
            <img src={talk1} alt="Student speaking at podium" className="col-span-1 row-span-2 rounded-lg object-cover w-full h-full shadow-card" />
            <img src={talk2} alt="Student presenter with slides" className="col-span-1 row-span-2 rounded-lg object-cover w-full h-full shadow-card" />
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 md:order-2">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Spotlight
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Student Talks
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A platform for emerging quantum researchers to present their bold ideas and novel findings to a live audience. These talks shine a spotlight on undergraduate talent pushing the boundaries of quantum science.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From quantum error correction to entanglement-based communication protocols, student talks cover the full spectrum of contemporary quantum research — delivered with passion and precision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Plenary Talks — text left, images right */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Keynote
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plenary Talks
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hear from leading experts and distinguished researchers sharing their latest breakthroughs and visions for the future of quantum science. Plenary sessions bring together the brightest minds in the field for talks that inspire and challenge.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These sessions cover grand themes — from the foundations of quantum mechanics to real-world applications in quantum computing, cryptography, and materials science.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 h-[360px]"
          >
            <img src={plenary1} alt="Distinguished speaker lecturing" className="rounded-lg object-cover w-full h-full shadow-card" />
            <img src={plenary2} alt="Expert presenting research" className="rounded-lg object-cover w-full h-full shadow-card" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Panel Discussion — images left, text right */}
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="order-2 md:order-1">
            <img
              src={panelImg}
              alt="Panel discussion at the summit"
              className="rounded-lg object-cover w-full aspect-[4/3] shadow-card"
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 md:order-2">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Discussion
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Panel Discussion
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 italic">
              "Undergraduate Research in India: Purpose, Passion, and the Pursuit of Quantum Science"
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              An engaging conversation featuring distinguished panelists from India's premier research institutions exploring the role of undergraduate research in advancing quantum science.
            </p>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Panelists</h3>
            <ul className="space-y-2">
              {panelists.map((p) => (
                <li key={p.name} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>
                    <strong className="text-foreground">{p.name}</strong> — {p.affiliation}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Speakers */}
    <SpeakersSection />

    {/* Team */}
    <TeamSection />

    <Footer />
  </div>
);

export default Events;

import { motion } from "framer-motion";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import team7 from "@/assets/team-7.jpg";
import team8 from "@/assets/team-8.jpg";
import facultyCoordinator from "@/assets/team-faculty-coordinator.jpg";
import facultyAdvisor from "@/assets/team-faculty-advisor.jpg";

const faculty = [
  {
    name: "Dr. R. H. Goudar",
    role: "Faculty Coordinator",
  
    image: "https://vtu.ac.in/wp-content/uploads/2020/01/rhg.jpg",
  },
  {
    name: "Dr. Harish B",
    role: "Faculty Advisor",
    
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163344/Harish_Sir_3_hbkvpk.jpg",
  },
];

const team = [
  {
    name: "KARTHIK RAO R",
    role: "Chair, VTU Quantum Club",
    quote: "Leading from the front to shape the future of quantum at VTU.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764170746/karthik_bhai_4_x8awnz.jpg",
  },
  {
    name: "Arun Mallikarjun Hikadi",
    role: "Technical Committee Lead",
    quote: "Turning complex quantum concepts into hands-on technical experiences.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764157705/Arun_H_3_ddcyq1.jpg",
  },
  {
    name: "TAKI ALTAF TAJUDDIN MULLA",
    role: "Web Designing Committee Lead",
    quote: "Crafting digital experiences that bring quantum science to every screen.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163560/Taki-1_xrbrpz.jpg",
  },
  {
    name: "Rehan Nadaf",
    role: "Social Media Committee Lead",
    quote: "Amplifying quantum stories across platforms to inspire the next generation.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164135/IMG_20251027_131513_292_-_Rehan_Nadaf-02_fij9fm.jpg",
  },
  {
    name: "Varun Kambar",
    role: "Members Development Committee Lead",
    quote: "Nurturing talent and empowering every member to grow as a quantum enthusiast.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163809/20251125_080215_-_Arun_H_tjrzx2.jpg",
  },
  {
    name: "Shreya N Bannadanulmath",
    role: "Event Coordination Committee Lead",
    quote: "Orchestrating seamless events where great ideas and great minds converge.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164447/IMG_my_photo_-_Shreya_N_B-01_jy9tif.jpg",
  },
  {
    name: "Vaishnavi K S",
    role: "Industry Relations Committee Lead",
    quote: "Bridging academia and industry to unlock real-world quantum opportunities.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764153344/Vaishnavi_K_S_ig06zo.jpg",
  },
];

const TeamSection = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container">
      {/* Faculty Section */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
          Guiding Forces
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Faculty
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-20">
        {faculty.map((m, i) => (
          <motion.div
            key={m.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gold/30 group-hover:border-gold transition-colors duration-300">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {m.name}
            </h3>
            <p className="text-xs text-gold font-medium">{m.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Student Team Section */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
          The People Behind It
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Meet Our Team
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-gold transition-colors duration-300">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {m.name}
            </h3>
            <p className="text-xs text-accent font-medium mb-3">{m.role}</p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{m.quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;

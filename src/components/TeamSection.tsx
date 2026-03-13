import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Linkedin, X } from "lucide-react";

// Static fallback data for patrons & faculty (not admin-editable)
const chiefPatron = {
  name: "Vice Chancellor, VTU",
  role: "Chief Patron",
  quote: "Empowering innovation and excellence through quantum education.",
  image: "https://vtu.ac.in/wp-content/uploads/2024/08/vcne.jpg",
};

const patrons = [
  { name: "Registrar, VTU", role: "Patron", quote: "Supporting the vision of a quantum-ready future for every student.", image: "https://vtu.ac.in/wp-content/uploads/2025/10/5.png" },
  { name: "Registrar (Evaluation), VTU", role: "Patron", quote: "Ensuring academic excellence meets cutting-edge quantum research.", image: "https://vtu.ac.in/wp-content/uploads/2025/10/4.png" },
  { name: "Finance Officer, VTU", role: "Patron", quote: "Investing in the quantum frontier for a brighter tomorrow.", image: "https://vtu.ac.in/wp-content/uploads/2025/02/fo11.jpg" },
];

const faculty = [
  { name: "Dr. R. H. Goudar", role: "Faculty Coordinator", image: "https://vtu.ac.in/wp-content/uploads/2020/01/rhg.jpg" },
  { name: "Dr. Harish B", role: "Faculty Advisor", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163344/Harish_Sir_3_hbkvpk.jpg" },
];

// Committee definitions
const committees = [
  { key: "leadership", label: "Student Leadership" },
  { key: "accommodation", label: "Accommodation Committee" },
  { key: "food", label: "Food Committee" },
  { key: "sponsorship", label: "Sponsorship Committee" },
  { key: "transportation", label: "Transportation Committee" },
  { key: "technical", label: "Technical Committee" },
  { key: "web", label: "Web Designing Committee" },
  { key: "social_media", label: "Social Media Committee" },
  { key: "members_dev", label: "Members Development Committee" },
  { key: "event_coord", label: "Event Coordination Committee" },
  { key: "industry", label: "Industry Relations Committee" },
];

const defaultTeam = [
  { id: "1", name: "KARTHIK RAO R", role: "Chair, VTU Quantum Club", committee: "leadership", quote: "Leading from the front to shape the future of quantum at VTU.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764170746/karthik_bhai_4_x8awnz.jpg", email: "", phone: "", linkedin_url: "", display_order: 0 },
  { id: "2", name: "Arun Mallikarjun Hikadi", role: "Technical Committee Lead", committee: "technical", quote: "Turning complex quantum concepts into hands-on technical experiences.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764157705/Arun_H_3_ddcyq1.jpg", email: "", phone: "", linkedin_url: "", display_order: 1 },
  { id: "3", name: "TAKI ALTAF TAJUDDIN MULLA", role: "Web Designing Committee Lead", committee: "web", quote: "Crafting digital experiences that bring quantum science to every screen.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163560/Taki-1_xrbrpz.jpg", email: "", phone: "", linkedin_url: "", display_order: 2 },
  { id: "4", name: "Rehan Nadaf", role: "Social Media Committee Lead", committee: "social_media", quote: "Amplifying quantum stories across platforms to inspire the next generation.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164135/IMG_20251027_131513_292_-_Rehan_Nadaf-02_fij9fm.jpg", email: "", phone: "", linkedin_url: "", display_order: 3 },
  { id: "5", name: "Varun Kambar", role: "Members Development Committee Lead", committee: "members_dev", quote: "Nurturing talent and empowering every member to grow as a quantum enthusiast.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163809/20251125_080215_-_Arun_H_tjrzx2.jpg", email: "", phone: "", linkedin_url: "", display_order: 4 },
  { id: "6", name: "Shreya N Bannadanulmath", role: "Event Coordination Committee Lead", committee: "event_coord", quote: "Orchestrating seamless events where great ideas and great minds converge.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164447/IMG_my_photo_-_Shreya_N_B-01_jy9tif.jpg", email: "", phone: "", linkedin_url: "", display_order: 5 },
  { id: "7", name: "Vaishnavi K S", role: "Industry Relations Committee Lead", committee: "industry", quote: "Bridging academia and industry to unlock real-world quantum opportunities.", image_url: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764153344/Vaishnavi_K_S_ig06zo.jpg", email: "", phone: "", linkedin_url: "", display_order: 6 },
];

interface TeamMember {
  id: string;
  name: string;
  role: string;
  committee: string;
  quote?: string;
  image_url?: string;
  email?: string;
  phone?: string;
  linkedin_url?: string;
  display_order: number;
}

const PersonCard = ({
  name, role, quote, image, size = "w-40 h-40", borderColor = "border-gold/30", delay = 0, onClick,
}: {
  name: string; role: string; quote?: string; image: string;
  size?: string; borderColor?: string; delay?: number; onClick?: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group text-center ${onClick ? "cursor-pointer" : ""}`}
    onClick={onClick}
    whileHover={onClick ? { scale: 1.05 } : undefined}
  >
    <div className={`relative ${size} mx-auto mb-5 rounded-full overflow-hidden border-4 ${borderColor} group-hover:border-gold transition-all duration-300`}>
      <img src={image} alt={name} className="w-full h-full object-cover" />
      {onClick && (
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-semibold transition-opacity">View Details</span>
        </div>
      )}
    </div>
    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{name}</h3>
    <p className="text-xs text-gold font-medium mb-3">{role}</p>
    {quote && <p className="text-sm text-muted-foreground italic leading-relaxed max-w-xs mx-auto">"{quote}"</p>}
  </motion.div>
);

// Contact details modal
const ContactModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-card rounded-2xl border border-border/50 shadow-card-hover p-8 max-w-sm w-full text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
        <X className="w-5 h-5" />
      </button>
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold/40 mx-auto mb-4">
        <img src={member.image_url || ""} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
      <p className="text-sm text-gold font-medium mb-4">{member.role}</p>
      {member.quote && <p className="text-sm text-muted-foreground italic mb-6">"{member.quote}"</p>}
      <div className="space-y-3">
        {member.email && (
          <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm text-accent hover:text-gold transition-colors">
            <Mail className="w-4 h-4" /> {member.email}
          </a>
        )}
        {member.phone && (
          <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-sm text-accent hover:text-gold transition-colors">
            <Phone className="w-4 h-4" /> {member.phone}
          </a>
        )}
        {member.linkedin_url && (
          <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm text-accent hover:text-gold transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn Profile
          </a>
        )}
        {!member.email && !member.phone && !member.linkedin_url && (
          <p className="text-sm text-muted-foreground">Contact details coming soon</p>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const { data: teamMembers } = useQuery({
    queryKey: ["team_members"],
    queryFn: async () => {
      const { data } = await supabase.from("team_members").select("*").order("display_order");
      return data && data.length > 0 ? (data as TeamMember[]) : defaultTeam;
    },
  });

  const members = teamMembers || defaultTeam;

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        {/* Chief Patron */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">Honourable</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Chief Patron</h2>
        </div>
        <div className="flex justify-center mb-20">
          <PersonCard {...chiefPatron} image={chiefPatron.image} size="w-44 h-44" borderColor="border-gold/40" />
        </div>

        {/* Patrons */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">Esteemed</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Patrons</h2>
        </div>
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <PersonCard {...patrons[0]} image={patrons[0].image} />
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {patrons.slice(1).map((m, i) => (
              <PersonCard key={m.name} {...m} image={m.image} delay={(i + 1) * 0.1} />
            ))}
          </div>
        </div>

        {/* Faculty */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">Guiding Forces</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Faculty</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-20">
          {faculty.map((m, i) => (
            <PersonCard key={m.role} {...m} image={m.image} delay={i * 0.1} />
          ))}
        </div>

        {/* Committee Leads */}
        {committees.map((committee) => {
          const committeeMembers = members.filter((m) => m.committee === committee.key);
          if (committeeMembers.length === 0) return null;
          return (
            <div key={committee.key} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                  {committee.key === "leadership" ? "The People Behind It" : "Committee"}
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{committee.label}</h2>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {committeeMembers.map((m, i) => (
                  <PersonCard
                    key={m.id}
                    name={m.name}
                    role={m.role}
                    quote={m.quote}
                    image={m.image_url || ""}
                    borderColor="border-accent/20"
                    delay={i * 0.1}
                    onClick={() => setSelectedMember(m)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {selectedMember && (
          <ContactModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;

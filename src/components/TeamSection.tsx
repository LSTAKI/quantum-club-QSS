import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, X, Code, Globe, Palette } from "lucide-react";

// ── Static Data ──────────────────────────────────────────────────────

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

const chairperson = {
  name: "KARTHIK RAO R",
  role: "Chairperson, VTU Quantum Club",
  quote: "Leading from the front to shape the future of quantum at VTU.",
  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764170746/karthik_bhai_4_x8awnz.jpg",
  email: "",
  phone: "",
  linkedin: "",
};

interface CommitteeMember {
  name: string;
  role: string;
  quote?: string;
  image: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

const committees: { key: string; label: string; members: CommitteeMember[] }[] = [
  {
    key: "helpdesk",
    label: "Help Desk Committee",
    members: [
      { name: "Help Desk Lead", role: "Committee Lead", quote: "Ensuring every attendee has an exceptional experience.", image: "https://via.placeholder.com/300x300?text=HD+Lead" },
    ],
  },
  {
    key: "technical",
    label: "Technical Committee",
    members: [
      { name: "Arun Mallikarjun Hikadi", role: "Technical Committee Lead", quote: "Turning complex quantum concepts into hands-on technical experiences.", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764157705/Arun_H_3_ddcyq1.jpg" },
    ],
  },
  {
    key: "accommodation",
    label: "Accommodation Committee",
    members: [
      { name: "Accommodation Lead", role: "Committee Lead", quote: "Making sure every guest feels at home.", image: "https://via.placeholder.com/300x300?text=Acc+Lead" },
    ],
  },
  {
    key: "food",
    label: "Food Committee",
    members: [
      { name: "Food Committee Lead", role: "Committee Lead", quote: "Fueling great minds with great food.", image: "https://via.placeholder.com/300x300?text=Food+Lead" },
    ],
  },
  {
    key: "sponsorship",
    label: "Sponsorship Committee",
    members: [
      { name: "Sponsorship Lead", role: "Committee Lead", quote: "Building partnerships that power innovation.", image: "https://via.placeholder.com/300x300?text=Spon+Lead" },
    ],
  },
  {
    key: "registration",
    label: "Registration Committee",
    members: [
      { name: "Registration Lead", role: "Committee Lead", quote: "Streamlining registrations for a seamless experience.", image: "https://via.placeholder.com/300x300?text=Reg+Lead" },
    ],
  },
  {
    key: "social_media",
    label: "Social Media Committee",
    members: [
      { name: "Rehan Nadaf", role: "Social Media Committee Lead", quote: "Amplifying quantum stories across platforms to inspire the next generation.", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164135/IMG_20251027_131513_292_-_Rehan_Nadaf-02_fij9fm.jpg" },
    ],
  },
  {
    key: "transportation",
    label: "Transportation Committee",
    members: [
      { name: "Transportation Lead", role: "Committee Lead", quote: "Ensuring smooth journeys for all attendees.", image: "https://via.placeholder.com/300x300?text=Trans+Lead" },
    ],
  },
];

const developers: (CommitteeMember & { contribution: string; icon: typeof Code })[] = [
  { name: "Developer 1", role: "Lead Developer", contribution: "Full-stack development & architecture", icon: Code, quote: "Building the digital backbone of Quantum Club.", image: "https://via.placeholder.com/300x300?text=Dev+1" },
  { name: "Developer 2", role: "Frontend Developer", contribution: "UI/UX design & animations", icon: Palette, quote: "Crafting immersive experiences pixel by pixel.", image: "https://via.placeholder.com/300x300?text=Dev+2" },
  { name: "Developer 3", role: "Backend Developer", contribution: "API development & database management", icon: Globe, quote: "Powering the platform behind the scenes.", image: "https://via.placeholder.com/300x300?text=Dev+3" },
];

// ── Reusable Components ─────────────────────────────────────────────

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

const ContactModal = ({ member, onClose }: { member: CommitteeMember & { contribution?: string }; onClose: () => void }) => (
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
      className="relative bg-card rounded-2xl border border-border/50 shadow-card-hover p-8 max-w-sm w-full text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
        <X className="w-5 h-5" />
      </button>
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold/40 mx-auto mb-4">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
      <p className="text-sm text-gold font-medium mb-2">{member.role}</p>
      {member.contribution && <p className="text-xs text-accent font-mono mb-2">{member.contribution}</p>}
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
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm text-accent hover:text-gold transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn Profile
          </a>
        )}
        {!member.email && !member.phone && !member.linkedin && (
          <p className="text-sm text-muted-foreground">Contact details coming soon</p>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const SectionHeading = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-10"
  >
    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">{subtitle}</p>
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
  </motion.div>
);

// ── Main Component ──────────────────────────────────────────────────

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<(CommitteeMember & { contribution?: string }) | null>(null);

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        {/* Chief Patron */}
        <SectionHeading subtitle="Honourable" title="Chief Patron" />
        <div className="flex justify-center mb-20">
          <PersonCard {...chiefPatron} size="w-44 h-44" borderColor="border-gold/40" />
        </div>

        {/* Patrons */}
        <SectionHeading subtitle="Esteemed" title="Patrons" />
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <PersonCard {...patrons[0]} image={patrons[0].image} />
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {patrons.slice(1).map((m, i) => (
              <PersonCard key={m.name} {...m} delay={(i + 1) * 0.1} />
            ))}
          </div>
        </div>

        {/* Faculty */}
        <SectionHeading subtitle="Guiding Forces" title="Faculty" />
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-20">
          {faculty.map((m, i) => (
            <PersonCard key={m.role} {...m} delay={i * 0.1} />
          ))}
        </div>

        {/* Chairperson */}
        <SectionHeading subtitle="The Leader" title="Chairperson" />
        <div className="flex justify-center mb-20">
          <PersonCard
            name={chairperson.name}
            role={chairperson.role}
            quote={chairperson.quote}
            image={chairperson.image}
            size="w-44 h-44"
            borderColor="border-accent/40"
            onClick={() => setSelectedMember(chairperson)}
          />
        </div>

        {/* Committees */}
        {committees.map((committee) => (
          <div key={committee.key} className="mb-16">
            <SectionHeading subtitle="Committee" title={committee.label} />
            <div className={`grid ${committee.members.length === 1 ? "place-items-center" : "sm:grid-cols-2 lg:grid-cols-3"} gap-8 max-w-4xl mx-auto`}>
              {committee.members.map((m, i) => (
                <PersonCard
                  key={m.name}
                  name={m.name}
                  role={m.role}
                  quote={m.quote}
                  image={m.image}
                  borderColor="border-accent/20"
                  delay={i * 0.1}
                  onClick={() => setSelectedMember(m)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Developers Section */}
        <div className="mt-8 mb-16">
          <SectionHeading subtitle="Built With ❤️ By" title="Website Developers" />
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {developers.map((dev, i) => {
              const Icon = dev.icon;
              return (
                <motion.div
                  key={dev.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group text-center cursor-pointer"
                  onClick={() => setSelectedMember(dev)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-accent/30 group-hover:border-gold transition-all duration-300">
                    <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-semibold transition-opacity">View Details</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{dev.name}</h3>
                  <p className="text-xs text-gold font-medium mb-1">{dev.role}</p>
                  <p className="text-xs text-accent font-mono flex items-center justify-center gap-1">
                    <Icon className="w-3 h-3" /> {dev.contribution}
                  </p>
                  {dev.quote && <p className="text-sm text-muted-foreground italic leading-relaxed max-w-xs mx-auto mt-3">"{dev.quote}"</p>}
                </motion.div>
              );
            })}
          </div>
        </div>
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

const sponsors = [
  "QuantumTech Labs",
  "National Science Foundation",
  "VTU Belagavi",
  "Google Quantum AI",
  "Microsoft Azure Quantum",
  "IISER Tirupati",
  "DST India",
  "Qiskit Community",
];

const SponsorsBar = () => (
  <section id="sponsors" className="py-16 bg-surface">
    <div className="container text-center mb-10">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-2">
        Our Sponsors & Partners
      </p>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
        Supported by Leading Institutions
      </h2>
    </div>

    {/* Scrolling strip */}
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll-x w-max gap-16 px-8">
        {[...sponsors, ...sponsors].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center h-16 px-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
          >
            <span className="text-lg font-heading font-semibold text-foreground whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SponsorsBar;

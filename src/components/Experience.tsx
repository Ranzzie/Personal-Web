const Experience = () => {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Network Operations Center (NOC) Team",
      company: "SMKN 2 Depok Sleman",
      points: [
        "Monitor and maintain school network infrastructure",
        "Assist in troubleshooting network connectivity issues",
        "Learn and implement network security best practices",
        "Support IT operations and technical documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-6 border-t border-border/60">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Experience
          </h2>
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        <div className="relative ml-3 border-l border-primary/20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-10 ${index !== experiences.length - 1 ? "pb-12" : ""}`}
            >
              <div
                className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                  index === 0
                    ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                    : index === 1
                    ? "bg-primary/45"
                    : "bg-primary/25"
                }`}
              />
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold">
                  {exp.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{exp.company}</p>
                <ul className="pt-2 space-y-2 text-muted-foreground">
                  {exp.points.map((point) => (
                    <li key={point}>▹ {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

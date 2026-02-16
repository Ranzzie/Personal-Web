const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 border-t border-border/60">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-px flex-1 bg-primary/30" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card/30 shadow-[0_0_30px_hsl(var(--primary)/0.12)]">
          <div className="flex items-center justify-between border-b border-primary/20 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/45" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary/80 font-mono">
              bio_rifatraditya.sh
            </span>
          </div>

          <div className="space-y-6 px-5 py-6 font-mono md:px-8 md:py-8">
            <div className="text-xs md:text-sm leading-relaxed">
              <p className="text-primary mb-3">
                root@rifatraditya:~$ whoami
              </p>
              <p className="text-foreground/90">
                Currently in 11th grade at SMKN 2 Depok Sleman, majoring in SIJA (Network &
                Application Systems). I&apos;m actively learning network engineering and system
                administration through classroom studies and hands-on experience in the school&apos;s
                NOC. My focus is building strong foundations in network protocols, server
                management, and security practices.
              </p>
            </div>

            <div className="text-xs md:text-sm leading-relaxed">
              <p className="text-primary mb-3">
                root@rifatraditya:~$ cat passion.txt
              </p>
              <p className="text-foreground/90">
                I&apos;m enthusiastic about exploring new technologies and expanding my skills in
                networking and systems. Through projects like my Armbian Homelab and Discord bot
                development, I continuously apply knowledge to real-world scenarios while preparing
                for a career in IT infrastructure.
              </p>
            </div>

            <div>
              <p className="text-xs md:text-sm text-primary mb-3">
                root@rifatraditya:~$ ls skills/
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] md:text-xs uppercase tracking-[0.15em]">
                {[
                  "Network Architecture",
                  "Systems Administration",
                  "DevOps Practices",
                  "Security Fundamentals",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-border bg-background/60 px-3 py-3 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-primary">root@rifatraditya:~$</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

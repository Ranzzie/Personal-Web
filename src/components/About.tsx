import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const TerminalLine = ({ command, children, showPrompt = true }: { command?: string | React.ReactNode; children?: React.ReactNode; showPrompt?: boolean }) => (
  <div className="text-xs md:text-sm leading-relaxed mb-4">
    {showPrompt && (
      <div className="text-primary mb-1 text-sm md:text-base flex items-center gap-2">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          root@rifatraditya:~$
        </motion.span>
        <span className="text-foreground">{command}</span>
      </div>
    )}
    <div className="text-foreground/90">{children}</div>
  </div>
);

const TypingCommand = ({ text, onComplete, speed = 100 }: { text: string; onComplete: () => void; speed?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [isReady, setIsReady] = useState(false);
  const isComplete = currentText.length === text.length;

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    if (currentText.length < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [currentText, text, onComplete, speed, isReady]);

  return (
    <>
      <span>{currentText}</span>
      {isReady && <span className={`inline-block ml-1 w-2 h-4 bg-white align-middle ${isComplete ? "terminal-blink" : ""}`} />}
    </>
  );
};

const About = () => {
  const [step, setStep] = useState(-1); // -1 = not started
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === -1) {
          setTimeout(() => setStep(0), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [step]);

  useEffect(() => {
    // Auto-advance after instant reveals
    if (step === 1 || step === 3) {
      const timer = setTimeout(() => {
        setStep(s => s + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const nextStep = useCallback(() => setStep(s => s + 1), []);

  const skills = [
    "Network Architecture",
    "Systems Administration",
    "DevOps Practices",
    "Security Fundamentals",
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 md:px-6 border-t border-border/60 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-px flex-1 bg-primary/30" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card/10 backdrop-blur-sm shadow-[0_0_50px_rgba(255,51,102,0.1)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              root@rifatraditya: ~
            </span>
            <div className="w-12" /> {/* spacer */}
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono md:p-10 min-h-[500px] bg-black/40">
            {step >= 0 && (
              <TerminalLine
                command={step === 0 ? < TypingCommand text="whoami" onComplete={nextStep} /> : "whoami"}
              >
                {step >= 1 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    Currently in 11th grade at SMKN 2 Depok Sleman, majoring in SIJA (Network & Application Systems). I'm actively learning network engineering and system administration through classroom studies and hands-on experience in the school's NOC. My focus is building strong foundations in network protocols, server management, and security practices.
                  </motion.p>
                )}
              </TerminalLine>
            )}

            {step >= 2 && (
              <TerminalLine
                command={step === 2 ? <TypingCommand text="cat passion.txt" onComplete={nextStep} /> : "cat passion.txt"}
              >
                {step >= 3 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    I'm enthusiastic about exploring new technologies and expanding my skills in networking and systems. Through projects like my Armbian Homelab and Discord bot development, I continuously apply knowledge to real-world scenarios while preparing for a career in IT infrastructure.
                  </motion.p>
                )}
              </TerminalLine>
            )}

            {step >= 4 && (
              <TerminalLine
                command={step === 4 ? <TypingCommand text="ls skills/" onComplete={nextStep} /> : "ls skills/"}
              >
                {step >= 5 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2,
                          onComplete: index === skills.length - 1 ? nextStep : undefined
                        }}
                        className="border border-primary/20 bg-primary/5 px-4 py-3 text-xs md:text-sm text-foreground/80 flex items-center gap-2 group hover:border-primary/50 transition-colors"
                      >
                        <span className="text-primary opacity-50">#</span>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                )}
              </TerminalLine>
            )}

            {step >= 6 && (
              <div className="text-primary flex items-center gap-2 mt-6">
                <motion.span
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  root@rifatraditya:~$
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0 }}
                  className="w-2 h-4 bg-white terminal-blink"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

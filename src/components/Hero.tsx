import { useState, useEffect } from "react";
import { AtSignIcon } from "./icons/AtSignIcon";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkIcon } from "./icons/LinkIcon";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [canStart, setCanStart] = useState(false);

  const phrases = [
    "NETWORK ENGINEER & SYSTEM ADMINISTRATOR",
    "cable managing",
    "deploying changes",
    "ngombe kopi",
    "turu"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setCanStart(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!canStart) return;

    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause when the phrase is complete
      timeout = setTimeout(() => setIsDeleting(true), 1750);
    } else if (isDeleting && displayText === "") {
      // Move to next phrase after deletion
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(() => { }, 100); // Tiny pause before next phrase starts
    } else {
      // Typing or Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 30 : 60);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, canStart]);

  const isComplete = !isDeleting && displayText === phrases[phraseIndex];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Ranzzie",
      icon: GithubIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/im.rnji/",
      icon: InstagramIcon,
    },
    {
      label: "Email Me?",
      href: "mailto:rifatradityaa@gmail.com",
      icon: AtSignIcon,
    },
    {
      label: "Links Hub",
      href: "https://links.rifatraditya.me/",
      icon: LinkIcon,
    },
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 px-4 md:px-6 font-mono selection:bg-primary selection:text-white overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
      <div className="container mx-auto max-w-5xl text-center relative z-10">


        <div className="mb-10 mx-auto w-fit px-5 py-2 border border-white/5 rounded-full flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm min-h-[42px]">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
          <span className="text-xs font-medium tracking-widest text-white/90 font-mono flex items-center">
            {displayText}
            <span className={`ml-1 w-1.5 h-3.5 bg-white ${isComplete ? "terminal-blink" : ""}`} />
          </span>
        </div>

        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-background/80 blur-2xl rounded-full -z-10" />
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl text-foreground leading-tight pixel-text-shadow relative z-10">
            RIFAT
            <br />
            RADITYA
          </h1>
        </div>

        <div className="relative inline-block mb-12 max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-background/60 blur-xl rounded-full -z-10" />
          <p className="text-[10px] md:text-xs text-muted-foreground tracking-[0.3em] uppercase relative z-10">
            BUILDING ROBUST NETWORK INFRASTRUCTURES
            <br />
            AND MANAGING SCALABLE SYSTEMS WITH EXPERTISE.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className="group relative inline-flex items-center gap-2 border border-primary bg-primary px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,51,102,0.6)]"
          >
            View My Work
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" size={16} />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="group relative inline-flex items-center gap-2 border border-white/10 bg-white/5 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(255,51,102,0.2)]"
          >
            Get In Touch
            <ArrowRightIcon className="h-4 w-3 transition-transform duration-500 group-hover:translate-x-1" size={16} />
          </a>
        </div>

        <div className="mx-auto max-w-xl space-y-3">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border bg-card/10 px-6 py-4 text-left transition-all hover:border-primary glow-hover backdrop-blur-sm"
            >
              <span className="flex items-center gap-4">
                <item.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                <span className="text-xs md:text-sm uppercase tracking-wider">{item.label}</span>
              </span>
              <ArrowRightIcon
                className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors translate-x-0 group-hover:translate-x-1"
                size={16}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card } from "@/components/ui/card";
import { Eye, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      type: "PROJECT",
      title: "Armbian Homelab",
      description:
        "Built and configured a home laboratory environment using Armbian OS for learning network infrastructure, server administration, and testing various IT solutions.",
      impact: "Hands-on learning environment for network and system administration skills",
      tech: ["Armbian", "Linux", "Network Configuration", "Server Management"],
      action: "View Setup",
      icon: Eye,
      href: "https://links.rifatraditya.me/",
    },
    {
      type: "PROJECT",
      title: "Discord Bot",
      description:
        "Developed a custom Discord bot using discord.py to automate tasks, manage server operations, and enhance community engagement.",
      impact: "Improved server management efficiency and user interaction",
      tech: ["Python", "discord.py", "API Integration", "Automation"],
      action: "GitHub Repository",
      icon: Code,
      href: "https://github.com/Ranzzie",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-6 border-t border-border/60">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Projects</h2>
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/20 border-border hover:border-primary transition-colors group rounded-sm"
            >
              <div className="mb-4">
                <span className="text-[10px] text-primary uppercase tracking-[0.22em] font-semibold">
                  {String(index + 1).padStart(2, "0")} / {project.type}
                </span>
                <h3 className="text-2xl font-semibold mt-2 uppercase group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="mb-5 border border-border bg-background/70 p-4 rounded-sm space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-[0.14em] border border-border px-2 py-1 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-primary/90">Impact: {project.impact}</p>
              </div>

              <div className="pt-2">
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  <project.icon className="h-3.5 w-3.5" />
                  {project.action}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Networking",
      skills: ["Mikrotik", "TCP/IP", "BGP", "OSPF", "VPN", "VLAN", "Firewall Configuration"]
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Ubuntu", "Red Hat", "Debian", "Windows Server",]
    },
    {
      category: "Virtualization",
      skills: ["Proxmox", "Hyper-V", "KVM", "Docker", "Kubernetes"]
    },
    {
      category: "Monitoring & Security",
      skills: ["Prometheus", "Zabbix", "Wireshark", "pfSense", "SIEM"]
    },
    {
      category: "Cloud & Automation",
      skills: ["AWS", "Azure", "Ansible", "Terraform", "n8n", "Bash Scripting"]
    },
    {
      category: "Database & Storage",
      skills: ["MySQL", "PostgreSQL", "SAN", "NAS", "Backup Solutions"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-6 border-t border-border/60">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Core Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-3xl">
            Practical, industry-aligned skills developed through vocational labs, certifications,
            and real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/20 border-border hover:border-primary transition-colors"
            >
              <h3 className="text-sm font-semibold mb-4 text-primary uppercase tracking-[0.12em]">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

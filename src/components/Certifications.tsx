import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "MikroTik Certified Network Associate (MTCNA)",
      issuer: "MikroTik",
      year: "2025",
      description: "Certified in MikroTik RouterOS configuration, network management, and routing protocols",
      certificateImage: "/certificates/mtcna-certificate.png",
      certificateNumber: "2508NA2931",
      issueDate: "2025-08-08",
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 md:px-6 border-t border-border/60">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Certifications</h2>
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button type="button" className="w-full text-left">
                  <Card className="p-8 bg-card/20 border-border hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 uppercase">
                          {cert.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-secondary">
                            {cert.issuer}
                          </Badge>
                          <Badge variant="outline">
                            {cert.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border-border bg-card p-3 md:p-4">
                <DialogHeader>
                  <DialogTitle>{cert.name}</DialogTitle>
                  <DialogDescription>
                    {cert.issuer} • Certificate #{cert.certificateNumber} • Issued {cert.issueDate}
                  </DialogDescription>
                </DialogHeader>
                <div className="max-h-[78vh] w-full overflow-auto rounded-md border border-border bg-background p-2">
                  <img
                    src={cert.certificateImage}
                    alt={`${cert.name} certificate`}
                    className="mx-auto h-auto max-h-[74vh] w-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

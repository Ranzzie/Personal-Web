import { Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-14 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl border-t border-primary/15 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {currentYear} Rifat Raditya
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Ranzzie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/im.rnji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useRef, useState, useEffect } from "react";
import { toast } from "sonner"; // Import toast

import { AtSignIcon, type AtSignIconHandle } from "./icons/AtSignIcon";
import { GithubIcon, type GithubIconHandle } from "./icons/GithubIcon";
import { InstagramIcon, type InstagramIconHandle } from "./icons/InstagramIcon";
import { LinkIcon, type LinkIconHandle } from "./icons/LinkIcon";
import { DiscordIcon, type DiscordIconHandle } from "./icons/DiscordIcon";

const Contact = () => {
  const emailIconRef = useRef<AtSignIconHandle>(null);
  const instagramIconRef = useRef<InstagramIconHandle>(null);
  const githubIconRef = useRef<GithubIconHandle>(null);
  const linkIconRef = useRef<LinkIconHandle>(null);
  const discordIconRef = useRef<DiscordIconHandle>(null);

  const [discordData, setDiscordData] = useState<{
    status: string;
    username: string;
    avatarUrl: string | null;
  }>({
    status: "offline",
    username: "Ranzzie", // This will be updated by API
    avatarUrl: null,
  });

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("pcmoshing");
    toast.success("Copied @pcmoshing to clipboard!");
  };


  useEffect(() => {
    async function getDiscordData() {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/889347272100429834");
        const { data } = await response.json();

        if (data) {
          const { discord_user, discord_status } = data;
          const user = discord_user;
          // 1. Get Username (global_name is display name, username is unique handle)
          const username = user.global_name || user.username;

          // 2. Construct Profile Picture URL
          const avatarUrl = user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
            : null;

          setDiscordData({
            status: discord_status,
            username: username,
            avatarUrl: avatarUrl,
          });
        }
      } catch (error) {
        console.error("Failed to fetch discord data", error);
      }
    }

    getDiscordData();
    const interval = setInterval(getDiscordData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (discordData.status) {
      case "online":
        return "#23a559";
      case "idle":
        return "#f0b232";
      case "dnd":
        return "#f23f43";
      default:
        return "#80848e";
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 text-center border-t border-border/60">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">Contact</h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground mb-8">
          Reach out via email, social media, or my curated link hub. I respond quickly to
          collaboration opportunities, internships, or questions about networking and systems projects.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:mail@rifatraditya.me"
            className="w-full border border-primary/40 px-5 py-5 md:py-6 text-lg md:text-3xl font-bold uppercase tracking-tight hover:border-primary hover:bg-primary/5 transition-colors"
            onMouseEnter={() => emailIconRef.current?.startAnimation()}
            onMouseLeave={() => emailIconRef.current?.stopAnimation()}
            onFocus={() => emailIconRef.current?.startAnimation()}
            onBlur={() => emailIconRef.current?.stopAnimation()}
          >
            <span className="inline-flex items-center gap-3 md:gap-4">
              <AtSignIcon ref={emailIconRef} className="text-primary" size={18} />
              <span>mail@rifatraditya.me</span>
            </span>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <a
              href="https://www.instagram.com/im.rnji/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 px-5 py-5 text-lg md:text-2xl font-bold uppercase tracking-tight hover:border-primary hover:bg-primary/5 transition-colors"
              onMouseEnter={() => instagramIconRef.current?.startAnimation()}
              onMouseLeave={() => instagramIconRef.current?.stopAnimation()}
              onFocus={() => instagramIconRef.current?.startAnimation()}
              onBlur={() => instagramIconRef.current?.stopAnimation()}
            >
              <span className="inline-flex items-center gap-3">
                <InstagramIcon ref={instagramIconRef} className="text-primary" size={18} />
                <span>Instagram / @im.rnji</span>
              </span>
            </a>
            <a
              href="https://github.com/Ranzzie"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 px-5 py-5 text-lg md:text-2xl font-bold uppercase tracking-tight hover:border-primary hover:bg-primary/5 transition-colors"
              onMouseEnter={() => githubIconRef.current?.startAnimation()}
              onMouseLeave={() => githubIconRef.current?.stopAnimation()}
              onFocus={() => githubIconRef.current?.startAnimation()}
              onBlur={() => githubIconRef.current?.stopAnimation()}
            >
              <span className="inline-flex items-center gap-3">
                <GithubIcon ref={githubIconRef} className="text-primary" size={18} />
                <span>GitHub / Ranzzie</span>
              </span>
            </a>
            <a
              href="https://links.rifatraditya.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 px-5 py-5 text-lg md:text-2xl font-bold uppercase tracking-tight hover:border-primary hover:bg-primary/5 transition-colors"
              onMouseEnter={() => linkIconRef.current?.startAnimation()}
              onMouseLeave={() => linkIconRef.current?.stopAnimation()}
              onFocus={() => linkIconRef.current?.startAnimation()}
              onBlur={() => linkIconRef.current?.stopAnimation()}
            >
              <span className="inline-flex items-center gap-3">
                <LinkIcon ref={linkIconRef} className="text-primary" size={18} />
                <span>Links / rifatraditya.me</span>
              </span>
            </a>

            <div
              className="border border-primary/30 px-5 py-5 flex items-center justify-center gap-8 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
              onMouseEnter={() => discordIconRef.current?.startAnimation()}
              onMouseLeave={() => discordIconRef.current?.stopAnimation()}
              onClick={handleCopyDiscord}
            >
              <DiscordIcon ref={discordIconRef} className="text-primary shrink-0" size={23} />

              <div className="flex items-center gap-4 text-left">
                {discordData.avatarUrl ? (
                  <img
                    src={discordData.avatarUrl}
                    alt={discordData.username}
                    className="w-10 h-10 rounded-full border border-primary/30"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/10" />
                )}

                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold uppercase tracking-tight leading-none text-foreground">
                    {discordData.username}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                        style={{ backgroundColor: getStatusColor() }}
                      />
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full"
                        style={{ backgroundColor: getStatusColor() }}
                      />
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest font-medium opacity-80"
                      style={{ color: getStatusColor() }}
                    >
                      {discordData.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

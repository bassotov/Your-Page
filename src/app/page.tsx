import { SpotifyEmbed, GitHubEmbed } from "@/components/embeds";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  MapPin,
  Briefcase,
  ExternalLink,
  Github,
  Youtube,
  Send,
  Linkedin,
  Twitter,
  Mail,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-5xl px-4 py-8 md:py-16">
        {/* Top bar with theme switcher */}
        <div className="mb-8 flex justify-end">
          <ThemeSwitcher />
        </div>

        {/* Header */}
        <header className="mb-16">
          <Image
            src="/pic.jpg"
            alt="Pasha Barbashin"
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Pasha Barbashin
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              London, UK
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              BCG X
            </span>
            <Link
              href="mailto:pasha@barbash.in"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              pasha@barbash.in
            </Link>
          </div>
        </header>

        {/* 2025 Wrapped Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🎉 2025 Wrapped</h2>

          {/* GitHub Contributions - Full width */}
          <Link
            href="https://github.com/bassotov"
            target="_blank"
            className="group relative block w-full aspect-[3.4/1] overflow-hidden rounded-xl mb-4"
          >
            <Image
              src="/Github.png"
              alt="GitHub 2025 Contributions"
              fill
              className="object-cover scale-105 transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </h3>
            </div>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* WHOOP - Vertical */}
            <Link
              href="https://join.whoop.com/6940A345"
              target="_blank"
              className="group relative aspect-[9/16] overflow-hidden rounded-xl"
            >
              <Image
                src="/whoop-wrapped.PNG"
                alt="WHOOP 2025 Wrapped"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  WHOOP
                </h3>
              </div>
            </Link>

            {/* Spotify - Vertical */}
            <Link
              href="https://open.spotify.com/artist/1mkiGsuSOF25ft6cRMEktM"
              target="_blank"
              className="group relative aspect-[9/16] overflow-hidden rounded-xl"
            >
              <Image
                src="/spotify-wrapped.JPG"
                alt="Spotify 2025 Wrapped"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  Spotify
                </h3>
              </div>
            </Link>

            {/* Horizontal cards container - matches height of vertical cards */}
            <div className="col-span-2 row-span-1 md:row-span-1 flex flex-col gap-4 aspect-square md:aspect-auto md:h-full">
              {/* Twitter/X - Horizontal */}
              <Link
                href="https://x.com/pasha_barbashin"
                target="_blank"
                className="group relative flex-1 overflow-hidden rounded-xl"
              >
                <Image
                  src="/Twitter-wrapped.png"
                  alt="X 2025 Wrapped"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    <Twitter className="h-5 w-5" />
                    X / Twitter
                  </h3>
                </div>
              </Link>

              {/* LinkedIn - Horizontal */}
              <Link
                href="https://www.linkedin.com/in/bassotov/"
                target="_blank"
                className="group relative flex-1 overflow-hidden rounded-xl"
              >
                <Image
                  src="/LinkedIn-wrapped.png"
                  alt="LinkedIn 2025 Wrapped"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🚀 Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Twitter Screenshot - Vertical */}
            <Link
              href="https://chromewebstore.google.com/detail/twitter-screenshot/ggddbhbgmlkapnmphojkeoeefdcglfna"
              target="_blank"
              className="group relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src="/Twitter Screenshot.png"
                alt="Twitter Screenshot"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  Twitter Screenshot
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/70 text-sm">Chrome Extension</p>
              </div>
            </Link>

            {/* Sōka - Vertical */}
            <Link
              href="https://soka.health"
              target="_blank"
              className="group relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src="/Sōka.png"
                alt="Sōka"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  Sōka
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/70 text-sm">Health Platform</p>
              </div>
            </Link>

            {/* X-Wizard - Horizontal on mobile, vertical on desktop */}
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7404105038173741056/"
              target="_blank"
              className="group relative col-span-2 md:col-span-1 aspect-[21/9] md:aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src="/X-Wizard.PNG"
                alt="X-Wizard"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  X-Wizard
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/70 text-sm">BCG X Internal Tool</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer with Socials */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://www.linkedin.com/in/bassotov/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/pasha_barbashin"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@pashalika"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="https://t.me/bassotov_blog"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/bassotov"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://open.spotify.com/artist/1mkiGsuSOF25ft6cRMEktM"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Spotify"
            >
              <Music className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            © {new Date().getFullYear()} Pasha Barbashin
          </p>
        </div>
      </footer>
    </div>
  );
}

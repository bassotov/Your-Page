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
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-10 md:py-16">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
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

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-3">
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
          </div>

          {/* Bio in code style */}
          <div className="font-mono text-base text-muted-foreground border-l-2 border-muted-foreground/30 pl-4">
            <p className="text-foreground/80">{"// Ex-consultant turned indie hacker"}</p>
            <p>{"- Building products with a soul"}</p>
            <p>{"- Agentising operations in BCG X"}</p>
            <p>{"- Sharing the journey online"}</p>
            <p>{"- Learning to make $$$"}</p>
          </div>
        </header>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Workout Timer */}
            <Link
              href="https://workout-timer.app"
              target="_blank"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src="/workout-timer.png"
                alt="Workout Timer"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  Workout Timer
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/70 text-sm">Level up your AI workouts</p>
              </div>
            </Link>

            {/* Twitter Screenshot */}
            <Link
              href="https://chromewebstore.google.com/detail/twitter-screenshot/ggddbhbgmlkapnmphojkeoeefdcglfna"
              target="_blank"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
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

            {/* Sōka */}
            <Link
              href="https://soka.health"
              target="_blank"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
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

            {/* X-Wizard */}
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7404105038173741056/"
              target="_blank"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
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

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="scale-75 origin-left">
              <ThemeSwitcher />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pasha Barbashin
            </p>
          </div>
          <div className="text-sm text-right">
            <p className="text-muted-foreground/60 mb-1">Other pages:</p>
            <div className="flex flex-col gap-0.5">
              <Link href="/wrapped" className="text-muted-foreground hover:text-foreground transition-colors">
                2025 Wrapped
              </Link>
              <Link href="/pull-ups" className="text-muted-foreground hover:text-foreground transition-colors">
                My first 10 pull-ups
              </Link>
              <Link href="/hampstead" className="text-muted-foreground hover:text-foreground transition-colors">
                Hampstead gems
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

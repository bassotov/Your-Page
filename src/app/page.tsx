import { NewsletterSubscribe } from "@/components/newsletter-subscribe";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  MapPin,
  Briefcase,
  Github,
  Youtube,
  Send,
  Linkedin,
  Twitter,
  Mail,
  Users,
  Sparkles,
} from "lucide-react";

type Project = {
  name: string;
  href: string;
  description: string;
  users: number;
  iconUrl?: string;
  iconBg?: string;
  iconNode?: React.ReactNode;
};

const projects: Project[] = [
  {
    name: "Sōka",
    href: "https://soka.health",
    description: "Health platform",
    users: 15,
    iconUrl: "https://www.google.com/s2/favicons?domain=soka.health&sz=128",
    iconBg: "bg-emerald-50",
  },
  {
    name: "Twitter Screenshot",
    href: "https://twitter-screenshot.com",
    description: "Beautiful tweet screenshots — Chrome extension",
    users: 250,
    iconUrl: "https://www.google.com/s2/favicons?domain=twitter-screenshot.com&sz=128",
    iconBg: "bg-[#ff6900]/10",
  },
  {
    name: "Workout Timer",
    href: "https://workout-timer.app",
    description: "Level up your AI workouts",
    users: 6,
    iconUrl: "https://www.google.com/s2/favicons?domain=workout-timer.app&sz=128",
    iconBg: "bg-orange-50",
  },
  {
    name: "X-Wizard",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7404105038173741056/",
    description: "BCG X internal tool",
    users: 10,
    iconBg: "bg-violet-50",
    iconNode: <Sparkles className="h-5 w-5 text-violet-500" />,
  },
];

const socials = [
  { href: "https://www.linkedin.com/in/bassotov/", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/pasha_barbashin", label: "X / Twitter", icon: Twitter },
  { href: "https://www.youtube.com/@pasha_barbashin", label: "YouTube", icon: Youtube },
  { href: "https://t.me/bassotov_blog", label: "Telegram", icon: Send },
  { href: "https://github.com/bassotov", label: "GitHub", icon: Github },
  { href: "https://open.spotify.com/artist/1mkiGsuSOF25ft6cRMEktM", label: "Spotify", icon: Music },
];

const otherPages = [
  { href: "/wrapped", label: "2025 Wrapped" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-muted/40">
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
          {/* Left column: bio + subscribe (40%) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Image
              src="/pic.jpg"
              alt="Pasha Barbashin"
              width={144}
              height={144}
              className="rounded-full"
              priority
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
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
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Short bio (code-style block quote) */}
            <div className="font-mono text-base text-muted-foreground border-l-2 border-muted-foreground/30 pl-4">
              <p className="text-foreground/80">{"// Ex-consultant turned indie hacker"}</p>
            </div>

            {/* Newsletter CTA */}
            <div className="flex flex-col gap-3">
              <p className="font-bold text-lg">
                10 AI enthusiasts read{" "}
                <Link
                  href="https://pasha.beehiiv.com/"
                  target="_blank"
                  className="text-primary underline underline-offset-4 decoration-2 hover:decoration-4"
                >
                  Above Average
                </Link>
              </p>
              <p className="text-muted-foreground">
                I share how to apply AI in your work and projects. Every Tuesday in your inbox{" "}
                <span aria-hidden>👇</span>
              </p>
              <NewsletterSubscribe />
            </div>
          </div>

          {/* Right column: project cards (60%) */}
          <section className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4">
              {projects.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  className="group flex h-full min-h-[180px] flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 ease-out hover:bg-muted/60 hover:shadow-lg motion-safe:hover:-translate-y-1.5 motion-safe:odd:hover:-rotate-1 motion-safe:even:hover:rotate-1"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center overflow-hidden ${p.iconBg ?? "bg-muted"}`}
                    >
                      {p.iconUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.iconUrl}
                          alt=""
                          className="h-7 w-7 object-contain"
                          width={28}
                          height={28}
                        />
                      ) : (
                        p.iconNode
                      )}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {p.users}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-1">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer (Soka-style) */}
      <footer className="border-t border-border/60 px-4 pt-14 pb-32 bg-background/60 safe-bottom">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Pasha Barbashin
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                Happy to connect
              </p>
              <p className="mt-2 text-sm">
                <Link
                  href="mailto:pasha@barbash.in"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  pasha@barbash.in
                </Link>
              </p>
            </div>

            {/* Pages */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Pages
              </div>
              <nav className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {otherPages.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Connect
              </div>
              <nav className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <Link
                  href="https://pasha.beehiiv.com/"
                  target="_blank"
                  className="transition-colors hover:text-foreground"
                >
                  Above Average
                </Link>
              </nav>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

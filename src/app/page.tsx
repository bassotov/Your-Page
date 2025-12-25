import { BentoGrid, BentoCard } from "@/components/bento";
import { SpotifyEmbed, GitHubEmbed } from "@/components/embeds";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Code,
  MapPin,
  Briefcase,
  ExternalLink,
  Github,
  Youtube,
  Send,
  Linkedin,
  Twitter,
  Camera,
  Heart,
  Wand2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        {/* Top bar with theme switcher */}
        <div className="mb-8 flex justify-end">
          <ThemeSwitcher />
        </div>

        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Pasha Barbashin
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              London, UK
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              Digital Products @ BCG X
            </span>
          </div>
        </header>

        {/* Bento Grid */}
        <BentoGrid columns={4} gap={4}>
          {/* Social Links Card */}
          <BentoCard colSpan={2}>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg mb-1">Connect</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="https://www.linkedin.com/in/bassotov/"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/pasha_barbashin"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  X / Twitter
                </Link>
                <Link
                  href="https://www.youtube.com/@pashalika"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </Link>
                <Link
                  href="https://t.me/bassotov_blog"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </Link>
                <Link
                  href="https://github.com/bassotov"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="https://open.spotify.com/artist/1mkiGsuSOF25ft6cRMEktM"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Music className="h-4 w-4" />
                  Spotify
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* Projects Section */}
          <BentoCard colSpan={2}>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg mb-1">Projects</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://chromewebstore.google.com/detail/twitter-screenshot/ggddbhbgmlkapnmphojkeoeefdcglfna"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Camera className="h-4 w-4" />
                  Twitter Screenshot
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="https://soka.health"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Heart className="h-4 w-4" />
                  Sōka
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Wand2 className="h-4 w-4" />
                  X-Wizard (BCG X)
                </span>
              </div>
            </div>
          </BentoCard>

          {/* WHOOP Stats */}
          <BentoCard colSpan={2} rowSpan={2} interactive>
            <Link href="#" className="block relative w-full h-full min-h-[300px]">
              <Image
                src="/socials/whoop-2025.png"
                alt="WHOOP 2025 Year in Review"
                fill
                className="object-contain rounded-lg"
              />
            </Link>
          </BentoCard>

          {/* GitHub Contributions */}
          <BentoCard colSpan={2} interactive>
            <Link href="https://github.com/bassotov" target="_blank" className="block">
              <Image
                src="/socials/github-contributions.png"
                alt="GitHub Contributions"
                width={400}
                height={150}
                className="w-full rounded-lg"
              />
            </Link>
          </BentoCard>

          {/* Spotify Wrapped */}
          <BentoCard colSpan={2} rowSpan={2} interactive>
            <Link
              href="https://open.spotify.com/artist/1mkiGsuSOF25ft6cRMEktM"
              target="_blank"
              className="block relative w-full h-full min-h-[300px]"
            >
              <Image
                src="/socials/spotify-wrapped.png"
                alt="Spotify Wrapped 2025"
                fill
                className="object-contain rounded-lg"
              />
            </Link>
          </BentoCard>

          {/* X Analytics */}
          <BentoCard colSpan={2} interactive>
            <Link
              href="https://x.com/pasha_barbashin"
              target="_blank"
              className="block"
            >
              <Image
                src="/socials/x-analytics.png"
                alt="X Analytics"
                width={400}
                height={200}
                className="w-full rounded-lg"
              />
            </Link>
          </BentoCard>

          {/* Substack Performance */}
          <BentoCard colSpan={2} interactive>
            <Link href="https://t.me/bassotov_blog" target="_blank" className="block">
              <Image
                src="/socials/substack-performance.png"
                alt="Substack Performance"
                width={400}
                height={200}
                className="w-full rounded-lg"
              />
            </Link>
          </BentoCard>

          {/* GitHub Profile */}
          <BentoCard
            title="GitHub"
            icon={<Code className="h-5 w-5" />}
            colSpan={2}
          >
            <GitHubEmbed type="profile" username="bassotov" />
          </BentoCard>

          {/* Spotify Artist */}
          <BentoCard
            title="Latest Music"
            icon={<Music className="h-5 w-5" />}
            colSpan={2}
          >
            <SpotifyEmbed
              type="artist"
              spotifyId="1mkiGsuSOF25ft6cRMEktM"
              size="large"
            />
          </BentoCard>
        </BentoGrid>
      </main>
    </div>
  );
}

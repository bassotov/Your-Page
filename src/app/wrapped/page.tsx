import type { Metadata } from "next";
import { PullUpInfographic } from "@/components/pull-up-infographic";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2025 Wrapped",
  description: "My 2025 in review — GitHub contributions, Spotify, WHOOP, Twitter, LinkedIn highlights.",
  alternates: {
    canonical: "https://barbash.in/wrapped",
  },
  openGraph: {
    title: "2025 Wrapped | Pasha Barbashin",
    description: "My 2025 in review — GitHub contributions, Spotify, WHOOP, Twitter, LinkedIn highlights.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pasha Barbashin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 Wrapped | Pasha Barbashin",
    description: "My 2025 in review — GitHub contributions, Spotify, WHOOP, Twitter, LinkedIn highlights.",
    images: ["/og-image.png"],
  },
};
import {
  Music,
  Activity,
  Github,
  Linkedin,
  Twitter,
  ArrowLeft,
} from "lucide-react";

export default function WrappedPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-5xl px-4 py-8 md:py-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          2025 Wrapped
        </h1>

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </h3>
            <p className="text-white/70 text-sm">Started coding in July – 3 projects launched</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Activity className="h-5 w-5" />
                WHOOP
              </h3>
              <p className="text-white/70 text-sm">~130 workouts in 2025</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Music className="h-5 w-5" />
                Spotify
              </h3>
              <p className="text-white/70 text-sm">Top-1% Sleep Token fan</p>
            </div>
          </Link>

          {/* Horizontal cards container */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  X / Twitter
                </h3>
                <p className="text-white/70 text-sm">0 → 45 followers in 6 months</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </h3>
                <p className="text-white/70 text-sm">20k impressions since October</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Pull-Up Progress Infographic */}
        <PullUpInfographic />
      </main>
    </div>
  );
}

import { BentoGrid, BentoCard } from "@/components/bento";
import { YouTubeEmbed, SpotifyEmbed, GitHubEmbed } from "@/components/embeds";
import { Music, Video, Code, User, FileText, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Bento Grid Demo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A responsive bento grid layout with embeddable widgets.
            Cards stack in a single column on mobile and expand to a grid on larger screens.
          </p>
        </header>

        {/* Bento Grid */}
        <BentoGrid columns={4} gap={4}>
          {/* Profile Card - spans 2 columns */}
          <BentoCard
            title="Welcome"
            description="This is a responsive bento grid that adapts to any screen size"
            icon={<User className="h-5 w-5" />}
            colSpan={2}
            interactive
          >
            <p className="text-sm text-muted-foreground">
              On mobile devices, cards stack vertically for easy scrolling.
              On tablets and desktops, they form a beautiful grid layout.
            </p>
          </BentoCard>

          {/* Feature Card */}
          <BentoCard
            title="Modular"
            description="Each card is a separate component"
            icon={<Sparkles className="h-5 w-5" />}
            interactive
          />

          {/* Feature Card */}
          <BentoCard
            title="Responsive"
            description="Works on all screen sizes"
            icon={<FileText className="h-5 w-5" />}
            interactive
          />

          {/* YouTube Embed */}
          <BentoCard
            title="YouTube"
            description="Embed any YouTube video"
            icon={<Video className="h-5 w-5" />}
            colSpan={2}
            rowSpan={2}
          >
            <YouTubeEmbed
              videoId="dQw4w9WgXcQ"
              title="Demo Video"
            />
          </BentoCard>

          {/* Spotify Embed */}
          <BentoCard
            title="Spotify"
            description="Embed tracks, albums, or playlists"
            icon={<Music className="h-5 w-5" />}
            colSpan={2}
            rowSpan={2}
          >
            <SpotifyEmbed
              type="track"
              spotifyId="4cOdK2wGLETKBW3PvgPWqT"
              size="large"
            />
          </BentoCard>

          {/* GitHub Embed - Full Width */}
          <BentoCard
            title="GitHub"
            description="Showcase repositories and profiles"
            icon={<Code className="h-5 w-5" />}
            colSpan={2}
          >
            <GitHubEmbed
              type="repo"
              username="vercel"
              repo="next.js"
            />
          </BentoCard>

          {/* Text Content Card */}
          <BentoCard
            title="Custom Content"
            description="Add any content to cards"
            colSpan={2}
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Cards can contain any React components - text, images,
                forms, charts, or custom widgets.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Flexible sizing with colSpan and rowSpan</li>
                <li>Interactive hover effects</li>
                <li>Custom gradients and backgrounds</li>
                <li>Full theme support (light/dark)</li>
              </ul>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            See the <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">EMBEDDING_MANUAL.md</code> file
            for instructions on embedding widgets from various services.
          </p>
        </footer>
      </main>
    </div>
  );
}

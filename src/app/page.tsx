import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Your Name
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400">
                Developer, Creator, Human
              </p>
            </div>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
            Welcome to my corner of the internet. Building things, making music playlists,
            and trying to leave the world a bit better than I found it.
          </p>
        </section>

        {/* 2025 Wrapped Section */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-6">
            2025 Wrapped
          </h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Spotify - Large Card */}
            <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <SpotifyIcon className="h-8 w-8 mb-4" />
                  <p className="text-green-100 text-sm">Top Artist</p>
                  <p className="text-2xl font-semibold">Artist Name</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-100 text-sm">Minutes Listened</p>
                  <p className="text-3xl font-bold">42,069</p>
                </div>
              </div>
            </div>

            {/* GitHub Commits */}
            <div className="col-span-1 rounded-2xl bg-zinc-900 dark:bg-zinc-800 p-5 text-white">
              <GitHubIcon className="h-6 w-6 mb-3" />
              <p className="text-zinc-400 text-xs">Commits</p>
              <p className="text-2xl font-bold">1,247</p>
            </div>

            {/* GitHub Stars */}
            <div className="col-span-1 rounded-2xl bg-zinc-100 dark:bg-zinc-900 p-5">
              <span className="text-2xl mb-2 block">⭐</span>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">Stars Earned</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">328</p>
            </div>

            {/* Top Language */}
            <div className="col-span-1 rounded-2xl bg-blue-500 p-5 text-white">
              <p className="text-blue-100 text-xs">Top Language</p>
              <p className="text-xl font-semibold mt-1">TypeScript</p>
              <p className="text-blue-200 text-sm mt-2">68%</p>
            </div>

            {/* Coffee/Fun stat */}
            <div className="col-span-1 rounded-2xl bg-amber-100 dark:bg-amber-900/30 p-5">
              <span className="text-2xl mb-2 block">☕</span>
              <p className="text-amber-700 dark:text-amber-300 text-xs">Cups of Coffee</p>
              <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">892</p>
            </div>

            {/* Books/Learning */}
            <div className="col-span-2 rounded-2xl bg-purple-500 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl">📚</span>
                  <p className="text-purple-100 text-xs mt-2">Books Read</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div className="text-right">
                  <p className="text-purple-200 text-sm">Favorite</p>
                  <p className="text-lg font-medium">The Pragmatic Programmer</p>
                </div>
              </div>
            </div>

            {/* YouTube/Content */}
            <div className="col-span-2 rounded-2xl bg-red-500 p-5 text-white">
              <div className="flex items-center gap-4">
                <YouTubeIcon className="h-8 w-8" />
                <div>
                  <p className="text-red-100 text-xs">Videos Watched</p>
                  <p className="text-2xl font-bold">1,856</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-6">
            Find Me Online
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <LinkCard
              href="https://github.com/yourusername"
              icon={<GitHubIcon className="h-5 w-5" />}
              title="GitHub"
              description="Code & open source projects"
            />
            <LinkCard
              href="https://twitter.com/yourusername"
              icon={<XIcon className="h-5 w-5" />}
              title="X / Twitter"
              description="Thoughts & updates"
            />
            <LinkCard
              href="https://youtube.com/@yourusername"
              icon={<YouTubeIcon className="h-5 w-5" />}
              title="YouTube"
              description="Videos & tutorials"
            />
            <LinkCard
              href="https://linkedin.com/in/yourusername"
              icon={<LinkedInIcon className="h-5 w-5" />}
              title="LinkedIn"
              description="Professional network"
            />
            <LinkCard
              href="mailto:you@example.com"
              icon={<MailIcon className="h-5 w-5" />}
              title="Email"
              description="Get in touch"
            />
            <LinkCard
              href="https://yourproject.com"
              icon={<LinkIcon className="h-5 w-5" />}
              title="My Project"
              description="Something cool I'm building"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">
            Made with Next.js & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}

function LinkCard({
  href,
  icon,
  title,
  description
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
        {icon}
      </div>
      <div>
        <p className="font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </a>
  );
}

// Icons
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}

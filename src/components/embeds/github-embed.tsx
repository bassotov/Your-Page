"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type GitHubCardType = "repo" | "user" | "gist";

interface GitHubEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Type of GitHub card to display
   */
  type: GitHubCardType;
  /**
   * GitHub username
   */
  username: string;
  /**
   * Repository name (required for "repo" type)
   */
  repo?: string;
  /**
   * Gist ID (required for "gist" type)
   */
  gistId?: string;
  /**
   * Theme (default: auto-detects from system)
   */
  theme?: "light" | "dark" | "auto";
  /**
   * Show owner avatar (repo cards only)
   */
  showOwner?: boolean;
  /**
   * Title for accessibility
   */
  title?: string;
}

/**
 * GitHub embed component using GitHub's official widgets
 * Uses github-readme-stats for enhanced visuals
 */
const GitHubEmbed = React.forwardRef<HTMLDivElement, GitHubEmbedProps>(
  (
    {
      className,
      type,
      username,
      repo,
      gistId,
      theme = "auto",
      showOwner = true,
      title = "GitHub embed",
      ...props
    },
    ref
  ) => {
    const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("light");

    React.useEffect(() => {
      if (theme === "auto") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setResolvedTheme(isDark ? "dark" : "light");

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => {
          setResolvedTheme(e.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      } else {
        setResolvedTheme(theme);
      }
    }, [theme]);

    const themeParam = resolvedTheme === "dark" ? "dark" : "default";

    // Generate the appropriate embed URL based on type
    let embedContent: React.ReactNode;

    if (type === "repo" && repo) {
      // GitHub Readme Stats repo card
      const imgUrl = `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=${themeParam}&show_owner=${showOwner}`;
      embedContent = (
        <a
          href={`https://github.com/${username}/${repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgUrl}
            alt={`${username}/${repo} GitHub repository`}
            className="w-full"
            loading="lazy"
          />
        </a>
      );
    } else if (type === "user") {
      // GitHub Readme Stats user card
      const imgUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themeParam}&hide_border=true`;
      embedContent = (
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgUrl}
            alt={`${username} GitHub stats`}
            className="w-full"
            loading="lazy"
          />
        </a>
      );
    } else if (type === "gist" && gistId) {
      // GitHub Gist embed (using script embed)
      embedContent = (
        <div className="overflow-auto rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900">
          <a
            href={`https://gist.github.com/${username}/${gistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            View Gist: {username}/{gistId}
          </a>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("w-full overflow-hidden rounded-lg", className)}
        {...props}
      >
        {embedContent}
      </div>
    );
  }
);

GitHubEmbed.displayName = "GitHubEmbed";

export { GitHubEmbed };
export type { GitHubEmbedProps, GitHubCardType };

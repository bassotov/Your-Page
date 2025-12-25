"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TwitterEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tweet ID (e.g., "1234567890123456789")
   * Can be extracted from URLs like:
   * - https://twitter.com/username/status/TWEET_ID
   * - https://x.com/username/status/TWEET_ID
   */
  tweetId: string;
  /**
   * Theme (default: auto-detects from system)
   */
  theme?: "light" | "dark" | "auto";
  /**
   * Hide conversation thread
   */
  hideConversation?: boolean;
  /**
   * Hide media (images, videos)
   */
  hideMedia?: boolean;
  /**
   * Align the tweet card
   */
  align?: "left" | "center" | "right";
  /**
   * Title for accessibility
   */
  title?: string;
}

/**
 * Twitter/X embed component
 * Uses Twitter's official embed API with dynamic script loading
 */
const TwitterEmbed = React.forwardRef<HTMLDivElement, TwitterEmbedProps>(
  (
    {
      className,
      tweetId,
      theme = "auto",
      hideConversation = false,
      hideMedia = false,
      align = "center",
      title = "Twitter embed",
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = React.useState(true);
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

    React.useEffect(() => {
      // Load Twitter widgets script
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).twttr && containerRef.current) {
          // Clear any previous content
          const blockquote = containerRef.current.querySelector("blockquote");
          if (blockquote) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).twttr.widgets.load(containerRef.current);
          }
          setIsLoading(false);
        }
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup script if component unmounts
        const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
        if (existingScript && existingScript.parentNode) {
          existingScript.parentNode.removeChild(existingScript);
        }
      };
    }, [tweetId]);

    // Build data attributes for the blockquote
    const dataCards = hideMedia ? "hidden" : undefined;
    const dataConversation = hideConversation ? "none" : undefined;

    return (
      <div
        ref={ref}
        className={cn("w-full overflow-hidden", className)}
        {...props}
      >
        <div ref={containerRef} className={cn("flex", {
          "justify-start": align === "left",
          "justify-center": align === "center",
          "justify-end": align === "right",
        })}>
          {isLoading && (
            <div className="flex h-32 w-full items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <span className="text-sm text-neutral-500">Loading tweet...</span>
            </div>
          )}
          <blockquote
            className="twitter-tweet"
            data-theme={resolvedTheme}
            data-cards={dataCards}
            data-conversation={dataConversation}
            data-align={align}
          >
            <a href={`https://twitter.com/x/status/${tweetId}`}>Loading tweet...</a>
          </blockquote>
        </div>
      </div>
    );
  }
);

TwitterEmbed.displayName = "TwitterEmbed";

export { TwitterEmbed };
export type { TwitterEmbedProps };

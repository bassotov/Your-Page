"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SpotifyType = "track" | "album" | "playlist" | "artist" | "episode" | "show";

interface SpotifyEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Spotify content type
   */
  type: SpotifyType;
  /**
   * Spotify ID (e.g., "4cOdK2wGLETKBW3PvgPWqT")
   * Can be extracted from URLs like:
   * - https://open.spotify.com/track/TRACK_ID
   * - https://open.spotify.com/album/ALBUM_ID
   * - https://open.spotify.com/playlist/PLAYLIST_ID
   */
  spotifyId: string;
  /**
   * Embed height (default varies by type)
   * - "compact": 80px (track only)
   * - "normal": 152px
   * - "large": 352px (albums/playlists)
   */
  size?: "compact" | "normal" | "large";
  /**
   * Use dark theme (default: auto-detects from system)
   */
  theme?: "dark" | "light" | "auto";
  /**
   * Title for accessibility
   */
  title?: string;
}

/**
 * Spotify embed component
 * Supports tracks, albums, playlists, artists, episodes, and shows
 */
const SpotifyEmbed = React.forwardRef<HTMLDivElement, SpotifyEmbedProps>(
  (
    {
      className,
      type,
      spotifyId,
      size = "normal",
      theme = "auto",
      title = "Spotify embed",
      ...props
    },
    ref
  ) => {
    // Height based on size
    const heightMap = {
      compact: 80,
      normal: 152,
      large: 352,
    };

    // Compact only works for tracks
    const actualSize = type !== "track" && size === "compact" ? "normal" : size;
    const height = heightMap[actualSize];

    // Build URL parameters
    const params = new URLSearchParams();
    if (theme !== "auto") {
      params.set("theme", theme === "dark" ? "0" : "1");
    }

    const embedUrl = `https://open.spotify.com/embed/${type}/${spotifyId}${params.toString() ? `?${params.toString()}` : ""}`;

    return (
      <div
        ref={ref}
        className={cn("w-full overflow-hidden rounded-xl", className)}
        style={{ height: `${height}px` }}
        {...props}
      >
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="h-full w-full border-0"
          style={{ borderRadius: "12px" }}
        />
      </div>
    );
  }
);

SpotifyEmbed.displayName = "SpotifyEmbed";

export { SpotifyEmbed };
export type { SpotifyEmbedProps, SpotifyType };

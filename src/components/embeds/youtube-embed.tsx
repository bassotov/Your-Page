"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * YouTube video ID (e.g., "dQw4w9WgXcQ")
   * Can be extracted from URLs like:
   * - https://www.youtube.com/watch?v=VIDEO_ID
   * - https://youtu.be/VIDEO_ID
   */
  videoId: string;
  /**
   * Video title for accessibility
   */
  title?: string;
  /**
   * Aspect ratio (default: "16/9")
   */
  aspectRatio?: "16/9" | "4/3" | "1/1";
  /**
   * Autoplay the video (muted required for autoplay)
   */
  autoplay?: boolean;
  /**
   * Start time in seconds
   */
  start?: number;
  /**
   * Show player controls (default: true)
   */
  controls?: boolean;
  /**
   * Loop the video
   */
  loop?: boolean;
}

/**
 * YouTube video embed component
 * Responsive iframe wrapper for YouTube videos
 */
const YouTubeEmbed = React.forwardRef<HTMLDivElement, YouTubeEmbedProps>(
  (
    {
      className,
      videoId,
      title = "YouTube video",
      aspectRatio = "16/9",
      autoplay = false,
      start,
      controls = true,
      loop = false,
      ...props
    },
    ref
  ) => {
    const aspectClass = {
      "16/9": "aspect-video",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
    }[aspectRatio];

    // Build URL parameters
    const params = new URLSearchParams();
    if (autoplay) params.set("autoplay", "1");
    if (autoplay) params.set("mute", "1"); // Required for autoplay
    if (start) params.set("start", start.toString());
    if (!controls) params.set("controls", "0");
    if (loop) {
      params.set("loop", "1");
      params.set("playlist", videoId); // Required for looping single video
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}${params.toString() ? `?${params.toString()}` : ""}`;

    return (
      <div
        ref={ref}
        className={cn("w-full overflow-hidden rounded-lg", aspectClass, className)}
        {...props}
      >
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }
);

YouTubeEmbed.displayName = "YouTubeEmbed";

export { YouTubeEmbed };
export type { YouTubeEmbedProps };

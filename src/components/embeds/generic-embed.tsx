"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GenericEmbedProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  /**
   * The embed URL
   */
  src: string;
  /**
   * Title for accessibility
   */
  title: string;
  /**
   * Aspect ratio (default: "16/9")
   */
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16" | "auto";
  /**
   * Fixed height in pixels (use when aspectRatio is "auto")
   */
  height?: number;
  /**
   * Whether to show a loading state
   */
  showLoading?: boolean;
}

/**
 * Generic iframe embed component
 * Use for services that don't have a dedicated embed component
 * Supports CodePen, CodeSandbox, Figma, Loom, Vimeo, SoundCloud, etc.
 */
const GenericEmbed = React.forwardRef<HTMLIFrameElement, GenericEmbedProps>(
  (
    {
      className,
      src,
      title,
      aspectRatio = "16/9",
      height,
      showLoading = true,
      allow,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = React.useState(showLoading);

    const aspectClass = {
      "16/9": "aspect-video",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
      "9/16": "aspect-[9/16]",
      auto: "",
    }[aspectRatio];

    const containerStyle = aspectRatio === "auto" && height ? { height: `${height}px` } : undefined;

    return (
      <div
        className={cn("relative w-full overflow-hidden rounded-lg", aspectClass)}
        style={containerStyle}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
            <span className="text-sm text-neutral-500">Loading...</span>
          </div>
        )}
        <iframe
          ref={ref}
          src={src}
          title={title}
          className={cn("h-full w-full border-0", className)}
          onLoad={() => setIsLoading(false)}
          allow={allow || "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
          {...props}
        />
      </div>
    );
  }
);

GenericEmbed.displayName = "GenericEmbed";

export { GenericEmbed };
export type { GenericEmbedProps };

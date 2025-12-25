"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns on large screens (default: 4)
   */
  columns?: 2 | 3 | 4;
  /**
   * Gap between items in pixels (default: 4 = 1rem)
   */
  gap?: 2 | 3 | 4 | 6 | 8;
}

/**
 * Responsive Bento Grid container
 * - Mobile: Single column layout
 * - Tablet (md): 2 columns
 * - Desktop (lg): configurable columns (2-4)
 */
const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, columns = 4, gap = 4, children, ...props }, ref) => {
    const gapClass = {
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
    }[gap];

    const columnClass = {
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    }[columns];

    return (
      <div
        ref={ref}
        className={cn(
          "grid w-full auto-rows-[minmax(180px,auto)] grid-cols-1 md:grid-cols-2",
          columnClass,
          gapClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BentoGrid.displayName = "BentoGrid";

export { BentoGrid };
export type { BentoGridProps };

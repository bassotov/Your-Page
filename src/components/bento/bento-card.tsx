"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card description
   */
  description?: string;
  /**
   * Icon component to display in the header
   */
  icon?: React.ReactNode;
  /**
   * Number of columns to span (1-4)
   * On mobile, this is ignored and cards take full width
   */
  colSpan?: 1 | 2 | 3 | 4;
  /**
   * Number of rows to span (1-3)
   */
  rowSpan?: 1 | 2 | 3;
  /**
   * Custom header content (replaces title/description/icon)
   */
  header?: React.ReactNode;
  /**
   * Content to render inside the card
   */
  children?: React.ReactNode;
  /**
   * Whether the card is interactive (hoverable)
   */
  interactive?: boolean;
  /**
   * Background gradient class
   */
  gradient?: string;
}

/**
 * Responsive Bento Card component
 * Automatically adjusts to single column on mobile
 */
const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      className,
      title,
      description,
      icon,
      colSpan = 1,
      rowSpan = 1,
      header,
      children,
      interactive = false,
      gradient,
      ...props
    },
    ref
  ) => {
    // Column span classes - only apply on md+ screens
    const colSpanClass = {
      1: "md:col-span-1",
      2: "md:col-span-2",
      3: "md:col-span-3",
      4: "md:col-span-4",
    }[colSpan];

    // Row span classes
    const rowSpanClass = {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
    }[rowSpan];

    return (
      <Card
        ref={ref}
        className={cn(
          "group relative overflow-hidden",
          colSpanClass,
          rowSpanClass,
          interactive &&
            "cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-neutral-300 dark:hover:border-neutral-700",
          gradient,
          className
        )}
        {...props}
      >
        {header ? (
          header
        ) : (
          (title || description || icon) && (
            <CardHeader className="pb-2">
              {icon && (
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  {icon}
                </div>
              )}
              {title && (
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              )}
              {description && (
                <CardDescription className="text-sm">{description}</CardDescription>
              )}
            </CardHeader>
          )
        )}
        {children && (
          <CardContent className={cn(!header && !title && !description && !icon && "pt-6")}>
            {children}
          </CardContent>
        )}
      </Card>
    );
  }
);

BentoCard.displayName = "BentoCard";

export { BentoCard };
export type { BentoCardProps };

"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
} from "@/components/ui/map";
import {
  places,
  categoryConfig,
  HAMPSTEAD_CENTER,
  DEFAULT_ZOOM,
  type PlaceCategory,
} from "@/lib/hampstead-places";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function HampsteadPage() {
  return (
    <div className="h-[100dvh] w-screen relative overflow-hidden">
      <Map center={HAMPSTEAD_CENTER} zoom={DEFAULT_ZOOM}>
        {/* Header overlay */}
        <div className="absolute top-2 left-2 right-2 sm:right-auto sm:left-4 sm:top-4 z-10 sm:max-w-sm">
          <div className="rounded-xl border bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg p-3 sm:p-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-1 sm:mb-2"
            >
              <ArrowLeft className="h-3 w-3" />
              Back
            </Link>
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
              Welcome to Hampstead!
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
              Dima & Nuriya – hope you enjoy our local area. Here&apos;s a quick start guide of the places we visit every week.
            </p>
          </div>
        </div>

        {/* Category legend - horizontal scroll on mobile, vertical on desktop */}
        <div className="absolute bottom-2 left-2 right-14 sm:right-auto sm:bottom-4 sm:left-4 z-10">
          <div className="rounded-xl border bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg p-2 sm:p-3">
            <p className="text-xs font-medium text-muted-foreground mb-1.5 sm:mb-2 hidden sm:block">
              Categories
            </p>
            <div className="flex sm:flex-col gap-2 sm:gap-1.5 overflow-x-auto pb-0.5 sm:pb-0">
              {(Object.keys(categoryConfig) as PlaceCategory[]).map(
                (category) => {
                  const config = categoryConfig[category];
                  const Icon = config.icon;
                  return (
                    <div key={category} className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <div
                        className={cn(
                          "size-5 rounded-full flex items-center justify-center",
                          config.color
                        )}
                      >
                        <Icon className="size-3 text-white" />
                      </div>
                      <span className="text-xs whitespace-nowrap hidden sm:inline">{config.label}</span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Map controls */}
        <MapControls position="bottom-right" showZoom showLocate />

        {/* Markers for each place */}
        {places.map((place) => {
          const config = categoryConfig[place.category];
          const Icon = config.icon;

          return (
            <MapMarker
              key={place.id}
              longitude={place.coordinates[0]}
              latitude={place.coordinates[1]}
            >
              <MarkerContent>
                <div
                  className={cn(
                    "size-9 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer transition-transform hover:scale-110",
                    config.color
                  )}
                >
                  <Icon className="size-4 text-white" />
                </div>
              </MarkerContent>
              <MarkerPopup closeButton>
                <div className="min-w-[180px] max-w-[calc(100vw-60px)] sm:max-w-[350px] pr-8 pl-2 pt-2 pb-2">
                  <div className="flex items-start gap-2 mb-2">
                    <div
                      className={cn(
                        "size-8 rounded-full flex items-center justify-center flex-shrink-0",
                        config.color
                      )}
                    >
                      <Icon className="size-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm leading-tight">
                        {place.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {place.address}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80">
                    {place.description}
                  </p>
                  {place.highlights && place.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {place.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-muted px-2 py-0.5 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address + " London")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-3"
                  >
                    Open in Google Maps
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </MarkerPopup>
            </MapMarker>
          );
        })}
      </Map>
    </div>
  );
}

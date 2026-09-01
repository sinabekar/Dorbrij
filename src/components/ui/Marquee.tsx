"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
}

/**
 * Infinite horizontal scroll: the content is duplicated once and the whole
 * track slides -50%, so the loop is seamless. Edges fade via a mask rather
 * than a hard clip. Pauses on hover/focus and respects
 * prefers-reduced-motion (see .animate-marquee in globals.css).
 */
export default function Marquee({ children, className = "", durationSeconds = 26 }: MarqueeProps) {
  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className="flex items-center gap-12 md:gap-16 pe-12 md:pe-16 shrink-0">{children}</div>
        <div className="flex items-center gap-12 md:gap-16 pe-12 md:pe-16 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

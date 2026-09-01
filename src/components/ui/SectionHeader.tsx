import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-start items-start";

  const parts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignClass} ${className}`}>
      {badge && (
        <Badge variant="secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-heading leading-[1.08] tracking-tight">
        {titleHighlight ? (
          <>
            {parts[0]}
            <span className="text-gradient-accent">{titleHighlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const avatarColors = ["bg-secondary", "bg-accent", "bg-blue-600", "bg-purple-600", "bg-rose-600", "bg-teal-600"];

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  initials: string;
};

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("items") as Testimonial[];

  return (
    <section className="section-padding bg-background" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="relative p-7 rounded-2xl bg-surface border border-gray-100 shadow-card hover:shadow-card-hover hover:border-secondary/20 transition-all duration-300"
            >
              <Quote className="absolute top-5 end-5 w-8 h-8 text-gray-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 relative">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div
                  className={`w-10 h-10 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 truncate">{item.name}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {item.role}, {item.company}
                  </div>
                </div>
                <div className="ms-auto flex-shrink-0">
                  <span className="text-xs bg-gray-50 text-gray-400 px-2 py-1 rounded-full border border-gray-100">
                    {item.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-heading">
              <AnimatedCounter value={4.9} decimals={1} suffix="/5" />
            </div>
            <div className="text-xs text-gray-500 mt-1">{t("avgRating")}</div>
          </div>
          <div className="border-x border-gray-100">
            <div className="text-2xl font-bold text-heading">
              <AnimatedCounter value={500} suffix="+" />
            </div>
            <div className="text-xs text-gray-500 mt-1">{t("happyClients")}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-heading">
              <AnimatedCounter value={98} suffix="%" />
            </div>
            <div className="text-xs text-gray-500 mt-1">{t("satisfactionRate")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

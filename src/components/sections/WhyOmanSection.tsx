"use client";

import React from "react";
import { MapPin, TrendingUp, Shield, BarChart3, Globe, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = [MapPin, TrendingUp, Shield, BarChart3, Globe, Building2];

export default function WhyOmanSection() {
  const t = useTranslations("WhyOmanSection");
  const stats = t.raw("stats") as { value: string; label: string; note: string }[];
  const reasons = t.raw("reasons") as { value: string; title: string; description: string }[];

  return (
    <section className="section-padding bg-surface relative overflow-hidden" aria-labelledby="why-oman-heading">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 end-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
          className="mb-14"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-secondary/5 to-transparent border border-secondary/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl border border-gray-100 bg-surface hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                      {reason.value}
                    </div>
                    <h3 className="text-base font-bold text-heading mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">{t("disclaimer")}</p>
      </div>
    </section>
  );
}

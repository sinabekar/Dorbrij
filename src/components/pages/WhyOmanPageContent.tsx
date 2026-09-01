"use client";

import React from "react";
import { MapPin, TrendingUp, Shield, Globe, Building2, Users, Zap, Award, BarChart3, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import { localeHref, type Locale } from "@/i18n/routing";

const keyFactIcons = [Shield, TrendingUp, Award, BarChart3, Globe, Users];
const advantageIcons = [MapPin, Shield, Building2, TrendingUp, Zap, Globe];

type KeyFact = { value: string; label: string };
type Advantage = { title: string; description: string };
type FreeZone = { name: string; focus: string; location: string; highlights: string[] };
type Opportunity = { sector: string; growth: string; level: "very-high" | "high" | "medium"; reason: string };

const growthStyles: Record<Opportunity["level"], string> = {
  "very-high": "bg-secondary/10 text-secondary",
  high: "bg-green-100 text-green-700",
  medium: "bg-gray-100 text-gray-600",
};

export default function WhyOmanPageContent() {
  const t = useTranslations("WhyOmanPage");
  const locale = useLocale() as Locale;
  const keyFacts = t.raw("keyFacts") as KeyFact[];
  const advantages = t.raw("advantages") as Advantage[];
  const freeZones = t.raw("freeZones") as FreeZone[];
  const opportunities = t.raw("opportunities") as Opportunity[];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 end-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {t("heroBadge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              {t("heroTitleLine1")}
              <br />
              <span className="text-gradient-accent">{t("heroTitleHighlight")}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{t("heroDescription")}</p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-14 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFacts.map((fact, i) => {
              const Icon = keyFactIcons[i];
              return (
                <div key={fact.label} className="text-center p-5 rounded-2xl border border-gray-100 bg-background">
                  <Icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-heading mb-1">{fact.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{fact.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader badge={t("advantagesBadge")} title={t("advantagesTitle")} className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => {
              const Icon = advantageIcons[i];
              return (
                <div key={adv.title} className="p-8 rounded-2xl border border-gray-100 bg-surface hover:border-secondary/30 hover:shadow-card transition-all">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-3">{adv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free zones */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container-custom">
          <SectionHeader
            badge={t("freeZonesBadge")}
            title={t("freeZonesTitle")}
            description={t("freeZonesDescription")}
            className="mb-12 [&_h2]:text-white [&_p]:text-white/60"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {freeZones.map((zone) => (
              <div key={zone.name} className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{zone.name}</h3>
                  <span className="text-xs text-accent font-medium px-2.5 py-1 rounded-full bg-accent/10">
                    {zone.location}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-4 font-medium">{zone.focus}</p>
                <ul className="space-y-2">
                  {zone.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business opportunities */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            badge={t("opportunitiesBadge")}
            title={t("opportunitiesTitle")}
            description={t("opportunitiesDescription")}
            className="mb-12"
          />
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-start px-6 py-4 font-semibold text-gray-900">{t("tableSector")}</th>
                  <th className="text-start px-6 py-4 font-semibold text-gray-900">{t("tableGrowth")}</th>
                  <th className="text-start px-6 py-4 font-semibold text-gray-900 hidden md:table-cell">{t("tableDrivers")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {opportunities.map((opp) => (
                  <tr key={opp.sector} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{opp.sector}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${growthStyles[opp.level]}`}>
                        {opp.growth}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{opp.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <a
              href={localeHref(locale, "/contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
            >
              {t("exploreCta")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>
        </div>
      </section>

      <CTASection title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
    </>
  );
}

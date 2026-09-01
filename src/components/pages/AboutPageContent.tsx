"use client";

import React from "react";
import { Heart, Target, Eye, Shield, Users, TrendingUp, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

const valueIcons = [Shield, Users, TrendingUp, Star, Heart, Eye];
const teamColors = ["bg-secondary", "bg-blue-600", "bg-accent", "bg-teal-600"];
const teamInitials = ["AB", "PS", "OR", "LW"];

type Value = { title: string; description: string };
type TeamMember = { name: string; role: string; background: string };
type Milestone = { year: string; title: string; desc: string };

export default function AboutPageContent() {
  const t = useTranslations("AboutPage");
  const values = t.raw("values") as Value[];
  const team = t.raw("team") as TeamMember[];
  const milestones = t.raw("milestones") as Milestone[];
  const storyParagraphs = t.raw("storyParagraphs") as string[];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 end-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
            {t("heroBadge")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {t("heroTitleLine1")}
            <br />
            <span className="text-gradient-accent">{t("heroTitleHighlight")}</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{t("heroDescription")}</p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-secondary/5 border border-secondary/10">
              <Target className="w-8 h-8 text-secondary mb-4" />
              <h2 className="text-2xl font-bold text-heading mb-3">{t("missionTitle")}</h2>
              <p className="text-gray-600 leading-relaxed">{t("missionDescription")}</p>
            </div>
            <div className="p-8 rounded-2xl bg-accent/5 border border-accent/10">
              <Eye className="w-8 h-8 text-accent-600 mb-4" />
              <h2 className="text-2xl font-bold text-heading mb-3">{t("visionTitle")}</h2>
              <p className="text-gray-600 leading-relaxed">{t("visionDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeader badge={t("storyBadge")} title={t("storyTitle")} align="left" className="mb-8" />
          <div className="prose prose-gray max-w-none space-y-4 text-gray-600 text-base leading-relaxed">
            {storyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader badge={t("valuesBadge")} title={t("valuesTitle")} className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={value.title} className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-card transition-all">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-heading mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background" id="team">
        <div className="container-custom">
          <SectionHeader
            badge={t("teamBadge")}
            title={t("teamTitle")}
            description={t("teamDescription")}
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div key={member.name} className="p-6 rounded-2xl bg-surface border border-gray-100 text-center hover:shadow-card transition-all">
                <div
                  className={`w-16 h-16 ${teamColors[i]} rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}
                  dir="ltr"
                >
                  {teamInitials[i]}
                </div>
                <h3 className="font-bold text-heading mb-0.5">{member.name}</h3>
                <p className="text-xs text-secondary font-semibold mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container-custom">
          <SectionHeader
            badge={t("journeyBadge")}
            title={t("journeyTitle")}
            className="mb-12 [&_h2]:text-white [&_.badge-secondary]:bg-white/10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m) => (
              <div key={m.year} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-accent mb-2">{m.year}</div>
                <h3 className="text-white font-semibold mb-1.5">{m.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
    </>
  );
}

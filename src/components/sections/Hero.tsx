"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, CheckCircle2, Star, Building2, Users, Award } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { localeHref, type Locale } from "@/i18n/routing";
import { whatsappLink } from "@/lib/whatsapp";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  const t = useTranslations("Hero");
  const tw = useTranslations("WhatsApp");
  const locale = useLocale() as Locale;

  const stats = [
    { value: 500, suffix: "+", label: t("stats.businesses") },
    { value: 48, suffix: "h", label: t("stats.processing") },
    { value: 15, suffix: "+", label: t("stats.countries") },
    { value: 98, suffix: "%", label: t("stats.satisfaction") },
  ];

  const trustBadges = [t("trustBadges.consultation"), t("trustBadges.licensed"), t("trustBadges.pricing")];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs — emerald + a touch of gold for warmth */}
      <div className="absolute top-1/4 end-0 w-[32rem] h-[32rem] glow-emerald rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 start-1/4 w-96 h-96 glow-gold rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              {t("badge")}
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight">
                {t("headlineLine1")}
                <br />
                {t("headlineLine2")}{" "}
                <span className="text-gradient-accent">{t("headlineHighlight")}</span>
              </h1>
              <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg mt-6">
                {t("subtitle")}
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {badge}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(tw("messages.general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-secondary text-white text-sm font-bold rounded-full shadow-[0_1px_2px_rgba(10,15,13,0.1),0_12px_28px_-8px_rgba(14,169,104,0.55)] hover:bg-secondary-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                {t("ctaWhatsapp")}
              </a>
              <Link
                href={localeHref(locale, "/contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.06] text-white text-sm font-semibold rounded-full border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-200"
              >
                {t("ctaContact")}
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {["A", "B", "C", "D", "E"].map((char, i) => (
                  <div
                    key={char}
                    className="w-8 h-8 rounded-full border-2 border-primary bg-secondary/60 flex items-center justify-center text-white text-xs font-semibold"
                    style={{ zIndex: 5 - i }}
                  >
                    {char}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xs text-white/60 mt-0.5">{t("socialProof")}</p>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative hidden lg:block">
            <HeroIllustration />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  const t = useTranslations("Hero.illustration");

  const steps = [
    { label: t("step1"), done: true },
    { label: t("step2"), done: true },
    { label: t("step3"), done: false, active: true },
    { label: t("step4"), done: false },
  ];

  return (
    <div className="relative">
      {/* Main card */}
      <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/60">{t("companyStatus")}</p>
              <p className="text-sm font-semibold text-white">{t("registrationActive")}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-green-300 font-medium">{t("active")}</span>
          </div>
        </div>

        {/* Progress steps */}
        <div className="space-y-3 mb-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.done
                    ? "bg-green-500/20 border border-green-500/50"
                    : step.active
                    ? "bg-accent/20 border border-accent/50"
                    : "bg-white/10 border border-white/20"
                }`}
              >
                {step.done ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                ) : step.active ? (
                  <div className="w-2 h-2 rounded-full bg-accent" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                )}
              </div>
              <span
                className={`text-sm ${
                  step.done
                    ? "text-white/70 line-through"
                    : step.active
                    ? "text-white font-medium"
                    : "text-white/40"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-between py-3 border-t border-white/10">
          <span className="text-xs text-white/50">{t("estimatedCompletion")}</span>
          <span className="text-xs font-semibold text-accent">{t("businessDays")}</span>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute top-[-75px] end-[-1.25rem] glass rounded-2xl p-4 border border-white/20 shadow-lg animate-float">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
            <Award className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs text-white/60">{t("successRate")}</p>
            <p className="text-sm font-bold text-white">98.7%</p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-[-90px] start-[-1.25rem] glass rounded-2xl p-4 border border-white/20 shadow-lg animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Users className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-xs text-white/60">{t("newThisMonth")}</p>
            <p className="text-sm font-bold text-white">{t("newBusinesses")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

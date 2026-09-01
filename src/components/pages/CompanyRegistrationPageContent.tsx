"use client";

import React from "react";
import { CheckCircle2, Clock, Building2, ArrowRight, Shield, Globe, TrendingUp, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { whatsappLink } from "@/lib/whatsapp";

const benefitIcons = [Globe, Shield, TrendingUp, Building2];

type Structure = {
  name: string;
  description: string;
  bestFor: string;
  minCapital: string;
  timeline: string;
  recommended: boolean;
};
type Benefit = { title: string; description: string };
type Process = { title: string; time: string; desc: string };

export default function CompanyRegistrationPageContent() {
  const t = useTranslations("CompanyRegistrationPage");
  const tw = useTranslations("WhatsApp");
  const benefits = t.raw("benefits") as Benefit[];
  const structures = t.raw("structures") as Structure[];
  const documents = t.raw("documents") as string[];
  const process = t.raw("process") as Process[];
  const whatsapp = whatsappLink(tw("messages.companyRegistration"));

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
              <Building2 className="w-3.5 h-3.5 text-accent" />
              {t("heroBadge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              {t("heroTitleLine1")}
              <br />
              <span className="text-gradient-accent">{t("heroTitleHighlight")}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{t("heroDescription")}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white text-sm font-bold rounded-full hover:bg-secondary-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {t("ctaStart")}
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                {t("ctaAsk")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader badge={t("benefitsBadge")} title={t("benefitsTitle")} className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={b.title} className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-surface hover:border-secondary/30 hover:shadow-card transition-all">
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading mb-1.5">{b.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Structures */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge={t("structuresBadge")}
            title={t("structuresTitle")}
            description={t("structuresDescription")}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {structures.map((s) => (
              <div
                key={s.name}
                className={`relative p-7 rounded-2xl border bg-surface transition-all ${
                  s.recommended ? "border-secondary shadow-card" : "border-gray-100 hover:border-secondary/30 hover:shadow-card"
                }`}
              >
                {s.recommended && (
                  <span className="absolute top-4 end-4 px-2.5 py-1 rounded-full bg-secondary text-white text-xs font-bold">
                    {t("recommendedLabel")}
                  </span>
                )}
                <h3 className="text-base font-bold text-heading mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">{t("bestForLabel")}</span>
                    <span className="font-medium text-gray-800">{s.bestFor}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">{t("minCapitalLabel")}</span>
                    <span className="font-medium text-gray-800">{s.minCapital}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">{t("timelineLabel")}</span>
                    <span className="font-semibold text-secondary">{s.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required documents */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            badge={t("documentsBadge")}
            title={t("documentsTitle")}
            description={t("documentsDescription")}
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documents.map((doc) => (
              <div key={doc} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeader
            badge={t("processBadge")}
            title={t("processTitle")}
            className="mb-12 [&_h2]:text-white [&_.badge-secondary]:bg-white/10"
          />
          <div className="max-w-2xl mx-auto">
            {process.map((p, i) => (
              <div key={p.title} className="flex gap-5 pb-8 relative">
                {i < process.length - 1 && (
                  <div className="absolute start-5 top-10 bottom-0 w-0.5 bg-white/10" />
                )}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold text-sm z-10">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <span className="flex items-center gap-1 text-xs text-white/50">
                      <Clock className="w-3 h-3" />
                      {p.time}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA — replaces the old multi-step form */}
      <section className="section-padding bg-background" id="get-started">
        <div className="container-custom max-w-xl">
          <SectionHeader badge={t("formBadge")} title={t("formTitle")} description={t("formDescription")} className="mb-10" />
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white text-base font-bold rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t("whatsappCta")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
      </section>

      <FAQSection limit={6} />
      <CTASection title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
    </>
  );
}

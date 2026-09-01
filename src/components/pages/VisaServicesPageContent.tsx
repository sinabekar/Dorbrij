"use client";

import React from "react";
import { CheckCircle2, Clock, ArrowRight, Stamp, Users, Heart, Shield, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import { whatsappLink } from "@/lib/whatsapp";

const visaIcons = [Stamp, Users, Heart];
const visaColors: { badge: string; icon: string; border: string }[] = [
  { badge: "bg-secondary/10 text-secondary", icon: "text-secondary bg-secondary/10", border: "border-secondary/20" },
  { badge: "bg-accent/10 text-accent-600", icon: "text-accent-600 bg-accent/10", border: "border-accent/20" },
  { badge: "bg-secondary/10 text-secondary", icon: "text-secondary bg-secondary/10", border: "border-secondary/20" },
];

type VisaType = {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  documents: string[];
  timeline: string;
  validity: string;
  whatsappKey: string;
  applyLabel: string;
};

export default function VisaServicesPageContent() {
  const t = useTranslations("VisaServicesPage");
  const tw = useTranslations("WhatsApp");
  const visaTypes = t.raw("visaTypes") as VisaType[];
  const quickStats = t.raw("quickStats") as { label: string; value: string }[];
  const generalWhatsapp = whatsappLink(tw("messages.visaServices"));

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
              <Stamp className="w-3.5 h-3.5 text-accent" />
              {t("heroBadge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              {t("heroTitleLine1")}
              <br />
              <span className="text-gradient-accent">{t("heroTitleHighlight")}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{t("heroDescription")}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#visas" className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white text-sm font-bold rounded-full hover:bg-secondary-700 transition-all">
                {t("ctaExplore")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
              <a href={generalWhatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <MessageCircle className="w-4 h-4" />
                {t("ctaAsk")}
              </a>
            </div>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-5 mt-10">
              {quickStats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-xl font-bold text-accent">{s.value}</span>
                  <span className="text-xs text-white/60">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visa types */}
      <section className="section-padding bg-background" id="visas">
        <div className="container-custom space-y-10">
          {visaTypes.map((visa, i) => {
            const Icon = visaIcons[i];
            const colors = visaColors[i];
            const applyHref = whatsappLink(tw(`messages.${visa.whatsappKey}`));
            return (
              <div key={visa.id} id={visa.id} className={`rounded-3xl border ${colors.border} bg-surface overflow-hidden`}>
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-heading mb-1">{visa.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{visa.description}</p>
                    </div>
                  </div>

                  {/* Timeline & validity */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        <span className="text-gray-400 me-1">{t("processingLabel")}</span> {visa.timeline}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        <span className="text-gray-400 me-1">{t("validityLabel")}</span> {visa.validity}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        {t("eligibilityHeading")}
                      </h3>
                      <ul className="space-y-2.5">
                        {visa.eligibility.map((req) => (
                          <li key={req} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        {t("documentsHeading")}
                      </h3>
                      <ul className="space-y-2.5">
                        {visa.documents.map((doc) => (
                          <li key={doc} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a
                      href={applyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
                    >
                      {visa.applyLabel}
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WhatsApp CTA — replaces the old multi-step form */}
      <section className="section-padding bg-surface" id="get-started">
        <div className="container-custom max-w-xl">
          <SectionHeader badge={t("formBadge")} title={t("formTitle")} description={t("formDescription")} className="mb-10" />
          <a
            href={generalWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white text-base font-bold rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t("whatsappCta")}
          </a>
        </div>
      </section>

      <CTASection title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
    </>
  );
}

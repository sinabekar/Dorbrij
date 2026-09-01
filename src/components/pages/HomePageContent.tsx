"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyOmanSection from "@/components/sections/WhyOmanSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import AIFeatures from "@/components/sections/AIFeatures";
import { whatsappLink } from "@/lib/whatsapp";

export default function HomePageContent() {
  const t = useTranslations("HomePage");
  const tw = useTranslations("WhatsApp");
  const points = t.raw("formPoints") as string[];

  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyOmanSection />
      <HowItWorks />
      <AIFeatures />
      <Testimonials />

      {/* WhatsApp-first lead section — one tap instead of a multi-step form */}
      <section className="section-padding bg-background" id="get-started" aria-labelledby="form-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t("formBadge")}
              </span>
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-heading mb-5 leading-tight">
                {t("formTitle")}{" "}
                <span className="text-gradient-accent">{t("formTitleHighlight")}</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">{t("formDescription")}</p>
              <div className="space-y-4">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface rounded-3xl border border-gray-100 shadow-card p-8 md:p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <a
                href={whatsappLink(tw("messages.consultation"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-500 text-white text-base font-bold rounded-xl hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                {t("whatsappCta")}
              </a>
              <p className="text-xs text-gray-400 mt-4">{t("whatsappSubCta")}</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection limit={8} />
      <CTASection />
    </>
  );
}

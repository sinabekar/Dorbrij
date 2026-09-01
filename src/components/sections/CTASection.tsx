"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { localeHref, type Locale } from "@/i18n/routing";
import { whatsappLink } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light" | "accent";
}

export default function CTASection({ title, subtitle, variant = "dark" }: CTASectionProps) {
  const t = useTranslations("CTASection");
  const tw = useTranslations("WhatsApp");
  const locale = useLocale() as Locale;

  const resolvedTitle = title ?? t("defaultTitle");
  const resolvedSubtitle = subtitle ?? t("defaultSubtitle");

  const bgClass =
    variant === "dark"
      ? "gradient-hero"
      : variant === "accent"
      ? "bg-secondary"
      : "bg-background";

  const titleClass = variant === "light" ? "text-heading" : "text-white";
  const subtitleClass = variant === "light" ? "text-gray-600" : "text-white/70";

  return (
    <section className={`py-20 relative overflow-hidden ${bgClass}`} aria-labelledby="cta-heading">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 end-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-80 h-80 glow-gold rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 id="cta-heading" className={`text-3xl md:text-4xl font-bold mb-4 ${titleClass}`}>
              {resolvedTitle}
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${subtitleClass}`}>
              {resolvedSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink(tw("messages.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white text-sm font-bold rounded-full shadow-[0_1px_2px_rgba(10,15,13,0.1),0_12px_28px_-8px_rgba(14,169,104,0.5)] hover:bg-secondary-700 transition-all duration-200 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              {t("whatsapp")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <Link
              href={localeHref(locale, "/contact")}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-full border transition-all duration-200 ${
                variant === "light"
                  ? "bg-surface text-gray-800 border-gray-200 hover:bg-gray-50"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              {t("contact")}
            </Link>
          </div>

          <p className={`text-xs ${variant === "light" ? "text-gray-400" : "text-white/40"}`}>
            {t("footnote")}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Building2, Stamp, Users, Heart, MessageSquare, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { localeHref, type Locale } from "@/i18n/routing";
import { whatsappLink } from "@/lib/whatsapp";

const icons = [Building2, Stamp, Users, Heart, MessageSquare, TrendingUp];
const hrefs = ["/company-registration", "/visa-services#investor", "/visa-services#employment", "/visa-services#family", "/contact", "#"];
const colors = ["secondary", "accent", "secondary", "accent", "secondary", "muted"] as const;

const colorMap: Record<string, { bg: string; icon: string }> = {
  secondary: { bg: "bg-secondary/10", icon: "text-secondary" },
  accent: { bg: "bg-accent/10", icon: "text-accent-600" },
  muted: { bg: "bg-gray-100", icon: "text-gray-400" },
};

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");
  const tw = useTranslations("WhatsApp");
  const locale = useLocale() as Locale;
  const services = t.raw("services") as { title: string; description: string; badge: string }[];

  return (
    <section className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container-custom">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i];
            const colorStyle = colorMap[colors[i]];
            const disabled = hrefs[i] === "#";

            const cardClassName = `group relative p-7 rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-300 ${
              disabled
                ? "opacity-60 cursor-not-allowed"
                : "hover:border-secondary/30 hover:shadow-card-hover hover:-translate-y-0.5"
            }`;

            const cardContent = (
              <>
                {service.badge && (
                  <div
                    className={`absolute top-4 end-4 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      i === 0 ? "bg-secondary/10 text-secondary" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {service.badge}
                  </div>
                )}

                <div className={`w-12 h-12 ${colorStyle.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${colorStyle.icon}`} />
                </div>

                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{service.description}</p>

                {!disabled && (
                  <Link
                    href={localeHref(locale, hrefs[i])}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all duration-200"
                  >
                    {t("learnMore")}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                )}
              </>
            );

            return disabled ? (
              <div key={service.title} className={cardClassName}>
                {cardContent}
              </div>
            ) : (
              <SpotlightCard key={service.title} className={cardClassName}>
                {cardContent}
              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">{t("notSure")}</p>
          <a
            href={whatsappLink(tw("messages.general"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}

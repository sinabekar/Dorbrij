"use client";

import React from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/whatsapp";

const methodIcons = [MessageCircle, Phone, Mail, MapPin];
const methodColors = [
  "bg-green-100 text-green-600",
  "bg-secondary/10 text-secondary",
  "bg-accent/10 text-accent-600",
  "bg-blue-50 text-blue-600",
];
const methodHrefs = (whatsapp: string) => [whatsapp, "tel:+96890000000", "mailto:hello@dorbrij.om", "#map"];

type Method = { label: string; value: string; description: string };
type Hours = { day: string; hours: string };

export default function ContactPageContent() {
  const t = useTranslations("ContactPage");
  const tw = useTranslations("WhatsApp");
  const methods = t.raw("methods") as Method[];
  const officeHours = t.raw("officeHours") as Hours[];
  const whatsapp = whatsappLink(tw("messages.contactPage"));
  const hrefs = methodHrefs(whatsapp);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 end-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6">
              <MessageCircle className="w-3.5 h-3.5 text-accent" />
              {t("heroBadge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {t("heroTitleLine1")}
              <br />
              <span className="text-gradient-accent">{t("heroTitleHighlight")}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{t("heroDescription")}</p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-14 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map((method, i) => {
              const Icon = methodIcons[i];
              const isExternal = i === 0;
              const content = (
                <div className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-card transition-all group">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${methodColors[i]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                    {method.label}
                  </p>
                  <p className="font-bold text-gray-900 mb-1" dir={i === 1 || i === 2 ? "ltr" : undefined}>
                    {method.value}
                  </p>
                  <p className="text-xs text-gray-400">{method.description}</p>
                </div>
              );

              return isExternal ? (
                <a key={method.label} href={hrefs[i]} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <a key={method.label} href={hrefs[i]}>
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office info + primary WhatsApp CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
            {/* WhatsApp — primary path */}
            <div className="p-8 rounded-2xl bg-green-50 border border-green-100">
              <MessageCircle className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-950 mb-2">{t("whatsappTitle")}</h3>
              <p className="text-sm text-green-800 mb-6 leading-relaxed">{t("whatsappDescription")}</p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 text-center bg-green-500 text-white text-base font-bold rounded-xl hover:bg-green-600 transition-colors"
              >
                {t("whatsappCta")}
              </a>
            </div>

            {/* Office hours */}
            <div className="p-8 rounded-2xl bg-surface border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-secondary" />
                <h3 className="font-bold text-gray-900">{t("officeHoursTitle")}</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-sm text-gray-500">{h.day}</span>
                    <span className={`text-sm font-medium ${h.hours === officeHours[3].hours ? "text-gray-300" : "text-gray-800"}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface pb-20" id="map">
        <div className="container-custom">
          <div className="rounded-3xl overflow-hidden border border-gray-100 h-72 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400 font-medium">{t("mapPlaceholderTitle")}</p>
              <p className="text-gray-300 text-sm">{t("mapPlaceholderSubtitle")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

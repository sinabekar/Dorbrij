"use client";

import React from "react";
import { Bot, Calculator, FileSearch, ListChecks, Sparkles, MessageSquare } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { localeHref, type Locale } from "@/i18n/routing";

const icons = [Bot, FileSearch, Calculator, ListChecks, MessageSquare, Sparkles];

export default function AIFeatures() {
  const t = useTranslations("AIFeatures");
  const locale = useLocale() as Locale;
  const tools = t.raw("tools") as { title: string; description: string; status: string }[];

  return (
    <section className="section-padding bg-background relative overflow-hidden" aria-labelledby="ai-heading">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(11,110,79,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative container-custom">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3" />
            {t("badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            {t("title")}
            <br />
            <span className="text-gradient-accent">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => {
            const Icon = icons[i];
            return (
              <div
                key={tool.title}
                className="relative p-6 rounded-2xl bg-surface border border-gray-100 shadow-card overflow-hidden group hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <Badge variant="muted" className="text-xs">{tool.status}</Badge>
                  </div>
                  <h3 className="text-base font-bold text-heading mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            {t("earlyAccessText")}{" "}
            <a href={localeHref(locale, "/contact")} className="text-secondary font-semibold hover:underline">
              {t("earlyAccessLink")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

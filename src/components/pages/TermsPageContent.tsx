"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { localeHref, type Locale } from "@/i18n/routing";

export default function TermsPageContent() {
  const t = useTranslations("TermsPage");
  const locale = useLocale() as Locale;
  const sections = t.raw("sections") as { title: string; body: string }[];
  const contactEmail = t("contactEmail");

  return (
    <>
      <section className="gradient-hero pt-24 pb-14">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{t("title")}</h1>
          <p className="text-white/60 mt-2">{t("lastUpdated")}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <div className="bg-surface rounded-2xl border border-gray-100 p-8 md:p-10 space-y-8 text-sm text-gray-700 leading-relaxed">
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-heading mb-3">{s.title}</h2>
                <p>
                  {s.body}
                  {i === sections.length - 1 && (
                    <>
                      {" "}
                      <a href={`mailto:${contactEmail}`} className="text-secondary hover:underline" dir="ltr">
                        {contactEmail}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href={localeHref(locale, "/")} className="text-sm text-secondary hover:underline">
              {t("backHome")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

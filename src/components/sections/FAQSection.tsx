"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { whatsappLink } from "@/lib/whatsapp";

type Faq = { category: string; q: string; a: string };

export default function FAQSection({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("FAQSection");
  const tw = useTranslations("WhatsApp");
  const faqs = t.raw("items") as Faq[];
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="section-padding bg-surface" aria-labelledby="faq-heading">
      <div className="container-custom max-w-3xl">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          titleHighlight={t("titleHighlight")}
          description={t("description")}
          className="mb-12"
        />

        <div className="space-y-3">
          {items.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-start gap-4 px-6 py-5 text-start hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors ${
                  openIndex === index ? "bg-secondary text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
                <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 ps-16">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {limit && faqs.length > limit && (
          <div className="text-center mt-8">
            <a
              href={whatsappLink(tw("messages.general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-secondary-700 transition-colors"
            >
              {t("moreQuestions")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

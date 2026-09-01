"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTranslations("WhatsApp");

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="relative bg-surface rounded-2xl shadow-xl border border-gray-100 p-4 max-w-xs animate-fade-up">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-3 end-3 text-gray-400 hover:text-gray-600"
            aria-label={t("close")}
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm font-semibold text-gray-900 mb-1">{t("widgetTitle")}</p>
          <p className="text-xs text-gray-500 mb-3">{t("widgetSubtitle")}</p>
          <a
            href={whatsappLink(t("messages.general"))}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 bg-secondary text-white text-sm font-semibold text-center rounded-lg hover:bg-secondary-700 transition-colors"
          >
            {t("startChat")}
          </a>
        </div>
      )}

      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label={t("widgetTitle")}
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

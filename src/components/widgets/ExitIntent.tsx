"use client";

import React, { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const t = useTranslations("ExitIntent");

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setShow(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDismiss();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-surface rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-up">
        {/* Top accent */}
        <div className="h-1.5 bg-secondary" />

        <button
          onClick={handleDismiss}
          className="absolute top-4 end-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label={t("close")}
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-8">
          {/* Icon */}
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5">
            <Download className="w-7 h-7 text-secondary" />
          </div>

          <h3 className="text-2xl font-bold text-heading mb-2">{t("title")}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{t("description")}</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="exit-email" className="sr-only">
              {t("emailLabel")}
            </label>
            <input
              id="exit-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
            >
              {t("submit")}
            </button>
          </form>

          <button
            onClick={handleDismiss}
            className="mt-4 w-full text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            {t("dismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, Stamp, MessageCircle, BookOpen } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { localeHref, type Locale } from "@/i18n/routing";
import { whatsappLink } from "@/lib/whatsapp";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations("MobileBottomNav");
  const tw = useTranslations("WhatsApp");
  const lh = (path: string) => localeHref(locale, path);

  const navItems = [
    { href: lh("/"), label: t("home"), icon: Home },
    { href: lh("/company-registration"), label: t("register"), icon: Building2 },
    { href: lh("/visa-services"), label: t("visas"), icon: Stamp },
    { href: lh("/blog"), label: t("blog"), icon: BookOpen },
    {
      href: whatsappLink(tw("messages.general")),
      label: t("whatsapp"),
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 start-0 end-0 z-40 bg-surface border-t border-gray-100 mobile-bottom-safe"
      aria-label={t("navLabel")}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = !item.external && pathname === item.href;

          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl"
                aria-label={item.label}
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-medium text-green-600">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                isActive ? "text-secondary" : "text-gray-400 hover:text-gray-600"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-secondary" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

"use client";

import React from "react";
import { UserCheck, Zap, Eye, HeartHandshake, Briefcase, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Marquee from "@/components/ui/Marquee";
import SpotlightCard from "@/components/ui/SpotlightCard";

const icons = [UserCheck, Zap, Eye, HeartHandshake, Briefcase, ShieldCheck];

const logos = ["Muscat Bay", "Al Mouj", "Port Sultan Qaboos", "Knowledge Oasis Muscat", "Duqm SEZ"];

export default function TrustSection() {
  const t = useTranslations("TrustSection");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="py-20 bg-surface" aria-labelledby="trust-heading">
      <div className="container-custom">
        {/* Partner logos strip */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-6">
            {t("trustedBy")}
          </p>
          <Marquee>
            {logos.map((name) => (
              <span key={name} dir="ltr" className="text-gray-300 font-bold text-sm md:text-base tracking-wide whitespace-nowrap">
                {name}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-14" />

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <SpotlightCard
                key={item.title}
                className="group p-6 rounded-2xl border border-gray-100 bg-surface hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

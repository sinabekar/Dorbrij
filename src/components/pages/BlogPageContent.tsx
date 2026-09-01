"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import CTASection from "@/components/sections/CTASection";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { localeHref, type Locale } from "@/i18n/routing";

const categoryColorClasses = [
  "bg-secondary/10 text-secondary", // Company Registration
  "bg-accent/10 text-accent-600", // Visa Guide
  "bg-blue-100 text-blue-700", // Investment
  "bg-purple-100 text-purple-700", // Tax & Accounting
  "bg-teal-100 text-teal-700", // Free Zones
];

type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured: boolean;
};

export default function BlogPageContent() {
  const t = useTranslations("BlogPage");
  const locale = useLocale() as Locale;
  const categories = t.raw("categories") as string[];
  const posts = t.raw("posts") as Post[];
  const categoryColor = (category: string) => {
    const idx = categories.indexOf(category);
    return categoryColorClasses[(idx - 1 + categoryColorClasses.length) % categoryColorClasses.length] || "bg-gray-100 text-gray-600";
  };

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 end-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container-custom relative max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t("heroTitle")}
            <span className="text-gradient-accent">{t("heroTitleHighlight")}</span>
          </h1>
          <p className="text-white/70 text-lg">{t("heroDescription")}</p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-surface border-b border-gray-100 sticky top-[64px] z-30">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === categories[0] ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Featured post */}
          {featured && (
            <div className="mb-10">
              <Link
                href={localeHref(locale, `/blog/${featured.slug}`)}
                className="group block p-8 md:p-10 rounded-3xl bg-surface border border-gray-100 hover:border-secondary/30 hover:shadow-card-hover transition-all"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor(featured.category)}`}>
                        {featured.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {t("featuredLabel")}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                      <span>{featured.date}</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/5 border border-gray-100 flex items-center justify-center">
                      <div className="text-center px-8">
                        <div className="text-4xl font-black text-secondary/20 mb-2" dir="ltr">CR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={localeHref(locale, `/blog/${post.slug}`)}
                className="group p-6 rounded-2xl bg-surface border border-gray-100 hover:border-secondary/30 hover:shadow-card-hover transition-all"
              >
                {/* Card image placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-5 flex items-center justify-center border border-gray-100">
                  <Tag className="w-8 h-8 text-gray-200" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                <h2 className="font-bold text-heading text-base mb-2 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-secondary group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-surface">
        <div className="container-custom max-w-xl text-center">
          <h3 className="text-2xl font-bold text-heading mb-3">{t("newsletterTitle")}</h3>
          <p className="text-gray-500 text-sm mb-6">{t("newsletterDescription")}</p>
          <NewsletterForm variant="light" />
        </div>
      </section>

      <CTASection />
    </>
  );
}

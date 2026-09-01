"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight, ArrowLeft, Share2, CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import CTASection from "@/components/sections/CTASection";
import { localeHref, type Locale } from "@/i18n/routing";

type BlogPost = {
  category: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  content: string[];
};

export default function BlogPostPageContent() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const t = useTranslations("BlogPostPage");
  const locale = useLocale() as Locale;
  const allPosts = t.raw("posts") as Record<string, BlogPost>;
  const notFound = t.raw("notFound") as { category: string; title: string; description: string; content: string };
  const post: BlogPost = allPosts[slug] ?? {
    category: notFound.category,
    title: notFound.title,
    description: notFound.description,
    readTime: "—",
    date: "—",
    content: [notFound.content],
  };

  const tableOfContents = t.raw("tableOfContents") as string[];
  const checkpoints = t.raw("checkpoints") as string[];
  const takeaways = t.raw("takeaways") as string[];

  const relatedPosts = Object.entries(allPosts)
    .filter(([s]) => s !== slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-24 pb-14">
        <div className="container-custom max-w-3xl">
          <Link
            href={localeHref(locale, "/blog")}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t("backToBlog")}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-secondary-100 text-xs font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">{post.title}</h1>
          <p className="text-white/70 text-lg mb-8">{post.description}</p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>{post.date}</span>
            <button className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Share2 className="w-4 h-4" />
              {t("share")}
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="bg-surface rounded-2xl p-8 border border-gray-100 mb-6">
                {post.content.map((paragraph, i) => (
                  <p key={i} className={`text-gray-700 text-base leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Checklist */}
              <div className="bg-surface rounded-2xl p-8 border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-heading mb-6">{t("checklistTitle")}</h2>
                <div className="space-y-3">
                  {checkpoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key takeaways */}
              <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-heading mb-4">{t("keyTakeawaysTitle")}</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {takeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary font-bold flex-shrink-0">←</span>
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA in article */}
              <div className="mt-8 p-6 rounded-2xl border border-secondary/20 bg-surface flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-heading mb-1">{t("ctaInArticleTitle")}</h4>
                  <p className="text-sm text-gray-500">{t("ctaInArticleDescription")}</p>
                </div>
                <Link
                  href={localeHref(locale, "/contact")}
                  className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors whitespace-nowrap"
                >
                  {t("ctaInArticleButton")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Table of contents */}
              <div className="p-6 rounded-2xl bg-surface border border-gray-100 sticky top-24">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">{t("tocTitle")}</h3>
                <ol className="space-y-2.5">
                  {tableOfContents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-xs text-secondary font-bold flex-shrink-0 mt-0.5" dir="ltr">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-gray-600 hover:text-secondary transition-colors cursor-pointer leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
                <Link
                  href={localeHref(locale, "/contact")}
                  className="block w-full mt-6 py-3 text-center bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-700 transition-colors"
                >
                  {t("bookFreeConsultation")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 bg-background">
          <div className="container-custom">
            <h3 className="text-xl font-bold text-heading mb-6">{t("relatedTitle")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedPosts.map(([relatedSlug, related]) => (
                <Link
                  key={relatedSlug}
                  href={localeHref(locale, `/blog/${relatedSlug}`)}
                  className="group p-6 rounded-2xl bg-surface border border-gray-100 hover:border-secondary/30 hover:shadow-card transition-all"
                >
                  <span className="text-xs font-semibold text-secondary">{related.category}</span>
                  <h4 className="font-bold text-heading mt-2 mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {related.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

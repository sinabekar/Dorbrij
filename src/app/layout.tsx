import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import FloatingCTA from "@/components/widgets/FloatingCTA";
import ExitIntent from "@/components/widgets/ExitIntent";
import messages from "../../messages/fa.json";

// Loaded via a plain <link> rather than next/font/google: Turbopack's
// build-time font optimizer failed to resolve Vazirmatn in CI (module
// resolution error for '@vercel/turbopack-next/internal/font/google/font'),
// even though it built fine locally. A <link> tag has the browser fetch the
// font at request time instead, which sidesteps that build-time dependency
// entirely and is a safer default for a static export built in CI anyway.

export const metadata: Metadata = {
  title: {
    default: "دوربریج — در و پل شما به سوی کسب‌وکار در عمان",
    template: "%s | دوربریج",
  },
  description:
    "دوربریج به کارآفرینان، سرمایه‌گذاران و شرکت‌های بین‌المللی کمک می‌کند کسب‌وکار خود را در عمان تأسیس و گسترش دهند. ثبت شرکت، ویزای سرمایه‌گذاری، ویزای کاری و راه‌اندازی کامل کسب‌وکار.",
  keywords: [
    "راه‌اندازی کسب‌وکار در عمان",
    "ثبت شرکت در عمان",
    "ویزای سرمایه‌گذاری عمان",
    "ویزای کاری عمان",
    "سرمایه‌گذاری در عمان",
  ],
  openGraph: {
    title: "دوربریج — در و پل شما به سوی کسب‌وکار در عمان",
    description: "از ثبت شرکت تا ویزای سرمایه‌گذاری، دوربریج به شما کمک می‌کند با اطمینان کسب‌وکار خود را در عمان تثبیت کنید.",
    type: "website",
    locale: "fa_IR",
    siteName: "دوربریج",
  },
  twitter: {
    card: "summary_large_image",
    title: "دوربریج — در و پل شما به سوی کسب‌وکار در عمان",
    description: "از ثبت شرکت تا ویزای سرمایه‌گذاری، دوربریج به شما کمک می‌کند با اطمینان کسب‌وکار خود را در عمان تثبیت کنید.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="h-full antialiased"
      style={{ "--font-jakarta": "'Vazirmatn', sans-serif", "--font-inter": "'Vazirmatn', sans-serif" } as React.CSSProperties}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <NextIntlClientProvider locale="fa" messages={messages}>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileBottomNav />
          <WhatsAppButton />
          <FloatingCTA />
          <ExitIntent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SabiGuide — Know Your Next Step | AI-Powered Student Navigation",
  description:
    "SabiGuide helps Nigerian students navigate admissions, scholarships, NELFUND, career opportunities, and more — from WAEC to NYSC. Your AI-powered academic companion on WhatsApp.",
  keywords: [
    "SabiGuide",
    "Nigerian students",
    "JAMB",
    "WAEC",
    "NELFUND",
    "scholarships",
    "admissions",
    "NYSC",
    "WhatsApp",
    "AI education",
    "student guidance",
  ],
  openGraph: {
    title: "SabiGuide — Know Your Next Step",
    description:
      "AI-powered student navigation from WAEC to NYSC. Scholarships, NELFUND, admissions, and career guidance on WhatsApp.",
    type: "website",
    locale: "en_NG",
    siteName: "SabiGuide",
  },
  twitter: {
    card: "summary_large_image",
    title: "SabiGuide — Know Your Next Step",
    description:
      "AI-powered student navigation from WAEC to NYSC.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#00B074" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

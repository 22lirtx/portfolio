import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://layanalharbi.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Layan Alharbi — UI/UX Designer & Product Designer",
    template: "%s — Layan Alharbi",
  },
  description:
    "Layan Alharbi is a Computer Science graduate and UI/UX designer based in Riyadh, specializing in Arabic-first (RTL) interfaces and AI-integrated experiences. Crafting intelligent, human-centered digital products.",
  keywords: [
    "Layan Alharbi",
    "UI/UX Designer",
    "Product Designer",
    "Arabic-first RTL design",
    "AI UX",
    "Computer Science",
    "Riyadh",
    "Saudi Arabia",
    "Design Systems",
    "Figma",
    "Human-centered design",
  ],
  authors: [{ name: "Layan Alharbi" }],
  creator: "Layan Alharbi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Layan Alharbi — Designing experiences that make technology feel human",
    description:
      "A passionate designer and technology enthusiast focused on building intuitive, accessible, and impactful digital products.",
    siteName: "Layan Alharbi",
    images: [
      {
        url: "/brand/logo-card.png",
        width: 1254,
        height: 1254,
        alt: "Layan Alharbi — UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layan Alharbi — UI/UX & Product Designer",
    description:
      "Designing intelligent experiences where technology meets human needs.",
    images: ["/brand/logo-card.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0c0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

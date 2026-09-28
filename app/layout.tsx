import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { source } from "@/lib/source";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumen-browser.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Docs · Lumen",
    template: "%s · Lumen Docs",
  },
  description:
    "Documentation for Lumen, a private iOS browser with a built-in knowledge panel.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${geist.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <RootProvider
          theme={{
            defaultTheme: "dark",
            enableSystem: true,
          }}
          search={{
            options: { api: "/docs/api/search" },
          }}
        >
          <DocsLayout
            tree={source.pageTree}
            nav={{
              title: (
                <span className="flex items-baseline gap-2">
                  <span className="font-grotesk text-[18px] font-bold tracking-[-0.02em]">
                    Lumen
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-fd-muted-foreground uppercase">
                    Docs
                  </span>
                </span>
              ),
              url: "/",
            }}
            links={[
              {
                text: "Colophon",
                url: "https://www.lumen-browser.app/colophon",
                external: true,
              },
            ]}
            githubUrl="https://github.com/Lux-Softworks/Lumen"
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

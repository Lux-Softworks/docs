import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
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
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
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
                <span className="text-[18px] font-bold tracking-[-0.015em]">
                  Lumen Docs
                </span>
              ),
              url: "/",
            }}
            links={[
              { text: "Home", url: "/" },
              { text: "Privacy", url: "/privacy" },
              { text: "Colophon", url: "/colophon" },
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

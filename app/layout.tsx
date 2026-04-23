import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        defaultTheme: "dark",
        enableSystem: true,
      }}
    >
      <DocsLayout
        tree={source.pageTree}
        nav={{
          title: (
            <span className="font-grotesk text-[18px] font-bold tracking-[-0.015em]">
              Lumen Docs
            </span>
          ),
          url: "/docs",
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
  );
}

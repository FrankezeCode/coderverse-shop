import Link from "next/link";
import { BackgroundScene } from "@/components/BackgroundScene";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function CompanyPageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundScene />
      <main className="relative z-10 min-h-screen">
        <SiteHeader />
        <article className="mx-auto max-w-2xl px-4 py-12 pb-8 md:px-8 md:py-16">
          <Link
            href="/"
            className="font-mono text-xs text-cv-muted transition-colors hover:text-white"
          >
            ← Back to shop
          </Link>
          <h1 className="mt-8 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {children}
        </article>
        <SiteFooter />
      </main>
    </>
  );
}

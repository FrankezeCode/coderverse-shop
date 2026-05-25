import Link from "next/link";
import { FOOTER, shareIdeaWhatsAppUrl } from "@/lib/footer";
import { FooterBrandLockup } from "./footer/FooterBrandLockup";
import { FooterNewsletter } from "./footer/FooterNewsletter";
import { FooterPoweredBy } from "./footer/FooterPoweredBy";

type FooterLink = {
  label: string;
  href: string;
  comingSoon?: boolean;
};

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly FooterLink[];
}) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cv-muted">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.comingSoon ? (
              <span className="font-sans text-sm text-white/80">
                {link.label}
                <span className="font-normal text-white/30">
                  {" "}
                  (coming soon)
                </span>
              </span>
            ) : (
              <Link
                href={link.href}
                className="font-sans text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 mt-8 border-t border-white/10 bg-gradient-to-b from-cv-black via-[#030a0c] to-[#051418]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,80,90,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <FooterBrandLockup />
            <div className="mt-4 max-w-sm space-y-2">
              <p className="font-sans text-sm font-semibold leading-snug text-white">
                {FOOTER.brand.taglineTitle}
              </p>
              <p className="font-sans text-sm leading-relaxed text-cv-muted">
                {FOOTER.brand.taglineSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-4">
            <FooterLinkColumn
              title={FOOTER.explore.title}
              links={FOOTER.explore.links}
            />
            <FooterLinkColumn
              title={FOOTER.company.title}
              links={FOOTER.company.links}
            />
          </div>

          <div className="lg:col-span-4">
            <FooterNewsletter />
          </div>
        </div>

        <section className="mt-14 rounded-sm border border-white/10 bg-cv-surface/40 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="font-display text-lg font-black uppercase tracking-tight text-white md:text-xl">
                {FOOTER.idea.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-cv-muted">
                {FOOTER.idea.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
              <a
                href={FOOTER.idea.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
              >
                {FOOTER.idea.primaryCta}
              </a>
              <a
                href={shareIdeaWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/25 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white/90 transition-colors hover:border-white/50 hover:text-white"
              >
                {FOOTER.idea.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <p className="mt-12 text-center font-sans text-sm italic tracking-wide text-white/50">
          {FOOTER.brand.emotionalLine}
        </p>

        <FooterPoweredBy />

        <p className="mt-8 text-center font-mono text-[10px] text-cv-muted/60">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}

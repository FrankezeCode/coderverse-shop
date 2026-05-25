import type { CompanySection } from "@/lib/company-pages";

export function CompanyPageSections({ sections }: { sections: CompanySection[] }) {
  return (
    <div className="mt-8 space-y-8">
      {sections.map((section, i) => (
        <section key={i}>
          {section.heading && (
            <h2 className="font-display text-lg font-black uppercase tracking-tight text-white md:text-xl">
              {section.heading}
            </h2>
          )}
          <div className={section.heading ? "mt-3 space-y-3" : "space-y-3"}>
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="font-sans text-sm leading-relaxed text-cv-muted md:text-base"
              >
                {p}
              </p>
            ))}
          </div>
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-3 list-inside list-disc space-y-2 font-sans text-sm leading-relaxed text-cv-muted md:text-base">
              {section.bullets.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

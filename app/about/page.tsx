import type { Metadata } from "next";
import { CompanyPageShell } from "@/components/company/CompanyPageShell";
import { CompanyPageSections } from "@/components/company/CompanyPageSections";
import { aboutPage } from "@/lib/company-pages";

export const metadata: Metadata = {
  title: `${aboutPage.title} — Coderverse`,
  description: aboutPage.description,
};

export default function AboutPage() {
  return (
    <CompanyPageShell title={aboutPage.title}>
      <CompanyPageSections sections={aboutPage.sections} />
    </CompanyPageShell>
  );
}

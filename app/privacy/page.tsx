import type { Metadata } from "next";
import Link from "next/link";
import { CompanyPageShell } from "@/components/company/CompanyPageShell";
import { CompanyPageSections } from "@/components/company/CompanyPageSections";
import { privacyPage } from "@/lib/company-pages";

export const metadata: Metadata = {
  title: `${privacyPage.title} — Coderverse`,
  description: privacyPage.description,
};

export default function PrivacyPage() {
  return (
    <CompanyPageShell title={privacyPage.title}>
      <CompanyPageSections sections={privacyPage.sections} />
      <p className="mt-8 font-sans text-sm text-cv-muted">
        <Link href="/contact" className="text-white underline-offset-2 hover:underline">
          Contact us
        </Link>{" "}
        about privacy requests.
      </p>
    </CompanyPageShell>
  );
}

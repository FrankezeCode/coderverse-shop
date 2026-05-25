import type { Metadata } from "next";
import { CompanyPageShell } from "@/components/company/CompanyPageShell";
import { CompanyPageSections } from "@/components/company/CompanyPageSections";
import { ContactActions } from "@/components/company/ContactActions";
import { contactPage } from "@/lib/company-pages";

export const metadata: Metadata = {
  title: `${contactPage.title} — Coderverse`,
  description: contactPage.description,
};

export default function ContactPage() {
  return (
    <CompanyPageShell title={contactPage.title}>
      <CompanyPageSections sections={contactPage.sections} />
      <ContactActions />
    </CompanyPageShell>
  );
}

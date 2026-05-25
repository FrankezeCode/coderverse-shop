import type { Metadata } from "next";
import { CompanyPageShell } from "@/components/company/CompanyPageShell";
import { CompanyPageSections } from "@/components/company/CompanyPageSections";
import { ShippingContactCta } from "@/components/company/ShippingContactCta";
import { shippingReturnsPage } from "@/lib/company-pages";

export const metadata: Metadata = {
  title: `${shippingReturnsPage.title} — Coderverse`,
  description: shippingReturnsPage.description,
};

export default function ShippingReturnsPage() {
  return (
    <CompanyPageShell title={shippingReturnsPage.title}>
      <CompanyPageSections sections={shippingReturnsPage.sections} />
      <ShippingContactCta />
    </CompanyPageShell>
  );
}

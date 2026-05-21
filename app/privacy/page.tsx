import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Coderverse",
};

export default function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto max-w-2xl px-4 py-20 md:px-8">
      <Link
        href="/"
        className="font-mono text-xs text-cv-muted transition-colors hover:text-white"
      >
        ← Back to shop
      </Link>
      <h1 className="mt-8 font-display text-3xl font-black uppercase text-white">
        Privacy Policy
      </h1>
      <p className="mt-6 font-sans text-sm leading-relaxed text-cv-muted">
        We respect your privacy. Information you share (such as email for our
        newsletter or messages via WhatsApp) is used only to communicate with you
        about products, orders, and updates. We do not sell your data to third
        parties.
      </p>
      <p className="mt-4 font-sans text-sm leading-relaxed text-cv-muted">
        For questions, contact us through the channels listed on our shop page.
      </p>
    </main>
  );
}

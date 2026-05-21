"use client";

import { useState } from "react";
import { FOOTER, newsletterWhatsAppUrl } from "@/lib/footer";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const formAction = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    if (formAction) {
      try {
        const res = await fetch(formAction, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        });
        if (res.ok) {
          setStatus("sent");
          setEmail("");
          return;
        }
      } catch {
        setStatus("error");
        return;
      }
      setStatus("error");
      return;
    }

    window.open(newsletterWhatsAppUrl(), "_blank", "noopener,noreferrer");
    setStatus("sent");
    setEmail("");
  }

  return (
    <div id="newsletter" className="flex flex-col gap-4">
      <h3 className="font-display text-sm font-black uppercase tracking-wide text-white">
        {FOOTER.newsletter.title}
      </h3>
      <p className="max-w-sm text-sm leading-relaxed text-cv-muted">
        {FOOTER.newsletter.description}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="footer-email">
          Email
        </label>
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={FOOTER.newsletter.placeholder}
          className="min-w-0 flex-1 border border-white/15 bg-cv-surface/80 px-4 py-3 font-sans text-sm text-white placeholder:text-cv-muted/70 outline-none transition-colors focus:border-white/35 focus:ring-1 focus:ring-white/20"
        />
        <button
          type="submit"
          className="shrink-0 border border-white bg-white px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-white"
        >
          {FOOTER.newsletter.button}
        </button>
      </form>
      {status === "sent" && (
        <p className="font-mono text-xs text-cv-green">
          Thank you — we&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-mono text-xs text-cv-red">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="font-mono text-[10px] uppercase tracking-widest text-cv-muted/80">
        {FOOTER.newsletter.subtext}
      </p>
    </div>
  );
}

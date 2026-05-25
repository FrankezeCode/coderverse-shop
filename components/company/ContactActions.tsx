import Link from "next/link";
import { FOOTER, shareIdeaWhatsAppUrl } from "@/lib/footer";
import { generalContactUrl } from "@/lib/whatsapp";

export function ContactActions() {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={generalContactUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider text-black transition-colors hover:bg-transparent hover:text-white"
      >
        Message on WhatsApp
      </a>
      <a
        href={shareIdeaWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
      >
        Share your vision
      </a>
      <Link
        href={FOOTER.idea.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white/90 transition-colors hover:border-white hover:text-white"
      >
        Coderverse Technology →
      </Link>
    </div>
  );
}

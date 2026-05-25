import { shippingContactUrl } from "@/lib/whatsapp";

export function ShippingContactCta() {
  return (
    <div className="mt-10">
      <a
        href={shippingContactUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-white px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
      >
        Questions about an order? WhatsApp us
      </a>
    </div>
  );
}

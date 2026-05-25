/** International format: country code + number, no + or leading 0 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000";

export function buyUrl(productName: string): string {
  const text = encodeURIComponent(`Hi, I want to buy the ${productName}.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function inquireSoftwareUrl(productName: string): string {
  const text = encodeURIComponent(
    `Hi, I'd like to learn more about ${productName} from Coderverse Software.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function generalContactUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? "Hi, I'd like to get in touch with Coderverse."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function shippingContactUrl(): string {
  const text = encodeURIComponent(
    "Hi, I have a question about shipping or returns for my order."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

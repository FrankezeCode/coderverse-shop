/** International format: country code + number, no + or leading 0 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000";

export function buyUrl(productName: string): string {
  const text = encodeURIComponent(`Hi, I want to buy the ${productName}.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

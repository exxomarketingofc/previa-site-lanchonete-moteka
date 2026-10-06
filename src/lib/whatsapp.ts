export const WHATSAPP_NUMBER = "5541987375492";
export const WHATSAPP_DISPLAY = "(41) 98737-5492";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

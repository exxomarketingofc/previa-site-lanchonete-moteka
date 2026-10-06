import { WhatsAppIcon } from "@/components/brand-icons";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp({ oculto }: { oculto: boolean }) {
  return (
    <a
      href={waLink("Olá, Moteka! Vim pelo site.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className={cn(
        "fixed right-4.5 bottom-4.5 z-10 grid size-[60px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_6px_18px_rgba(0,0,0,.25)]",
        oculto && "hidden",
      )}
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}

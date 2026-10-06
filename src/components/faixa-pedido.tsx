import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/brand-icons";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export function FaixaPedido() {
  return (
    <div className="my-9 flex flex-wrap items-center justify-center gap-5 rounded-[20px] bg-vermelho-noite px-6 py-5 text-center text-white md:justify-between md:px-8 md:text-left">
      <p className="text-base font-medium uppercase">Bateu a fome? Peça no delivery ou venha provar!</p>
      <Button asChild className="rounded-full bg-white px-5 text-vermelho-esc hover:bg-white/90">
        <a href={waLink("Olá, Moteka! Gostaria de fazer um pedido.")} target="_blank" rel="noopener">
          <WhatsAppIcon className="size-4" /> {WHATSAPP_DISPLAY}
        </a>
      </Button>
    </div>
  );
}

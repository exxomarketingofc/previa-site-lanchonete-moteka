import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/brand-icons";
import { formatBRL } from "@/lib/use-cart";
import { cn } from "@/lib/utils";

export function OrderBar({
  total,
  quantidade,
  linkPedido,
  onLimpar,
}: {
  total: number;
  quantidade: number;
  linkPedido: string;
  onLimpar: () => void;
}) {
  const aberto = quantidade > 0;

  return (
    <div
      role="region"
      aria-label="Seu pedido"
      aria-live="polite"
      className={cn(
        "fixed inset-x-3 bottom-4 z-30 mx-auto flex max-w-[560px] items-center gap-3 rounded-[22px] bg-vermelho-noite px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,.35)] transition-transform duration-300",
        aberto ? "translate-y-0" : "pointer-events-none translate-y-[140%]",
      )}
    >
      <div className="flex-1 text-sm leading-tight">
        <b className="block text-lg">{formatBRL(total)}</b>
        <span>
          {quantidade} {quantidade === 1 ? "item" : "itens"}
        </span>
      </div>
      <button
        type="button"
        onClick={onLimpar}
        className="min-h-11 shrink-0 px-1.5 text-sm text-white underline"
      >
        Limpar
      </button>
      <Button asChild className="shrink-0 rounded-full bg-whatsapp px-4 text-white hover:bg-whatsapp/90">
        <a href={linkPedido} target="_blank" rel="noopener">
          <WhatsAppIcon className="size-4" /> Enviar pedido
        </a>
      </Button>
    </div>
  );
}

import { WhatsAppIcon } from "@/components/brand-icons";
import { cn } from "@/lib/utils";

/**
 * CTA de contato via WhatsApp: fundo sólido, textura diagonal sutil e
 * sombra suave. Adaptado de um componente do catálogo 21st.dev (Minimal Button).
 */
export function WhatsAppCta({
  href,
  label,
  className,
  size = "md",
}: {
  href: string;
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-whatsapp font-semibold text-white shadow-[0_10px_30px_-10px_rgba(18,140,74,.6)] transition-colors hover:bg-whatsapp/90",
        size === "lg" && "h-14 px-8 text-lg",
        size === "md" && "h-11 px-6 text-base",
        size === "sm" && "h-9 px-4 text-sm",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(315deg,#fff_0,#fff_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] opacity-[0.06]"
      />
      <WhatsAppIcon className={cn("relative z-10", size === "lg" ? "size-5" : "size-4")} />
      <span className="relative z-10">{label}</span>
    </a>
  );
}

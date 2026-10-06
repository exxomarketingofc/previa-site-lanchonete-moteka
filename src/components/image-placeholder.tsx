import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reserva o espaço e a proporção exata de uma fotografia.
 * Sem `src`: mostra o placeholder tracejado. Com `src`: mostra a foto,
 * recortada via object-cover na mesma caixa — a seção não muda de layout.
 */
export function ImagePlaceholder({
  aspect = "4/5",
  label,
  className,
  src,
  alt = "",
  objectPosition,
}: {
  aspect?: string;
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
}) {
  if (src) {
    return (
      <div className={cn("overflow-hidden rounded-sm", className)} style={{ aspectRatio: aspect }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-vermelho-esc/30 bg-vermelho-esc/5 px-4 text-center text-vermelho-esc/60",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <Camera className="size-6" strokeWidth={1.5} />
      <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
    </div>
  );
}

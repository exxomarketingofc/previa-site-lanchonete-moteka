import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ConfirmContext = createContext({ visivel: true });

export function ConfirmProvider({
  visivel,
  children,
}: {
  visivel: boolean;
  children: ReactNode;
}) {
  return (
    <ConfirmContext.Provider value={{ visivel }}>{children}</ConfirmContext.Provider>
  );
}

/** Marca um trecho de conteúdo que ainda precisa ser confirmado com a Moteka. */
export function Confirmar({
  children,
  className,
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "p";
}) {
  const { visivel } = useContext(ConfirmContext);
  return (
    <Tag
      className={cn(
        visivel && "rounded bg-amber-200/70 outline-dashed outline-2 outline-offset-2 outline-amber-500",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function useMarcacoesToggle() {
  const [visivel, setVisivel] = useState(true);
  return { visivel, toggle: () => setVisivel((v) => !v) };
}

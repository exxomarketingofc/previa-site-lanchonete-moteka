import { useMemo, useState } from "react";
import { waLink } from "@/lib/whatsapp";

type CartItem = { qty: number; price: number };

export function useCart() {
  const [itens, setItens] = useState<Record<string, CartItem>>({});

  const add = (nome: string, preco: number) => {
    setItens((atual) => ({
      ...atual,
      [nome]: { qty: (atual[nome]?.qty ?? 0) + 1, price: preco },
    }));
  };

  const limpar = () => setItens({});

  const { total, quantidade, linhas } = useMemo(() => {
    let total = 0;
    let quantidade = 0;
    const linhas: string[] = [];
    for (const [nome, item] of Object.entries(itens)) {
      total += item.qty * item.price;
      quantidade += item.qty;
      linhas.push(`${item.qty}x ${nome} (${formatBRL(item.qty * item.price)})`);
    }
    return { total, quantidade, linhas };
  }, [itens]);

  const linkPedido = waLink(
    `Olá, Moteka! Quero fazer um pedido:\n${linhas.join("\n")}\nTotal estimado: ${formatBRL(total)}`,
  );

  return { add, limpar, total, quantidade, linkPedido };
}

export function formatBRL(v: number) {
  return `R$ ${v.toFixed(2).replace(".", ",")}`;
}

import { useEffect, useState } from "react";

/** Busca os preços cadastrados no painel /admin. Itens sem preço no banco mantêm o valor estático. */
export function usePrecos() {
  const [precos, setPrecos] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/precos.php")
      .then((r) => r.json())
      .then((rows: { item_id: string; preco: string }[]) => {
        setPrecos(Object.fromEntries(rows.map((r) => [r.item_id, Number(r.preco)])));
      })
      .catch(() => {});
  }, []);

  return precos;
}

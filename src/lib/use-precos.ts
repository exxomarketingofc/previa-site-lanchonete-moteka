import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/** Busca os preços cadastrados no painel /admin. Itens sem preço no banco mantêm o valor estático. */
export function usePrecos() {
  const [precos, setPrecos] = useState<Record<string, number>>({});

  useEffect(() => {
    supabase
      .from("moteka_precos")
      .select("item_id, preco")
      .then(({ data }) => {
        if (!data) return;
        setPrecos(Object.fromEntries(data.map((r) => [r.item_id, Number(r.preco)])));
      });
  }, []);

  return precos;
}

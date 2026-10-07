import { useEffect, useState } from "react";
import { cardapio } from "@/data/cardapio";
import { usePrecos } from "@/lib/use-precos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CHAVE_SESSAO = "moteka_admin_senha";

async function verificarSenha(senha: string): Promise<boolean> {
  const r = await fetch("/api/login.php", {
    method: "POST",
    body: JSON.stringify({ senha }),
  });
  const data = await r.json().catch(() => ({ ok: false }));
  return Boolean(data.ok);
}

export function AdminPage() {
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [verificando, setVerificando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const salva = sessionStorage.getItem(CHAVE_SESSAO);
    if (!salva) {
      setVerificando(false);
      return;
    }
    verificarSenha(salva).then((ok) => {
      if (ok) {
        setSenha(salva);
        setAutenticado(true);
      } else {
        sessionStorage.removeItem(CHAVE_SESSAO);
      }
      setVerificando(false);
    });
  }, []);

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    const ok = await verificarSenha(senha);
    if (ok) {
      sessionStorage.setItem(CHAVE_SESSAO, senha);
      setAutenticado(true);
    } else {
      setErro("Senha incorreta.");
    }
  }

  function sair() {
    sessionStorage.removeItem(CHAVE_SESSAO);
    setAutenticado(false);
    setSenha("");
  }

  if (verificando) return null;

  if (!autenticado) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-vermelho-noite px-4">
        <form onSubmit={entrar} className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="font-display text-2xl text-vermelho-esc uppercase">Painel Moteka</h1>
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoFocus
          />
          {erro && <p className="text-sm text-red-600">{erro}</p>}
          <Button type="submit" className="w-full bg-vermelho hover:bg-vermelho-esc">
            Entrar
          </Button>
        </form>
      </div>
    );
  }

  return <EditorDePrecos senha={senha} onSair={sair} />;
}

function EditorDePrecos({ senha, onSair }: { senha: string; onSair: () => void }) {
  const precosIniciais = usePrecos();
  const [precos, setPrecos] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Record<string, "salvando" | "salvo" | "erro">>({});

  useEffect(() => {
    setPrecos((atual) => {
      const novo = { ...atual };
      for (const [id, preco] of Object.entries(precosIniciais)) {
        if (!(id in novo)) novo[id] = String(preco);
      }
      return novo;
    });
  }, [precosIniciais]);

  async function salvar(itemId: string) {
    const valor = Number(precos[itemId]?.replace(",", "."));
    if (!valor || valor <= 0) return;
    setStatus((s) => ({ ...s, [itemId]: "salvando" }));
    const r = await fetch("/api/atualizar-preco.php", {
      method: "POST",
      body: JSON.stringify({ item_id: itemId, preco: valor, senha }),
    });
    const data = await r.json().catch(() => ({ ok: false }));
    setStatus((s) => ({ ...s, [itemId]: data.ok ? "salvo" : "erro" }));
  }

  return (
    <div className="min-h-screen bg-creme px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-3xl text-vermelho-esc uppercase">Preços do cardápio</h1>
          <Button variant="outline" onClick={onSair}>
            Sair
          </Button>
        </div>

        {cardapio.map((cat) => (
          <div key={cat.id} className="mb-8">
            <h2 className="mb-3 font-display text-xl text-vermelho-esc uppercase">{cat.label}</h2>
            <ul className="space-y-2.5">
              {cat.itens.map((item) => (
                <li key={item.id} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                  <span className="min-w-0 flex-1 truncate font-semibold">{item.nome}</span>
                  <span className="shrink-0 text-sm text-[#777]">R$</span>
                  <Input
                    value={precos[item.id] ?? ""}
                    onChange={(e) => setPrecos((p) => ({ ...p, [item.id]: e.target.value }))}
                    className="w-24 shrink-0"
                    inputMode="decimal"
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => salvar(item.id)}
                    className="shrink-0 bg-vermelho hover:bg-vermelho-esc"
                  >
                    {status[item.id] === "salvando"
                      ? "Salvando…"
                      : status[item.id] === "salvo"
                        ? "Salvo!"
                        : status[item.id] === "erro"
                          ? "Erro"
                          : "Salvar"}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

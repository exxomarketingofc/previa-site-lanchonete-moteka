import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Confirmar } from "@/components/confirm-context";
import { cardapio } from "@/data/cardapio";
import { formatBRL } from "@/lib/use-cart";
import { usePrecos } from "@/lib/use-precos";

export function CardapioSection({ onAdd }: { onAdd: (nome: string, preco: number) => void }) {
  const precos = usePrecos();

  return (
    <section id="cardapio" className="rounded-[28px] bg-creme px-5 py-14 shadow-[0_10px_30px_rgba(0,0,0,.12)] md:px-10 md:py-16">
      <div className="mb-9 text-center">
        <h2 className="font-display flex items-center justify-center gap-3 text-[clamp(46px,7vw,78px)] text-vermelho uppercase">
          <Heart className="size-[0.55em] fill-vermelho" /> Cardápio
        </h2>
        <p className="mt-2.5">Escolha o seu e chame a gente no WhatsApp.</p>
      </div>

      <Tabs defaultValue={cardapio[0].id}>
        <TabsList className="mb-7 h-auto flex-wrap justify-center gap-2.5 bg-transparent p-0">
          {cardapio.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="rounded-full border-2 border-vermelho-esc px-5 py-2 font-semibold text-vermelho-esc data-[state=active]:bg-vermelho-esc data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              <cat.icon className="size-4" /> {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {cardapio.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mx-auto max-w-[760px]">
            <p className="mb-3.5 text-center text-[#444]">{cat.nota}</p>
            <ul>
              {cat.itens.map((item) => {
                const preco = precos[item.id] ?? item.preco;
                return (
                  <li
                    key={item.id}
                    className="flex items-center gap-3.5 border-b border-dashed border-border py-3.5"
                  >
                    <div className="min-w-0 flex-1">
                      <strong className="block font-semibold">{item.nome}</strong>
                      {item.desc && <small className="block text-sm text-[#555]">{item.desc}</small>}
                    </div>
                    {preco ? (
                      <>
                        <span className="shrink-0 font-bold tabular-nums text-vermelho-esc">
                          {formatBRL(preco)}
                        </span>
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="size-11 shrink-0 rounded-full border-2 border-vermelho-esc text-vermelho-esc hover:bg-vermelho-esc hover:text-white"
                          aria-label={`Adicionar ${item.nome} ao pedido`}
                          onClick={() => onAdd(item.nome, preco)}
                        >
                          <Plus />
                        </Button>
                      </>
                    ) : (
                      <Confirmar className="shrink-0 font-bold text-vermelho-esc">Confirmar</Confirmar>
                    )}
                  </li>
                );
              })}
            </ul>
          </TabsContent>
        ))}
      </Tabs>

      <p className="mt-5.5 text-center text-sm text-[#555]">
        Toque no <b>+</b> para montar o pedido e enviar pronto pelo WhatsApp.{" "}
        <Confirmar>Preços de bebidas a confirmar.</Confirmar>
      </p>
    </section>
  );
}

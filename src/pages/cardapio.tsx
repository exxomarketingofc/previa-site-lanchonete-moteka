import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CardapioSection } from "@/components/cardapio-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { OrderBar } from "@/components/order-bar";
import { SiteFooter } from "@/components/site-footer";
import { useCart } from "@/lib/use-cart";

export function CardapioPage() {
  const { add, limpar, total, quantidade, linkPedido } = useCart();

  return (
    <>
      <div className="bg-gradient-to-b from-vermelho-esc to-vermelho px-4 py-10 text-center">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-creme hover:underline"
        >
          <ArrowLeft className="size-4" /> Voltar para a Moteka
        </Link>
        <h1 className="font-display text-5xl text-white uppercase md:text-6xl">Cardápio</h1>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-10">
        <section className="py-14 md:py-20">
          <div className="mb-10 text-center">
            <span className="mb-3 block text-sm font-semibold tracking-widest text-vermelho uppercase">
              Direto da casa
            </span>
            <h2 className="font-display text-4xl text-vermelho-esc uppercase md:text-5xl">
              Cardápio impresso
            </h2>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 sm:gap-6">
            <img
              src="/images/cardapio/sanduiches-combos.jpg"
              alt="Cardápio impresso da Moteka: sanduíches e combos"
              className="w-full -rotate-1 rounded-sm shadow-xl ring-1 ring-black/5 transition-transform hover:rotate-0 hover:scale-[1.02]"
            />
            <img
              src="/images/cardapio/porcoes-bebidas.jpg"
              alt="Cardápio impresso da Moteka: porções e bebidas"
              className="w-full rotate-1 rounded-sm shadow-xl ring-1 ring-black/5 transition-transform hover:rotate-0 hover:scale-[1.02] sm:mt-6"
            />
          </div>
        </section>

        <div>
          <CardapioSection onAdd={add} />
        </div>
      </main>

      <SiteFooter />

      <FloatingWhatsApp oculto={quantidade > 0} />
      <OrderBar total={total} quantidade={quantidade} linkPedido={linkPedido} onLimpar={limpar} />
    </>
  );
}

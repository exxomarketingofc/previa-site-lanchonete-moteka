import { AvisoPreview } from "@/components/aviso-preview";
import { CardapioSection } from "@/components/cardapio-section";
import { ConfirmProvider, useMarcacoesToggle } from "@/components/confirm-context";
import { FaixaPedido } from "@/components/faixa-pedido";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Hero } from "@/components/hero";
import { OrderBar } from "@/components/order-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SobreSection } from "@/components/sobre-section";
import { useCart } from "@/lib/use-cart";

export default function App() {
  const { visivel, toggle } = useMarcacoesToggle();
  const { add, limpar, total, quantidade, linkPedido } = useCart();

  return (
    <ConfirmProvider visivel={visivel}>
      <a
        href="#cardapio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:font-semibold focus:text-vermelho-esc"
      >
        Ir para o cardápio
      </a>

      <AvisoPreview visivel={visivel} onToggle={toggle} />

      <SiteHeader />

      <div className="bg-gradient-to-b from-vermelho-esc via-vermelho to-vermelho">
        <Hero />
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-10">
        <CardapioSection onAdd={add} />
        <FaixaPedido />
        <SobreSection />
      </main>

      <SiteFooter />

      <FloatingWhatsApp oculto={quantidade > 0} />
      <OrderBar total={total} quantidade={quantidade} linkPedido={linkPedido} onLimpar={limpar} />
    </ConfirmProvider>
  );
}

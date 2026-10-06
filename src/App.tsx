import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AvisoPreview } from "@/components/aviso-preview";
import { ConfirmProvider, useMarcacoesToggle } from "@/components/confirm-context";
import { SiteHeader } from "@/components/site-header";
import { CardapioPage } from "@/pages/cardapio";
import { Home } from "@/pages/home";

export default function App() {
  const { visivel, toggle } = useMarcacoesToggle();

  return (
    <BrowserRouter>
      <ConfirmProvider visivel={visivel}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:font-semibold focus:text-vermelho-esc"
        >
          Ir para o conteúdo
        </a>

        <AvisoPreview visivel={visivel} onToggle={toggle} />
        <SiteHeader />

        <main id="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<CardapioPage />} />
          </Routes>
        </main>
      </ConfirmProvider>
    </BrowserRouter>
  );
}

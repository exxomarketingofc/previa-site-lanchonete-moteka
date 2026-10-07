import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ConfirmProvider } from "@/components/confirm-context";
import { SiteHeader } from "@/components/site-header";
import { AdminPage } from "@/pages/admin";
import { CardapioPage } from "@/pages/cardapio";
import { Home } from "@/pages/home";

function Shell() {
  const { pathname } = useLocation();
  const isAdmin = pathname === "/admin";

  return (
    <ConfirmProvider visivel>
      {!isAdmin && (
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:font-semibold focus:text-vermelho-esc"
        >
          Ir para o conteúdo
        </a>
      )}

      {!isAdmin && <SiteHeader />}

      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<CardapioPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </ConfirmProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

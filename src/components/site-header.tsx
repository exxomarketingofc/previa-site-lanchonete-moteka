import { Link, useLocation } from "react-router-dom";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { waLink } from "@/lib/whatsapp";

const HOME_LINKS = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
];

function Logo() {
  return (
    <Link to="/" aria-label="Moteka, início" className="flex items-center gap-2.5">
      <img
        src="/images/logo-moteka-badge.png"
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-full bg-white object-cover"
      />
      <span className="font-display text-2xl text-white">Moteka</span>
    </Link>
  );
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const reservarLink = waLink("Olá, Moteka! Gostaria de reservar uma mesa.");

  return (
    <header className="sticky top-0 z-20 bg-vermelho-esc shadow-[0_3px_0_rgba(0,0,0,.15)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />

        <nav aria-label="Menu" className="hidden md:block">
          <ul className="flex gap-7">
            {isHome &&
              HOME_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center border-b-2 border-transparent py-1 font-semibold text-white hover:border-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            <li>
              <Link
                to="/cardapio"
                className="inline-flex items-center border-b-2 border-transparent py-1 font-semibold text-white hover:border-white"
              >
                Cardápio
              </Link>
            </li>
          </ul>
        </nav>

        <WhatsAppCta href={reservarLink} label="Falar no WhatsApp" size="sm" />
      </div>
    </header>
  );
}

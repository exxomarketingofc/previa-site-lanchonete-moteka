import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/brand-icons";
import { waLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function Logo() {
  return (
    <a href="#inicio" aria-label="Moteka, início" className="flex items-center gap-2.5">
      <img
        src="/images/logo-moteka-badge.png"
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-full bg-white object-cover"
      />
      <span className="font-display text-2xl text-white">Moteka</span>
    </a>
  );
}

export function SiteHeader() {
  const pedirLink = waLink("Olá, Moteka! Vim pelo site.");

  return (
    <header className="sticky top-0 z-20 bg-vermelho-esc shadow-[0_3px_0_rgba(0,0,0,.15)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <Logo />

        <nav aria-label="Menu" className="hidden md:block">
          <ul className="flex gap-7">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex items-center border-b-2 border-transparent py-1 font-semibold text-white hover:border-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild className="hidden rounded-full bg-whatsapp text-white hover:bg-whatsapp/90 md:inline-flex">
          <a href={pedirLink} target="_blank" rel="noopener">
            <WhatsAppIcon className="size-4" /> Pedir agora
          </a>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Abrir menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-creme">
            <SheetTitle className="font-display px-4 pt-4 text-2xl text-vermelho-esc">
              Moteka
            </SheetTitle>
            <nav aria-label="Menu" className="flex flex-col gap-1 p-4">
              {LINKS.map((l) => (
                <SheetClose asChild key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-lg px-3 py-2.5 text-lg font-semibold text-vermelho-esc hover:bg-vermelho-esc/10"
                  >
                    {l.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-3 rounded-full bg-whatsapp text-white hover:bg-whatsapp/90">
                  <a href={pedirLink} target="_blank" rel="noopener">
                    <WhatsAppIcon className="size-4" /> Pedir agora
                  </a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

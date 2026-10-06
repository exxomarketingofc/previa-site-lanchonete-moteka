import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/brand-icons";
import { waLink } from "@/lib/whatsapp";

export function Hero() {
  const pedirLink = waLink("Olá, Moteka! Gostaria de fazer um pedido.");

  return (
    <section id="inicio" className="px-4 pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="order-2 grid place-items-center md:order-1" aria-hidden="true">
          <svg
            viewBox="0 0 400 360"
            className="w-[min(70%,260px)] drop-shadow-[0_14px_0_rgba(122,14,6,.35)] md:w-[min(100%,430px)] animate-[flutua_5s_ease-in-out_infinite] motion-reduce:animate-none"
          >
            <ellipse cx="200" cy="330" rx="150" ry="16" fill="#7A0E06" opacity=".25" />
            <path
              d="M60 170C60 80 130 30 200 30s140 50 140 140z"
              fill="#E8A13A"
              stroke="#7A0E06"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <g fill="#FFF3D6">
              <ellipse cx="130" cy="95" rx="9" ry="5" transform="rotate(-20 130 95)" />
              <ellipse cx="200" cy="70" rx="9" ry="5" />
              <ellipse cx="268" cy="98" rx="9" ry="5" transform="rotate(20 268 98)" />
              <ellipse cx="165" cy="130" rx="9" ry="5" transform="rotate(-10 165 130)" />
              <ellipse cx="238" cy="132" rx="9" ry="5" transform="rotate(12 238 132)" />
            </g>
            <path
              d="M48 180q20 22 42 0t42 0 42 0 42 0 42 0 42 0 30 0v14H48z"
              fill="#4CAF50"
              stroke="#7A0E06"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M60 196h280l-20 38q-20 14-40 0t-40 0-40 0-40 0-40 0z"
              fill="#FFC928"
              stroke="#7A0E06"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <rect x="52" y="226" width="296" height="40" rx="20" fill="#6B3A1E" stroke="#7A0E06" strokeWidth="8" />
            <path
              d="M60 272h280v12c0 24-30 38-60 38H120c-30 0-60-14-60-38z"
              fill="#E8A13A"
              stroke="#7A0E06"
              strokeWidth="8"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="order-1 text-center md:order-2 md:text-right">
          <span className="mb-3.5 inline-block rounded-full bg-creme px-4 py-1 text-sm font-semibold text-vermelho-esc">
            Fazenda Rio Grande · PR
          </span>
          <h1 className="font-display leading-[0.95] uppercase">
            <span className="block text-[clamp(34px,5vw,58px)] text-creme">Bem-vindo à</span>
            <span className="block text-[clamp(64px,10vw,130px)] text-white drop-shadow-[0_5px_0_var(--vermelho-esc)]">
              Moteka!
            </span>
          </h1>
          <p className="mx-auto mt-4.5 mb-6.5 max-w-[30ch] text-lg text-white md:ml-auto md:mr-0 md:text-[19px]">
            Sanduíches, porções e combos com entrega em Fazenda Rio Grande.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <Button asChild size="lg" className="h-auto rounded-full bg-white px-6 py-3 text-vermelho-esc hover:bg-white/90">
              <a href="#cardapio">
                <UtensilsCrossed /> Ver cardápio
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full bg-whatsapp px-6 py-3 text-white hover:bg-whatsapp/90"
            >
              <a href={pedirLink} target="_blank" rel="noopener">
                <WhatsAppIcon className="size-4" /> Pedir no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

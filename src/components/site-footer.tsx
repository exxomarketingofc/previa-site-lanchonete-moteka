import { Confirmar } from "@/components/confirm-context";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-vermelho-esc py-12 text-sm text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[auto_1fr_1fr] md:items-start">
        <a href="#inicio" aria-label="Moteka, início" className="flex items-center gap-2.5">
          <img
            src="/images/logo-moteka-badge.png"
            alt=""
            width={46}
            height={46}
            className="size-11 rounded-full bg-white object-cover"
          />
          <span className="font-display text-3xl">Moteka</span>
        </a>

        <div>
          <h5 className="mb-2.5 text-base uppercase">Restaurante e Lanchonete Moteka</h5>
          <p className="mb-2">Tv. Pinhão, 304 – Estados, Fazenda Rio Grande – PR, 83830-410</p>
          <p className="mb-2">
            <a href={waLink("")} target="_blank" rel="noopener" className="underline">
              {WHATSAPP_DISPLAY}
            </a>
          </p>
          <Confirmar as="p" className="inline-block px-2 py-0.5 text-amber-900">
            CNPJ: 00.000.000/0001-00
          </Confirmar>
        </div>

        <div>
          <h5 className="mb-2.5 text-base uppercase">Siga a Moteka</h5>
          <div className="flex gap-3.5 text-lg">
            <a
              href="https://www.instagram.com/lanchonete_moteka/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=Lanchonete%20Moteka"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a href={waLink("")} target="_blank" rel="noopener" aria-label="WhatsApp">
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
          <p className="mt-2.5">@lanchonete_moteka</p>
        </div>

        <p className="col-span-full mt-4 text-center text-xs opacity-70">
          © 2026 Lanchonete Moteka · Site em prévia
        </p>
      </div>
    </footer>
  );
}

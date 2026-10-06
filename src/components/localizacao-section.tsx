import { Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { Confirmar } from "@/components/confirm-context";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

const INFO = [
  {
    icon: MapPin,
    titulo: "Endereço",
    conteudo: (
      <p>
        Tv. Pinhão, 304 – Estados
        <br />
        Fazenda Rio Grande – PR, 83830-410
      </p>
    ),
  },
  {
    icon: Clock,
    titulo: "Horários",
    conteudo: (
      <Confirmar as="p">
        Seg a sáb: 11h às 14h (almoço)
        <br />
        Ter a dom: 18h às 23h (lanches e porções)
      </Confirmar>
    ),
  },
  {
    icon: Phone,
    titulo: "Telefone e WhatsApp",
    conteudo: (
      <p>
        <a href={waLink("")} target="_blank" rel="noopener" className="underline">
          {WHATSAPP_DISPLAY}
        </a>
      </p>
    ),
  },
  {
    icon: UtensilsCrossed,
    titulo: "Atendimento",
    conteudo: (
      <p>
        No local, retirada e <strong>delivery</strong> pelo WhatsApp {WHATSAPP_DISPLAY}.
      </p>
    ),
  },
];

export function LocalizacaoSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mb-14 text-center">
        <span className="mb-3 block text-sm font-semibold tracking-widest text-vermelho uppercase">
          Onde fica
        </span>
        <h2 className="font-display text-4xl text-vermelho-esc uppercase md:text-5xl">
          Localização
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <ImagePlaceholder
          aspect="4/5"
          label="Foto: fachada da Moteka"
          src="/images/home/hero/fachada-moteka.jpg"
          alt="Fachada da Lanchonete Moteka"
          objectPosition="60% 50%"
        />

        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {INFO.map((info) => (
              <div key={info.titulo} className="flex gap-3.5">
                <info.icon
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-vermelho-esc p-2.5 text-white"
                />
                <div>
                  <h4 className="m-0 text-vermelho-esc">{info.titulo}</h4>
                  <div className="mt-0.5">{info.conteudo}</div>
                </div>
              </div>
            ))}
          </div>

          <iframe
            title="Mapa da Moteka"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Tv.+Pinh%C3%A3o,+304+-+Estados,+Fazenda+Rio+Grande+-+PR,+83830-410&output=embed"
            className="mt-8 h-72 w-full rounded-sm border-0"
          />
        </div>
      </div>
    </section>
  );
}

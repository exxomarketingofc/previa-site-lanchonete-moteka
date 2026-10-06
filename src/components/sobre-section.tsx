import { Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { Confirmar } from "@/components/confirm-context";
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

const SELOS = ["Comida caseira", "Ambiente familiar", "Preço justo", "Chopp gelado"];

const VALORES = [
  { titulo: "Sabor que vicia", desc: "Atendimento que conquista" },
  { titulo: "Preço justo", desc: "Combos para compartilhar" },
  { titulo: "Chopp gelado", desc: "Caneca bem tirada" },
];

export function SobreSection() {
  return (
    <section
      id="sobre"
      className="mt-10 rounded-[28px] bg-creme px-5 py-14 shadow-[0_10px_30px_rgba(0,0,0,.12)] md:px-10 md:py-16"
    >
      <div className="mb-9 text-center">
        <h2 className="font-display text-[clamp(46px,7vw,78px)] text-vermelho uppercase">Sobre a Moteka</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3.5">
            O <strong>Restaurante e Lanchonete Moteka</strong> fica no bairro Estados, em Fazenda Rio
            Grande, e é o lugar certo para o almoço do dia a dia e para o lanche com a família no fim
            do dia.
          </p>
          <p className="mb-3.5">
            Nossos clientes falam do <strong>ambiente familiar e tranquilo</strong>, dos{" "}
            <strong>preços acessíveis</strong>, da variedade de porções e lanches e do{" "}
            <strong>chopp gelado</strong>.
          </p>
          <Confirmar as="p" className="mb-3.5 block px-2 py-1">
            Comida caseira feita com carinho desde [ano de fundação]. Conte aqui a história da casa e
            de quem está por trás dela.
          </Confirmar>

          <div className="mt-6.5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5">
            {VALORES.map((v) => (
              <div key={v.titulo} className="rounded-[18px] border-2 border-border bg-white px-4.5 py-4">
                <b className="font-display block text-2xl text-vermelho-esc">{v.titulo}</b>
                <span className="text-sm text-[#444]">{v.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-4.5 hidden flex-wrap gap-2.5">
            {SELOS.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vermelho"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div id="contato" className="grid gap-4.5">
          {INFO.map((info) => (
            <div key={info.titulo} className="flex gap-3.5">
              <info.icon
                aria-hidden="true"
                className="mt-0 grid size-10 shrink-0 place-items-center rounded-full bg-vermelho-esc p-2.5 text-white"
              />
              <div>
                <h4 className="m-0 text-vermelho-esc">{info.titulo}</h4>
                <div className="mt-0.5">{info.conteudo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <iframe
        title="Mapa da Moteka"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Tv.+Pinh%C3%A3o,+304+-+Estados,+Fazenda+Rio+Grande+-+PR,+83830-410&output=embed"
        className="mt-9 h-80 w-full rounded-[20px] border-0"
      />
    </section>
  );
}

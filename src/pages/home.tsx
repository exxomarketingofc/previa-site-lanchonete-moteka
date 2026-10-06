import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { LocalizacaoSection } from "@/components/localizacao-section";
import { SiteFooter } from "@/components/site-footer";
import { waLink } from "@/lib/whatsapp";

const IMG = {
  fachada: "/images/home/hero/fachada-moteka.jpg",
  burger: "/images/home/destaque/burger.jpg",
  chopp: "/images/home/experiencia/chopp.jpg",
  ambiente: "/images/home/conceito/ambiente.jpg",
};

const EXPERIENCIA = [
  {
    titulo: "Sabor que vicia",
    texto: "Atendimento que conquista — a casa que virou ponto de encontro do bairro Estados.",
    aspecto: "4/3",
    src: IMG.burger,
  },
  {
    titulo: "Preço justo",
    texto: "Combos pensados para compartilhar com a família e os amigos, sem pesar no bolso.",
    aspecto: "3/4",
    src: IMG.ambiente,
  },
  {
    titulo: "Chopp gelado",
    texto: "Caneca sempre bem tirada para acompanhar o lanche ou a porção do fim de tarde.",
    aspecto: "4/3",
    src: IMG.chopp,
  },
];

const DEPOIMENTOS = [
  {
    nome: "Armando Ribeiro Da Silva",
    fonte: "Google · Local Guide",
    texto:
      "Um lugar familiar os preços bem acessível, um bom lugar para tomar uma gelada no final de semana e comer uma boa porção, e também todos os tipos de lanche cada um mais gostoso do que o outro, eu recomendo.",
  },
  {
    nome: "Priscila Costa Miranda",
    fonte: "Google",
    texto:
      "Super recomendo, tudo delicioso, ambiente familiar é pra quem gosta daquele chopp gelado acompanhado de uma porção é lugar certo.",
  },
  {
    nome: "Viviane Goncalves",
    fonte: "Google · Local Guide",
    texto: "Atendimento de qualidade, lanches e porções maravilhosos. Sou cliente fiel, super recomendo.",
  },
];

export function Home() {
  const reservarLink = waLink("Olá, Moteka! Gostaria de reservar uma mesa.");

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={IMG.fachada}
          alt="Fachada da Lanchonete Moteka"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vermelho-noite via-vermelho-noite/60 to-vermelho-noite/20" />

        <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 pb-16 text-center md:pb-24 md:text-left">
          <span className="mb-4 inline-block rounded-full bg-creme px-4 py-1 text-sm font-semibold text-vermelho-esc">
            Fazenda Rio Grande · PR
          </span>
          <h1 className="font-display text-[clamp(64px,13vw,160px)] leading-[0.9] text-white uppercase drop-shadow-[0_6px_0_var(--vermelho-esc)]">
            Moteka
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-white md:mx-0">
            Ambiente familiar, chopp gelado e a melhor conversa de Fazenda Rio Grande.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <WhatsAppCta href={reservarLink} label="Falar no WhatsApp" size="lg" />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-auto rounded-full border-white bg-transparent px-6 py-4 text-lg text-white transition-transform hover:scale-105 hover:bg-white hover:text-vermelho-esc"
            >
              <Link to="/cardapio">Ver cardápio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CONCEITO */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <ImagePlaceholder aspect="4/5" label="Foto: a casa da Moteka" src={IMG.ambiente} alt="Mesa de madeira em ambiente aconchegante" />
          <div>
            <span className="mb-3 block text-sm font-semibold tracking-widest text-vermelho uppercase">
              A Moteka
            </span>
            <h2 className="font-display mb-5 text-4xl text-vermelho-esc uppercase md:text-5xl">
              Comida de casa, mesa de bairro
            </h2>
            <p className="mb-4 text-lg text-foreground/80">
              No bairro Estados, em Fazenda Rio Grande, o Restaurante e Lanchonete Moteka é o
              lugar certo para o almoço do dia a dia e para o lanche com a família no fim do dia.
            </p>
            <p className="text-lg text-foreground/80">
              Ambiente familiar e tranquilo, preços acessíveis e aquele chopp sempre gelado.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-14 text-center">
            <span className="mb-3 block text-sm font-semibold tracking-widest text-vermelho uppercase">
              Experiência
            </span>
            <h2 className="font-display text-4xl text-vermelho-esc uppercase md:text-5xl">
              Como é estar na Moteka
            </h2>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {EXPERIENCIA.map((item, i) => (
              <div
                key={item.titulo}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                  <ImagePlaceholder aspect={item.aspecto} label="Foto: ambiente ou prato" src={item.src} alt={item.titulo} />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : undefined}>
                  <h3 className="font-display mb-3 text-3xl text-vermelho-esc">{item.titulo}</h3>
                  <p className="text-lg text-foreground/80">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE GASTRONÔMICO */}
      <section className="relative overflow-hidden">
        <ImagePlaceholder
          aspect="16/9"
          label="Foto: prato de destaque da Moteka"
          className="w-full rounded-none border-x-0"
          src={IMG.burger}
          alt="Hambúrguer artesanal"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-vermelho-noite/55 px-4 text-center">
          <h2 className="font-display text-4xl text-white uppercase md:text-5xl">
            Sanduíches, porções e combos
          </h2>
          <p className="max-w-md text-white/90">
            Do X-Tudo às porções pra dividir — conheça o cardápio completo da Moteka.
          </p>
          <Button asChild size="lg" className="h-auto rounded-full bg-white px-7 py-3 text-vermelho-esc hover:bg-white/90">
            <Link to="/cardapio">Conheça nosso cardápio</Link>
          </Button>
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mb-14 text-center">
          <span className="mb-3 block text-sm font-semibold tracking-widest text-vermelho uppercase">
            Ambiente
          </span>
          <h2 className="font-display text-4xl text-vermelho-esc uppercase md:text-5xl">Galeria</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          <ImagePlaceholder
            aspect="3/4"
            label="Ambiente"
            className="col-span-1 md:col-span-2 md:row-span-2 md:aspect-auto md:h-full"
            src={IMG.fachada}
            alt="Entrada da Moteka"
            objectPosition="70% 50%"
          />
          <ImagePlaceholder aspect="4/3" label="Prato" className="col-span-1 md:col-span-4" src={IMG.burger} alt="Hambúrguer artesanal" />
          <ImagePlaceholder aspect="1/1" label="Detalhe" className="col-span-1 md:col-span-2" src={IMG.chopp} alt="Chopp gelado" />
          <ImagePlaceholder aspect="1/1" label="Detalhe" className="col-span-1 md:col-span-2" src={IMG.ambiente} alt="Mesa do salão" />
          <ImagePlaceholder
            aspect="16/9"
            label="Movimento da casa"
            className="col-span-2 md:col-span-4"
            src={IMG.fachada}
            alt="Varanda da Moteka"
            objectPosition="20% 70%"
          />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-14 text-center">
            <span className="mb-3 block text-sm font-semibold tracking-widest text-vermelho uppercase">
              Quem já provou
            </span>
            <h2 className="font-display text-4xl text-vermelho-esc uppercase md:text-5xl">
              Depoimentos
            </h2>
            <p className="mt-4 text-foreground/60">Avaliações reais de clientes no Google.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d) => (
              <div key={d.nome} className="rounded-sm border border-border bg-muted/40 p-6">
                <div className="mb-3 flex gap-0.5 text-vermelho">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-sm text-foreground/80">“{d.texto}”</p>
                <div className="flex items-center gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-vermelho-esc font-display text-white">
                    {d.nome.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-vermelho-esc">{d.nome}</div>
                    <div className="text-xs text-foreground/50">{d.fonte}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section className="relative overflow-hidden">
        <ImagePlaceholder
          aspect="21/9"
          label="Foto: mesa posta ou salão da Moteka"
          className="w-full rounded-none border-x-0"
          src={IMG.fachada}
          alt="Varanda da Moteka"
          objectPosition="30% 70%"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-vermelho-noite/60 px-4 text-center">
          <h2 className="font-display text-4xl text-white uppercase md:text-5xl">
            Reserve sua mesa
          </h2>
          <p className="max-w-md text-white/90">
            Chame a gente no WhatsApp e garanta seu lugar na Moteka.
          </p>
          <WhatsAppCta href={reservarLink} label="Falar no WhatsApp" />
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <div id="localizacao" className="mx-auto max-w-6xl px-4">
        <LocalizacaoSection />
      </div>

      <SiteFooter />
    </>
  );
}

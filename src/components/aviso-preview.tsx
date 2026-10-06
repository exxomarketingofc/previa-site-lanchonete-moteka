export function AvisoPreview({ visivel, onToggle }: { visivel: boolean; onToggle: () => void }) {
  return (
    <p className="m-0 bg-amber-200 px-4 py-2 text-center text-[13px] text-amber-900">
      Prévia do site · trechos com{" "}
      <span className="rounded bg-amber-300 px-1 outline-dashed outline-2 outline-offset-2 outline-amber-600">
        fundo amarelo
      </span>{" "}
      são exemplos e precisam ser confirmados com a Moteka.{" "}
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={!visivel}
        className="ml-2.5 min-h-7 rounded-full border border-amber-900 bg-white px-3 py-0.5 text-xs"
      >
        {visivel ? "Ocultar marcações" : "Mostrar marcações"}
      </button>
    </p>
  );
}

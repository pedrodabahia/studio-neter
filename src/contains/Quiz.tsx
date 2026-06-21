import { useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";
import { waLink } from "./hooks/whatsapp";

const questions = [
  {
    id: "wedding",
    label: "Vou me casar em breve",
    sub: "Quero o melhor para o meu grande dia",
    result: {
      title: "Pacote Noiva Completo",
      desc: "Você merece o melhor! Nosso pacote Dia da Noiva inclui maquiagem, penteado, cuidados com a pele e suporte de assessoria completa para você chegar radiante.",
      msg: "Olá, Juliana! Vou me casar em breve e gostaria de saber sobre o pacote completo para noivas (Dia da Noiva + Cerimonial).",
    },
  },
  {
    id: "self-esteem",
    label: "Quero elevar minha autoestima",
    sub: "Cuidar de mim é minha prioridade",
    result: {
      title: "Transformação Beauty",
      desc: "O cuidado começa aqui! Design de sobrancelha, extensão de cílios e maquiagem profissional para você se sentir ainda mais linda no dia a dia.",
      msg: "Olá, Juliana! Quero elevar minha autoestima e cuidar mais de mim. Gostaria de saber sobre seus serviços de beleza.",
    },
  },
  {
    id: "event",
    label: "Tenho um evento especial",
    sub: "Formatura, aniversário, festa...",
    result: {
      title: "Look de Evento Perfeito",
      desc: "Para arrasar em qualquer evento! Maquiagem e penteado profissionais para você se destacar e se sentir confiante em cada momento.",
      msg: "Olá, Juliana! Tenho um evento especial e gostaria de agendar maquiagem e penteado.",
    },
  },
  {
    id: "transform",
    label: "Quero me transformar",
    sub: "Novos cílios, sobrancelha repaginada...",
    result: {
      title: "Novo Visual",
      desc: "Uma nova você começa agora! Extensão de cílios fio a fio e design de sobrancelha vão transformar seu olhar e renovar sua confiança.",
      msg: "Olá, Juliana! Quero me transformar! Gostaria de saber mais sobre extensão de cílios e design de sobrancelha.",
    },
  },
];

export function Quiz() {
  const [selected, setSelected] = useState<(typeof questions)[0] | null>(null);
  const [step, setStep] = useState<"question" | "result">("question");
  const [ref, inView] = useInView<HTMLDivElement>();

  const handleSelect = (option: (typeof questions)[0]) => {
    setSelected(option);
    setTimeout(() => setStep("result"), 300);
  };

  const reset = () => {
    setStep("question");
    setSelected(null);
  };

  return (
    <section id="quiz" className="section-padding relative w-[100vw] justify-center p-5 pt-20 pb-20 bg-[rgb(235,230,224)] z-3">
      <div className="container mx-auto px-6 max-w-3xl">
        <div
          ref={ref}
          className={cn("text-center mb-10 reveal", inView && "visible")}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[rgb(194,145,61)] mb-3">
            Descubra
          </p>
          <h2 className="font-makcasa text-4xl md:text-5xl text-black mb-3">
            Qual serviço combina com você?
          </h2>
          <p className="font-body text-black/70">
            Responda uma pergunta rápida e descubra o serviço ideal
          </p>
        </div>

        <div className={cn("reveal", inView && "visible delay-200")}>
          {step === "question" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => handleSelect(q)}
                  className={cn(
                    "group text-left p-6 rounded-2xl border-1 border border-gray-300 bg-white",
                    "hover:border-[rgb(194,145,61)] shadow-lg hover:shadow-[rgb(194,145,61)] hover:-translate-y-1 transition-all duration-300",
                    "reveal",
                    inView && "visible",
                    `delay-${(i + 1) * 100}`
                  )}
                >
                  <div className="w-8 h-8 rounded-full bg-[rgb(235,230,224)] flex items-center justify-center mb-3 group-hover:bg-[rgb(194,145,61)] transition-colors duration-300">
                    <span className="font-body text-sm font-bold text-black group-hover:text-noir transition-colors duration-300">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-black mb-1 group-hover:text-[rgb(194,145,61)] transition-colors duration-300">
                    {q.label}
                  </h3>
                  <p className="font-body text-xs text-black/70">{q.sub}</p>
                </button>
              ))}
            </div>
          ) : (
            selected && (
              <div className="bg-white border border-[rgb(194,145,61)] rounded-2xl p-8 md:p-10 text-center shadow-[0_0_30px_rgb(194,145,61)] animate-fade-in-scale">
                <div className="w-16 h-16 rounded-full bg-[rgb(194,145,61)] flex items-center justify-center mx-auto mb-5">
                  <ArrowRight className="w-7 h-7 text-noir" strokeWidth={2.5} />
                </div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-[rgb(194,145,61)] mb-2">
                  Recomendação Perfeita Para Você
                </p>
                <h3 className="font-makcasa text-2xl md:text-5xl text-black mb-4">
                  {selected.result.title}
                </h3>
                <p className="font-body text-sm text-black/70 leading-relaxed max-w-md mx-auto mb-8">
                  {selected.result.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={waLink(selected.result.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full bg-[rgb(194,145,61)] text-noir font-body font-semibold text-sm shadow-[rgb(194,145,61)] hover:shadow-[rgb(194,145,61)]-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Falar no WhatsApp
                  </a>
                  <button
                    onClick={reset}
                    className="px-8 py-3.5 rounded-full border border-border text-black/70 font-body text-sm hover:border-[rgb(194,145,61)] hover:text-[rgb(194,145,61)] transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Recomeçar
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

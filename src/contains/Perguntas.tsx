import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

const faqs = [
  {
    q: "Com quanto tempo de antecedência devo agendar?",
    a: "Para serviços de beleza, recomendamos pelo menos 15 a 30 dias. Para o Dia da Noiva e cerimonial completo de casamento, o ideal é entrar em contato com 6 a 12 meses de antecedência, especialmente em datas de alta temporada.",
  },
  {
    q: "Vocês atendem em domicílio?",
    a: "Sim! Oferecemos atendimento externo para noivas, eventos especiais e grupos. A taxa de deslocamento varia conforme a distância. Consulte-nos pelo WhatsApp para verificar disponibilidade na sua região.",
  },
  {
    q: "Posso agendar uma prova de maquiagem antes do casamento?",
    a: "Sim, e recomendamos muito! A prova de maquiagem é parte essencial do processo para noivas. Ela garante que você chega no dia do casamento exatamente com a make que deseja, sem surpresas.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos PIX, dinheiro, cartão de débito e crédito (parcelamento disponível). Para serviços de cerimonial, trabalhamos com pacotes personalizados com condições especiais.",
  },
  {
    q: "O cerimonial inclui decoração?",
    a: "Trabalhamos com parceiros especializados e de confiança para decoração, buffet, fotografia e outros serviços. Podemos incluir esses serviços no pacote ou indicar fornecedores conforme sua necessidade e orçamento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="section-padding bg-[rgb(235,230,224)] relative w-[100vw] pt-20 pb-20" id="faq">
      <div className="container mx-auto px-6 max-w-2xl">
        <div
          ref={ref}
          className={cn("text-center mb-12 reveal", inView && "visible")}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[rgb(194,145,61)] mb-3">
            Dúvidas
          </p>
          <h2 className="font-makcasa text-4xl md:text-5xl text-black mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className={cn("flex flex-col gap-3 reveal delay-200", inView && "visible")}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-gray-300 rounded-xl overflow-hidden shadow-[0_0_10px_rgba(000,000,000,0.2)]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 bg-white text-left group"
              >
                <span className="font-body text-sm font-semibold text-black group-hover:text-[rgb(194,145,61)] transition-colors duration-300">
                  {faq.q}
                </span>
                <div className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                  open === i ? "bg-[rgb(194,145,61)]" : "bg-[rgb(235,230,224)]"
                )}>
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-black/70" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-400",
                  open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-5 pb-5 bg-white">
                  <div className="h-px bg-border mb-4" />
                  <p className="font-body text-sm text-black/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

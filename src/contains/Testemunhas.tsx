import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

const testimonials = [
  {
    name: "Maria Clara",
    role: "Noiva",
    text: "Juliana transformou completamente meu visual para o casamento. Cada detalhe foi pensado com tanto carinho e profissionalismo. Me senti a noiva mais linda do mundo!",
    stars: 5,
    initials: "MC",
  },
  {
    name: "Fernanda Souza",
    role: "Cliente",
    text: "Fiz extensão de cílios e nunca mais consegui ficar sem. A qualidade é incrível, a durabilidade é muito boa e o atendimento é super atencioso. Super recomendo!",
    stars: 5,
    initials: "FS",
  },
  {
    name: "Beatriz Lima",
    role: "Noiva",
    text: "O Dia da Noiva foi um sonho realizado. Equipe impecável, super pontual e atenciosa. Chegaram com tudo preparado e fizeram eu me sentir uma rainha.",
    stars: 5,
    initials: "BL",
  },
  {
    name: "Larissa Mendes",
    role: "Cliente",
    text: "Design de sobrancelha perfeito! Mudou completamente minha expressão e me deu muito mais confiança. A Juliana tem um olho clínico incrível para o que combina com cada rosto.",
    stars: 5,
    initials: "LM",
  },
  {
    name: "Camila Rodrigues",
    role: "Noiva",
    text: "Contratamos o cerimonial completo e ficou tudo impecável. Organizou cada detalhe com perfeição, tivemos zero estresse no dia do casamento. Foi além das expectativas!",
    stars: 5,
    initials: "CR",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-[rgb(247,244,237)] pt-20 pb-20 relative w-[99.9vw]">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div
          ref={ref}
          className={cn("text-center mb-12 reveal", inView && "visible")}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[rgb(194,145,61)] mb-3">
            Avaliações
          </p>
          <h2 className="font-makcasa text-4xl md:text-5xl text-black mb-4">
            O que dizem nossas clientes
          </h2>
          <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[rgb(194,145,61)] text-[rgb(194,145,61)]" />
            ))}
            <span className="font-body text-sm text-black/70 ml-2">5.0 — 200+ avaliações</span>
          </div>
        </div>

        {/* Testimonial card */}
        <div className={cn("reveal delay-200", inView && "visible")}>
          <div
            key={current}
            className="bg-card border border-gray-300 rounded-2xl p-8 md:p-10 text-center shadow-[0_0_30px_rgba(194,145,61,0.5)] animate-fade-in-scale"
          >
            {/* Stars */}
            <div className="flex justify-center gap-0.5 mb-6">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[rgb(194,145,61)] text-[rgb(194,145,61)]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-makcasa text-lg md:text-xl italic text-black/80 leading-relaxed mb-8">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-[rgb(194,145,61)] flex items-center justify-center">
                <span className="font-display text-sm font-bold text-[rgb(194,145,61)]">{t.initials}</span>
              </div>
              <div className="text-left">
                <p className="font-body text-sm font-semibold text-black">{t.name}</p>
                <p className="font-body text-xs text-[rgb(194,145,61)]">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border text-black/70 hover:border-[rgb(194,145,61)] hover:text-[rgb(194,145,61)] transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-400",
                    i === current ? "w-6 bg-[rgb(194,145,61)]" : "w-1.5 bg-border"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-border text-black/70 hover:border-[rgb(194,145,61)] hover:text-[rgb(194,145,61)] transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

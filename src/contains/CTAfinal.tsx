import { MessageCircle } from "lucide-react";
import { WA } from "./hooks/whatsapp";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

export function CTAFinal() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="contato" className="relative w-[100vw] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="./images/ctaFinal.png"
          alt="Casamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-noir/75" />
      </div>

      {/* Content */}
      <div className="relative py-28 md:py-36">
        <div
          ref={ref}
          className={cn("container mx-auto px-6 max-w-2xl text-center reveal", inView && "visible")}
        >
          {/* Top ornament */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px w-12 bg-[rgb(194,145,61)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[rgb(194,145,61)]" />
            <div className="h-px w-12 bg-[rgb(194,145,61)]" />
          </div>

          <p className={cn("font-makcasa italic text-[rgb(194,145,61)] text-2xl md:text-3xl mb-4 reveal delay-100", inView && "visible")}>
            Cada detalhe importa.
          </p>
          <h2 className={cn("font-display text-4xl md:text-6xl text-ivory mb-5 leading-tight reveal delay-200", inView && "visible")}>
            Seu momento merece{" "}
            <span className="font-makcasa italic text-[rgb(194,145,61)]">cuidado especial.</span>
          </h2>
          <p className={cn("font-body text-sm text-ivory/65 leading-relaxed mb-10 max-w-md mx-auto reveal delay-300", inView && "visible")}>
            Vamos conversar sobre o seu próximo momento? Fale comigo pelo WhatsApp 
            e vamos criar algo inesquecível juntas.
          </p>

          <div className={cn("flex flex-col sm:flex-row gap-4 justify-center reveal delay-400", inView && "visible")}>
            <a
              href={WA.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#25D366] text-[#ffffff] font-body font-semibold text-sm shadow-[0_8px_32px_hsl(142_72%_29%/0.5)] hover:shadow-[0_12px_40px_hsl(142_72%_29%/0.65)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href={WA.scheduling()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-ivory/40 text-white font-body font-medium text-sm hover:border-gold hover:text-gold-light backdrop-blur-sm transition-all duration-300"
            >
              Agendar Atendimento
            </a>
          </div>

          {/* Bottom ornament */}
          <div className="flex items-center gap-4 justify-center mt-12">
            <div className="h-px w-12 bg-[rgb(194,145,61)]" />
            <span className="font-makcasa italic text-[rgb(194,145,61)] text-sm">Juliana Neter</span>
            <div className="h-px w-12 bg-[rgb(194,145,61)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

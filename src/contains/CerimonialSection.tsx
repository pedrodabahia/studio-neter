import { Check, ArrowRight } from "lucide-react";
import { WA } from "./hooks/whatsapp";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";


const features = [
  "Organização completa do evento",
  "Assessoria no dia do casamento",
  "Planejamento detalhado e personalizado",
  "Cronograma de cerimônia e recepção",
  "Suporte total aos noivos e famílias",
  "Parceiros de confiança indicados",
  "Acompanhamento pré e pós evento",
  "Prova de maquiagem inclusa",
];

export default function CerimonialSection() {



  const [leftRef, leftInView] = useInView<HTMLDivElement>();
  const [rightRef, rightInView] = useInView<HTMLDivElement>();

  return (<section id="cerimonial" className="relative section-padding overflow-hidden w-[100vw] relative overflow-hidden z-2 md:p-25 p-5 pt-10 bg-black">
 <ParticlesProvider       init={async (engine) => {
        await loadSlim(engine);
      }}>
    
        <Particles
    id="teste"
    className="absolute inset-0 w-full h-full"
    options={{
          fullScreen: {
      enable: false,
    },
      particles: {
        number: {
          value: 20,
        },
        shape:{
    type: "image",
    options: {
      image: [
        {
          src: "images/petala.png",
          width: 64,
          height: 64,
        },
      ],
    }},
        move: {
          enable: true,
          speed: 2,
        },
      },
    }}
  />
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://img.magnific.com/vetores-gratis/acuarela-de-fundo-rosa-quente_23-2150815041.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Cerimônia de casamento"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-ceremonial)" }} />
      </div>

      {/* Decorative gold corner */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-10">
        <div className="w-full h-full border-l-2 border-t-2 border-gold rounded-tl-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <div className="w-full h-full border-r-2 border-b-2 border-gold rounded-br-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — checklist */}
          <div
            ref={leftRef}
            className={cn("reveal-left", leftInView && "visible")}
          >
            <p className="font-body text-[11px] tracking-[0.45em] uppercase text-[rgb(194,145,61)] mb-4 text-left">
              Planejamento &amp; Assessoria
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight text-left">
              Cerimonial<br />
              <span className="font-makcasa italic text-[rgb(194,145,61)]">Completo</span>
            </h2>

            <div className="grid grid-cols-1 gap-3 mt-8">
              {features.map((f, i) => (
                <div
                  key={f}
                  className={cn("flex items-center gap-3 reveal", leftInView && "visible")}
                  style={{ transitionDelay: `${i * 60 + 200}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-[rgb(194,145,61)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                  <span className="font-body text-sm text-white">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — description + CTA */}
          <div
            ref={rightRef}
            className={cn("reveal-right", rightInView && "visible")}
          >
            <div className="bg-ivory/8 backdrop-blur-sm border border-[rgb(194,145,61)] rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-[rgb(194,145,61)]" />
                <span className="font-elegant italic text-[rgb(194,145,61)] text-lg">Para Noivas</span>
                <div className="h-px flex-1 bg-[rgb(194,145,61)]" />
              </div>

              <h3 className="font-makcasa text-white text-left text-2xl text-ivory mb-4">
                Seu dia perfeito, do início ao fim
              </h3>
              <p className="font-body text-sm text-white text-left leading-relaxed mb-4">
                Cuide de cada detalhe do seu grande dia com a assessoria especializada da Juliana. 
                Do planejamento à execução, garantimos que tudo saia exatamente como você sonhou.
              </p>
              <p className="font-body text-sm text-left text-white leading-relaxed mb-8">
                Com anos de experiência em casamentos inesquecíveis, nossa equipe transforma 
                sonhos em realidade com elegância, organização e muito amor.
              </p>

              <a
                href={WA.ceremonial()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center py-4 rounded-full bg-[rgb(194,145,61)] text-black font-body font-semibold text-sm shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Quero realizar meu evento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
          </ParticlesProvider>
    </section>

  );
}

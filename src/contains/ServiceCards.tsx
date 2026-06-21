import { Gem, Sparkles, Crown, Eye, Heart } from "lucide-react";
import { WA } from "./hooks/whatsapp";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

const services = [
  {
    icon: Gem,
    title: "Casamento",
    description: "Realize o casamento dos seus sonhos com assessoria completa",
    waMsg: WA.wedding,
    color: "from-[rgba(194,145,61,0.05)] to-[rgba(194,145,61,0.15)]",
    iconColor: "text-[rgb(194,145,61)]",
  },
  {
    icon: Sparkles,
    title: "Beleza",
    description: "Realce sua beleza natural com tratamentos profissionais",
    waMsg: WA.beauty,
    color: "from-[rgba(255,197,203,0.05)] to-[rgba(255,197,203,0.15)]",
    iconColor: "text-[rgba(255,197,203)]",
  },
  {
    icon: Crown,
    title: "Dia da Noiva",
    description: "Um dia exclusivo dedicado a você antes do grande momento",
    waMsg: WA.brideDay,
    color: "from-[rgba(194,145,61,0.05)] to-[rgba(194,145,61,0.15)]",
    iconColor: "text-[rgb(194,145,61)]",
  },
  {
    icon: Eye,
    title: "Cílios e Sobrancelha",
    description: "Extensão de cílios e design de sobrancelha impecáveis",
    waMsg: WA.lashes,
    color: "from-[rgba(255,197,203,0.05)] to-[rgba(255,197,203,0.15)]",
    iconColor: "text-[#ffc5cb]",
  },
  {
    icon: Heart,
    title: "Cerimonial Completo",
    description: "Planejamento e organização completa do seu evento especial",
    waMsg: WA.ceremonial,
    color: "from-[rgba(194,145,61,0.05)] to-[rgba(194,145,61,0.15)]",
    iconColor: "text-[rgb(194,145,61)]",
  },
];

export function ServiceCards() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="section-padding relative w-[100vw] justify-center p-5 pt-20 bg-[rgb(247,244,237)] z-3" id="beleza">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={cn("text-center mb-14 reveal", inView && "visible")}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[rgb(194,145,61)] mb-3">
            Atendimento Personalizado
          </p>
          <h2 className="font-makcasa text-6xl md:text-6xl text-black mb-4">
            Como podemos te ajudar hoje?
          </h2>
          <p className="font-body text-gray-600 max-w-md mx-auto">
            Escolha o serviço que melhor combina com você e fale diretamente conosco
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} delay={i * 80} inView={inView} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  delay,
  inView,
}: {
  service: (typeof services)[0];
  Icon: React.ElementType;
  delay: number;
  inView: boolean;
}) {
  return (
    <a
      href={service.waMsg()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col items-center text-center p-7 rounded-2xl  border border-[0.02vw] border-[rgba(000,000,000,0.05)]",
        `bg-gradient-to-b ${service.color}`,
        "hover:border-gold/50 hover:shadow-gold hover:-translate-y-1.5 transition-all duration-350 cursor-pointer",
        "reveal",
        inView && "visible"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
        "bg-white shadow-card group-hover:shadow-gold group-hover:scale-110",
      )}>
        <Icon className={cn("w-6 h-6", service.iconColor)} strokeWidth={1} />
      </div>
      <h3 className="font-display text-makcasa  text-black mb-2 group-hover:text-[rgb(194,145,61)] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="font-body text-xs text-black/60 leading-relaxed mb-4">
        {service.description}
      </p>
      <span className="font-body text-xs font-semibold text-[rgb(194,145,61)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
        Falar no WhatsApp →
      </span>
    </a>
  );
}

import { ArrowRight } from "lucide-react";
import { WA } from "./hooks/whatsapp";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

const services = [
  {
    title: "Design de Sobrancelha",
    description: "Modelagem perfeita que valoriza seu rosto e realça seu olhar com técnicas exclusivas.",
    image: "./images/designSombrancelha.jpg",
    wa: WA.eyebrow,
  },
  {
    title: "Extensão de Cílios",
    description: "Fio a fio, volume brasileiro ou híbrido. Cílios impecáveis com durabilidade e leveza.",
    image: "./images/fotoCilios.jpg",
    wa: WA.lashes,
  },
  {
    title: "Depilação",
    description: "Técnicas delicadas e eficazes para uma pele lisa e suave por mais tempo.",
    image: "./images/depilacao.jpg",
    wa: WA.waxing,
  },
  {
    title: "Dia da Noiva",
    description: "Um dia completo de miminho e preparo para você chegar radiante ao seu grande momento.",
    image: "./images/diaDaNoiva.jpg",
    wa: WA.brideDay,
  },
];

export function BeautyServices() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  return (
    <section className="section-padding bg-[rgb(235,230,224)] w-[100vw] relative z-2 pt-40 pb-20" id="servicos">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn("text-center mb-14 reveal", headerInView && "visible")}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[rgb(194,145,61)] mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-makcasa text-6xl md:text-6xl text-black mb-4">
            Beleza &amp; Cuidados
          </h2>
          <p className="font-body text-gray-600 max-w-sm mx-auto">
            Cada detalhe pensado para você se sentir única e radiante
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 w-[70vw] m-auto sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        " group bg-card rounded-2xl overflow-hidden shadow-lg shadow--[rgba(000,000,000,0.5)] hover:shadow-hover hover:-translate-y-1 transition-all duration-400 reveal",
        inView && "visible",
        `delay-${Math.min((index % 3) * 100 + 100, 400)}`
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-full relative top-[-50%] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-makcasa text-xl font-semibold text-black mb-2 group-hover:text-[rgb(194,145,61)] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="font-body text-sm text-black/70 leading-relaxed mb-5">
          {service.description}
        </p>
        <a
          href={service.wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[rgb(194,145,61)] hover:text-text-[rgb(194,145,61)] transition-colors duration-300 group/btn"
        >
          Agendar agora
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

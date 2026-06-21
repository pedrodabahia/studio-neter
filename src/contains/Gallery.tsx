import { useState } from "react";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

const filters = ["Todos", "Casamentos", "Maquiagem", "Cílios", "Noivas", "Bastidores"];

const photos = [
  { src: "./images/fotoGalery1.png", category: "Casamentos", alt: "Maquiagem de noiva" },
  { src: "./images/fotoGalery2.png", category: "Maquiagem", alt: "Aplicação de maquiagem" },
  { src: "./images/fotoGalery3.png", category: "Noivas", alt: "Noiva elegante" },
  { src: "./images/fotoGalery4.png", category: "Cílios", alt: "Extensão de cílios" },
  { src: "./images/fotoGalery5.png", category: "Casamentos", alt: "Cerimônia de casamento" },
  { src: "./images/fotoGalery6.png" ,category: "Bastidores", alt: "Atendimento no studio" },
  { src: "./images/fotoGalery7.png", category: "Maquiagem", alt: "Maquiagem artística" },
  { src: "./images/fotoGalery8.png", category: "Casamentos", alt: "Casal no altar" },
  { src: "./images/fotoGalery9.png", category: "Cílios", alt: "Design de cílios" },
  { src: "./images/fotoGalery10.png", category: "Bastidores", alt: "Penteado sendo feito" },
  { src: "./images/fotoGalery11.png", category: "Casamentos", alt: "Cerimônia ao ar livre" },
  { src: "./images/fotoGalery12.png", category: "Noivas", alt: "Noiva sorrindo" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [visible, setVisible] = useState(true);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  const handleFilter = (filter: string) => {
    if (filter === activeFilter) return; setVisible(false); setTimeout(() => { 
      setActiveFilter(filter); setVisible(true); }, 280); }; 
      const filtered = activeFilter === "Todos" ? photos : photos.filter((p) => p.category === activeFilter); 
      
      return ( <section id="galeria" className="section-padding bg-[rgb(247,244,237)] relative w-full justify-center p-5 pt-20  z-3"> <div className="container mx-auto px-6"></div>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn("text-center mb-12 reveal", headerInView && "visible")}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[rgb(194,145,61)]">
            Nosso Trabalho
          </p>
          <h2 className="font-makcasa text-4xl md:text-5xl text-black mb-4">
            Galeria
          </h2>
          <p className="font-body text-black/70 max-w-sm mx-auto">
            Momentos transformados em arte
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full font-body text-sm transition-all duration-300",
                activeFilter === filter
                  ? "bg-gradient-[rgb(194,145,61)] text-[rgb(194,145,61)] shadow-[rgb(194,145,61)] font-semibold"
                  : "border border-[border] text-black/70 hover:border-[rgb(194,145,61)] hover:text-[rgb(194,145,61)] bg-background"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition-opacity duration-280",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {filtered.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className={cn(
                "group relative overflow-hidden rounded-xl aspect-square cursor-pointer",
                i % 7 === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
              <div className="absolute bottom-3 left-3 right-3 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-350">
                <span className="font-body text-xs font-medium text-ivory bg-noir/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

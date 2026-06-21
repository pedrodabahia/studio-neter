import { useEffect, useRef, useState } from "react";
import { useInView } from "./hooks/useInview";
import { cn } from "./hooks/utils";

const stats = [
  { value: 500, suffix: "+", label: "Clientes Atendidas" },
  { value: 8, suffix: "+ anos", label: "De Experiência" },
  { value: 200, suffix: "+", label: "Casamentos" },
  { value: 98, suffix: "%", label: "Satisfação" },
];

function StatItem({ value, suffix, label, delay, trigger }: { value: number; suffix: string; label: string; delay: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, value]);

  return (
    <div className={cn("flex flex-col items-center gap-1 reveal", trigger && "visible", delay)}>
      <span className="font-display text-4xl md:text-5xl font-semibold text-[rgb(194,145,61)] tabular-nums">
        {count}{suffix}
      </span>
      <span className="font-body text-sm text-[rgb(194,145,61)] tracking-wide text-center">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="bg-black py-5 relative  z-2 w-full lg:w-[100vw]">
      <div
        ref={ref}
        className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            trigger={inView}
            delay={`delay-${(i + 1) * 100}`}
          />
        ))}
      </div>
    </section>
  );
}

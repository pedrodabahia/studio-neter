import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
  once = true
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, [threshold, once]);

  return [ref, inView] as const;
}

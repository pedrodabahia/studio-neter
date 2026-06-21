import { motion } from "motion/react";
import { useEffect, useState } from "react";
import TesteAmimado from '../contains/hooks/animacao'

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 2000);
    const timer3 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/*
        Estrutura IDÊNTICA à do <Hero/> até o SVG (mesmas classes,
        sem nada extra), porque o App.tsx não tem Header/Navbar acima
        do Hero — então a página começa exatamente nesse ponto (y=0).
        Qualquer classe extra aqui (flex, items-center etc.) muda o
        cálculo e desalinha. Por isso copiei 1:1.
      */}
      <section className="relative bg-cover bg-left md:bg-center pt-40 pb-50 z-2 w-[99vw]">
        <div className="w-[100vw] z-[1] top-[50vw] m-auto md:top-[10vw]">
          <div className="flex flex-col justify-center mb-[2vw] w-[50vw] m-auto">

            {/* placeholder invisível: mesma altura/margin do texto do Hero */}
            <span
              aria-hidden="true"
              className="invisible uppercase text-[2vw] mb-[5vw] md:mb-5 md:text-[0.6vw]"
            >
              ‒‒‒‒ studio de beleza & matrimonial ‒‒‒‒
            </span>

            <h1
              className="font-serif md:text-[8vw] text-[15vw] text-white leading-[11vw] mb-5 md:leading-[6vw]"
              id="tituloLoader"
            >
              {stage >= 1 && (
                <motion.span
                  style={{ display: "contents" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <TesteAmimado />
                </motion.span>
              )}
            </h1>

          </div>
        </div>
      </section>

      {/* partículas de fundo */}
      <div className="pointer-events-none fixed inset-0 w-screen h-screen -z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
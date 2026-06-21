import { ArrowRight } from "lucide-react";
import { WA } from "./hooks/whatsapp";

export default function Hero(){
    return(
        <section id="hero" className=" relative  bg-cover bg-left md:bg-center pt-40 pb-50 z-2 w-[99vw]">
            <div className=" w-[100vw] z-[1] top-[50vw] m-auto md:top-[10vw]">
                <div className="flex flex-col justify-center mb-[2vw] w-[50vw] m-auto">
                    <span className="text-[rgb(194,145,61)] uppercase text-[2vw] mb-[5vw] md:mb-5 md:text-[0.6vw]">‒‒‒‒ studio de beleza & matrimonial ‒‒‒‒</span>
                    <h1 className="font-serif md:text-[8vw] text-[15vw] text-white leading-[11vw] mb-5 md:leading-[6vw]" id="tituloHero">Juliana <br /><span className="">Neter</span></h1>
                    <p id="subtituloHero" className="italic font-makcasa serif text-[5vw] md:text-[1.3vw] text-[rgb(194,145,61)]" style={{fontFamily:"Great Vibes"}}>"Beleza, autoestima e momentos inesquecìveis"</p>
                    <span className="text-[rgb(194,145,61)] mt-[3vw]">‒‒‒‒ ✵ ‒‒‒‒</span>
                </div>
               <div className="md:flex-row justify-center flex flex-col itens-center w-[50vw] m-auto">
                                
                <a
                href={WA.ceremonial()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:w-[40%] p-2 w-full  md:m-2 items-center gap-3 justify-center py-4  rounded-[3vw] bg-gradient-to-r from-[rgb(194,145,61)] to-[rgb(229,197,118)] text-black font-body font-semibold text-[17px] shadow-[0_0_5px_rgb(194,145,61)] hover:shadow-[0_0_20px_rgb(194,145,61)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Quero Ficar Linda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href={WA.ceremonial()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:w-[40%] p-2 w-full md:m-2 mt-4 items-center gap-3 justify-center py-4 rounded-[3vw] border border-1 border-white text-white font-body font-semibold text-[17px] shadow-[0_0_5px_rgb(255,255,255)] hover:shadow-[0_0_20px_rgb(255,255,255)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Vou me casar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

                </div>
                <p className="relative  text-[0.8vw] top-[6vw] text-[rgb(194,145,61)]" id="spanExplorar">EXPLORAR <br /><span className=" inline-block rotate-90" style={{animation: "setaHero 2s ease-in-out infinite"}}> {">"} </span></p>
            </div>

            <span className="bg-black w-[100vw] h-[100%] absolute left-0 top-0 -z-10 opacity-50"></span>
        </section>
    )
}
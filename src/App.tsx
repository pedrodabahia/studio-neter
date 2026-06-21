import './App.css'
import Hero from './contains/Hero';
import DadosClinica from './contains/DadosCLinica';
import { ServiceCards } from './contains/ServiceCards';
import { BeautyServices } from './contains/BeuatyServices';
import  CerimonialSection  from './contains/CerimonialSection';
import { Gallery } from './contains/Gallery';
import { Quiz } from './contains/Quiz';
import  Testemunhas  from './contains/Testemunhas'
import Perguntas from './contains/Perguntas'
import { CTAFinal } from './contains/CTAfinal';
import ParalaxFundo from './ParalaxFundo';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './contains/LoadingScreen';
import { useState } from 'react';

function App() {
 const [ isLoading, setIsLoading] = useState(true)

  return (
    <>
      <section id="main">
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false) }/>
          )}
          </AnimatePresence>

         {!isLoading && (        
        <div className="relative min-h-screen  text-white">
        <ParalaxFundo />
        <Hero />
        <DadosClinica />
        <ServiceCards />
        <BeautyServices />
        <CerimonialSection />
        <Gallery />
        <Quiz />
        <Testemunhas />
        <Perguntas />
        <CTAFinal />
        </div>
        )} 

      </section>

    </>
  )
}

export default App

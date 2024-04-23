"use client"
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link';

import yellow from "@/../public/Gallery/yellow.webp"
import noPlastica from "@/../public/noPlastica.png"


export default function Page() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <section ref={ref} className="mt-32 flex flex-col items-center  lg:mx-auto">
      <div className='flex px-12 flex-col gap-20 lg:gap-0 lg:flex-row'>
          <Image src={yellow} alt="Chi siamo" className={`duration-700 rounded-lg w-full xl:w-[40rem]  ${isInView ? "translate-x-0 opacity-100" : "-translate-x-80 opacity-0"}`} />
          <div className='lg:pl-24 gap-10 flex flex-col lg:mt-28 2xl:justify-center'>
            <h1 className={`duration-500 text-5xl text-gray-800 font-semibold ${isInView ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}`}>Chi Siamo</h1>
            <p className= {`duration-700 max-w-2xl text-xl text-gray-500 ${isInView ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}`}>REFREESH Srl Benefit è la prima start-up italiana specializzata in acqua promozionale.
            Offriamo alle aziende un&apos;opportunità unica per pubblicizzare i propri marchi e prodotti attraverso bottiglie d&apos;acqua in cartone.
            Questa innovativa soluzione consente alle aziende di finanziare le bottiglie, consentendo poi la distribuzione
            gratuita ai consumatori. <br /> <br />In qualità di Società Benefit, Refreesh intende perseguire finalità di beneficio comune e operare in modo responsabile, sostenibile e trasparente nei confronti di persone, territorio, ambiente e altri portatori di interesse.
          </p>
          <Link href="/contattaci" className={`rounded-md duration-1000 bg-c-yellow w-fit px-7 py-4 font-semibold text-gray-700 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isInView ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}`}>
                Contattaci ora <span aria-hidden="true" className='pl-3'>→</span>
              </Link>
        </div>
        </div>
        <div className='flex flex-col w-full justify-center items-center mt-24 bg-gray-200 rounded-lg px-12 py-14 lg:py-28 gap-20 lg:gap-0 lg:flex-row'>
            <div className='lg:pr-24 gap-10 flex flex-col 2xl:justify-center'>
            <h1 className={`duration-700 text-5xl text-gray-800 font-semibold ${isInView ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}`}>Niente plastica, solo cartone</h1>
            <p className= {`duration-700 max-w-2xl text-xl text-gray-500 ${isInView ? "translate-x-0 opacity-100" : "translate-x-80 opacity-0"}`}>
            Refreesh si propone, in particolare, di realizzare un impatto positivo sulla società e sull’ambiente attraverso l&apos;utilizzo esclusivo di bottiglie di cartone, sostenibili e riciclabili, riducendo in tal modo l&apos;impatto ambientale, nonché attraverso la loro distribuzione gratuita ai consumatori, donando in tal modo acqua alla collettività e contribuendo anche alla realizzazione di progetti idrici in zone con scarsità di risorse.
            </p>
        </div>
        <Image src={noPlastica} height={500} width={500} alt="Chi siamo" className={`duration-700 scale-125 rounded-lg h-full lg:ml-28  ${isInView ? "translate-x-0 opacity-100" : "-translate-x-80 opacity-0"}`} />
        </div>
    </section>
  )
}

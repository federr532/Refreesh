import React from 'react'
import Image from 'next/image'

import consulenza from "@/../public/consulenza.svg"
import ricercaMercato from "@/../public/ricercaMercato.svg"
import grafica from "@/../public/grafica.svg"
import distribuzione from "@/../public/distribuzione.svg"
import produzione from "@/../public/produzione.svg"

export default function Steps() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 bg-yellow-300 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={consulenza} alt="consulenza"/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Consulenza iniziale e valutazione fattibilità</h2>
          <p className="leading-relaxed">Analisi dei requisiti del cliente e valutazione dell&apos;idoneità della promozione dell&apos;acqua in cartone come veicolo pubblicitario.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 bg-yellow-300 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={ricercaMercato} alt="ricercaMercato" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Ricerca di mercato</h2>
          <p className="leading-relaxed">Studio delle tendenze di consumo di acqua e delle opportunità di mercato per l'acqua promozionale in cartone, comprese le preferenze dei consumatori e le esigenze delle aziende.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 bg-yellow-300 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={grafica} alt="grafica" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Studio e realizzazione grafica</h2>
          <p className="leading-relaxed">Creazione di design accattivanti e personalizzati per le bottiglie d&apos;acqua in cartone, rispecchiando l&apos;identità del marchio del cliente e attirando l&apos;attenzione dei consumatori.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-28 h-28 bg-yellow-300 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={produzione} alt="produzione" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Produzione</h2>
          <p className="leading-relaxed">Realizzazione delle bottiglie d&apos;acqua in cartone, seguendo standard di qualità elevati e garantendo che siano conformi alle normative di sicurezza alimentare.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">5</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 bg-yellow-300 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={distribuzione} alt="distribuzione" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Distribuzione</h2>
          <p className="leading-relaxed">Implementazione di strategie per distribuire le bottiglie d&apos;acqua promozionali in cartone presso i punti vendita selezionati, garantendo una visibilità ottimale del marchio del cliente tra i consumatori.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

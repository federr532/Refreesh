import React from 'react'
import Image from 'next/image'

import consulenza from "@/../public/consulenza.png"
import ricercaMercato from "@/../public/ricercaMercato.png"
import grafica from "@/../public/grafica.png"
import distribuzione from "@/../public/distribuzione.png"
import produzione from "@/../public/produzione.png"
import raccoltaDati from "@/../public/raccoltaDati.png"
import analisiDati from "@/../public/analisiDati.png"
import rapportoFinale from "@/../public/rapportoFinale.png"


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
      <div className="flex-shrink-0 w-28 h-28 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={consulenza} alt="consulenza"/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Consulenza iniziale e valutazione fattibilità</h2>
          <p className="leading-relaxed">Analisi approfondita delle esigenze del cliente, valutazione e vantaggi nell&apos;implementare una strategia di marketing basata sull&apos;utilizzo di acqua in cartone come mezzo pubblicitario , includendo valutazione di fattibilità e proiezioni di costo e beneficio.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28  text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={ricercaMercato} alt="ricercaMercato" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Ricerca di mercato</h2>
          <p className="leading-relaxed">Analisi dettagliata del mercato per identificare i punti di distribuzione ottimali in linea con gli obiettivi e l&apos;identità aziendale. L’obiettivo è garantire che la distribuzione avvenga in luoghi e tempi dove è più probabile intercettare e coinvolgere efficacemente il pubblico di interesse dell&apos;azienda.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28  text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={grafica} alt="grafica" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Studio e realizzazione grafica</h2>
          <p className="leading-relaxed">Progettazione e sviluppo di grafiche innovative e su misura per le bottiglie d&apos;acqua in cartone, mirate a rappresentare fedelmente l&apos;identità del marchio del cliente,  coinvolgere il pubblico target attraverso un design distintivo.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-28 h-28  text-gray-800 rounded-full inline-flex items-center justify-center">
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
      <div className="flex-shrink-0 w-28 h-28 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={distribuzione} alt="distribuzione" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Distribuzione</h2>
          <p className="leading-relaxed">Le bottiglie d&apos;acqua in cartone vengono regalate ai consumatori nei nostri punti di distribuzione ufficiali Refreesh, situati strategicamente in aree e nelle ore di maggior afflusso.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">6</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={raccoltaDati} alt="raccolta dati" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Raccolta dati</h2>
          <p className="leading-relaxed">Durante la campagna vengono raccolte informazioni pertinenti che consentano di valutare l&apos;andamento della stessa. Questi dati saranno raccolti direttamente nei punti di distribuzione Refresh attraverso sondaggi e moduli che verranno compilati dai consumatori con il supporto del nostro team</p>
        </div>
      </div>
    </div>
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">7</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={analisiDati} alt="analisi dati" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Analisi dei risultati</h2>
          <p className="leading-relaxed">Durante il processo di analisi dei risultati della campagna , vengono esaminati i dati raccolti, i feedback dei consumatori ottenuti attraverso sondaggi e interviste, il monitoraggio dei social media per valutare l&apos;engagement e l&apos;interesse generato, per comprendere la percezione del marchio ed eventuali aree di miglioramento.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-700 text-gray-100 relative z-10 title-font font-medium text-sm">8</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-28 h-28 text-gray-800 rounded-full inline-flex items-center justify-center">
          <Image src={rapportoFinale} alt="rapporto finale" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Rapporto finale</h2>
          <p className="leading-relaxed">Il rapporto finale include una panoramica degli obiettivi raggiunti misurati tramite indicatori chiave di prestazione (KPI).</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

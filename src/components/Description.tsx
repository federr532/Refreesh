import Image from "next/image"

import grafica1 from "@/../public/grafica1.png"
import grafica2 from "@/../public/grafica2.png"
import grafica4 from "@/../public/grafica4.png"

export default function Description() {
  return (
    <section className="flex px-6 xl:px-14 gap-24 lg:gap-9 flex-col items-center mt-20">
        <div className="flex flex-col gap-9 lg:gap-16 lg:flex-row items-center">
            <Image src={grafica4} alt="grafica1" width={1000} height={1000} className="lg:w-1/2 lg:max-w-3xl" />
            <div>
                <h3 className="text-4xl xl:text-5xl font-semibold text-gray-900 text-center lg:text-start">Cosa Offre Refreesh?</h3>
                <p className="max-w-2xl text-gray-600 text-lg mt-10 text-center lg:text-start">Offriamo alle aziende un&apos;opportunità unica di promuovere i propri brand e prodotti attraverso bottiglie d&apos;acqua di cartone, sostenendo al contempo l&apos;ambiente e la sostenibilità. Refreesh si distingue per il suo impegno verso l&apos;ambiente, utilizzando esclusivamente bottiglie di cartone sostenibili e riciclabili.</p>
            </div>

        </div>
        <div className="flex flex-col gap-5 lg:flex-row items-center">
            <div>
                <h3 className="text-4xl  xl:text-5xl font-semibold text-gray-900 text-center lg:text-start">Distinguiti Dalla Concorrenza</h3>
                <p className="max-w-2xl text-gray-600 text-lg mt-10 text-center lg:text-start">Questa innovativa soluzione consente alle aziende di finanziare le bottiglie, consentendo poi la distribuzione gratuita ai consumatori; distinguendovi dalla concorrenza e lasciando un&apos;impressione duratura raggiungendo consumatori in ambienti chiave, aumentando la riconoscibilità del vostro brand.</p>
            </div>
            <Image src={grafica1} alt="grafica1" width={1000} height={1000} className="lg:w-[40%] lg:max-w-3xl" />
        </div>
        <div className="flex flex-col gap-5 lg:gap-16 lg:flex-row items-center">
        <Image src={grafica2} alt="grafica1" width={1000} height={1000} className="lg:w-1/2 lg:max-w-3xl" />
            <div>
                <h3 className="text-4xl xl:text-5xl max-w-3xl font-semibold text-gray-900 text-center lg:text-start">Pubblicità Innovativa e Sostenibile</h3>
                <p className="max-w-2xl text-gray-600 text-lg mt-10 text-center lg:text-start">La pubblicità è un elemento molto importante del marketing. È il ponte attraverso il quale un&apos; azienda aiuta i clienti a comprendere diversi prodotti o servizi. Ancora più importante se ciò avviene attraverso una scelta <b>innovativa</b>, ma allo stesso tempo <b>sostenibile</b>.</p>
            </div>
        </div>
    </section>
  )
}

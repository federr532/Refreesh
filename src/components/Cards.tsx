import Image from 'next/image'
import eye from '../../public/eye.png'
import ecology from '../../public/ecology.png'
import light from '../../public/light.png'
import graph from '../../public/graph.png'

export default function Cards() {
  return (
    <div className="mt-20 md:mt-0 mx-5 lg:mx-16 flex gap-7 flex-col lg:flex-row mb-14 lg:mb-0">
            <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={eye} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-c-yellow font-semibold text-lg text-center">Visibilità</h4>
                <p className="w-64 text-gray-400 text-center">Potenzia il tuo marchio su un prodotto sostenibile, raggiungendo consumatori in ambienti chiave.</p>
            </div>
        </div>
        <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={light} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-c-yellow font-semibold text-lg text-center">Originalità</h4>
                <p className="w-64 text-gray-400 text-center">Immergiti in una pubblicità green con bottiglie d&apos;acqua di cartone personalizzate.</p>
            </div>
        </div>
        <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={graph} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-c-yellow font-semibold text-lg text-center">Rendimento</h4>
                <p className="w-64 text-gray-400 text-center">Massimizza ROI con campagne mirate in un modello eco-friendly.</p>
            </div>
        </div>
        <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={ecology} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-c-yellow font-semibold text-lg text-center">Sostenibilità</h4>
                <p className="w-64 text-gray-400 text-center">Il nostro obiettivo principale è rispettare l&apos;ambiente</p>
            </div>
        </div>
    </div>
  )
}

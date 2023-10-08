import Image from 'next/image'
import soldi from '../../public/soldi.png'
import ecology from '../../public/ecology.png'
import acqua from '../../public/acqua.png'

export default function Cards() {
  return (
    <div className="mt-20 md:mt-0 mx-5 lg:mx-16 flex gap-7 flex-col lg:flex-row mb-14 lg:mb-0">
            <div className="flex flex-col bg-c-blue px-5 shadow lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={soldi} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-gray-100 font-semibold text-lg text-center">Risparmia</h4>
                <p className="w-64 text-gray-200 text-center">L’acqua in bottiglia costa 2.000 volte il prezzo dell’acqua del rubinetto</p>
            </div>
        </div>
        <div className="flex flex-col bg-c-blue px-5 shadow lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={ecology} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-gray-100 font-semibold text-lg text-center">Ecologico</h4>
                <p className="w-64 text-gray-200 text-center">Il nostro obiettivo principale è rispettare l&apos;ambiente</p>
            </div>
        </div>
        <div className="flex flex-col bg-c-blue px-5 shadow lg:w-1/3 py-10 md:gap-0 rounded-xl justify-center items-center">
                <Image src={acqua} height={50} width={50} alt="" className="pb-4" />
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <h4 className="text-gray-100 font-semibold text-lg text-center">Acqua di qualità</h4>
                <p className="w-64 text-gray-200 text-center">Refreesh è acqua di sorgente naturale.</p>
            </div>
        </div>
    </div>
  )
}

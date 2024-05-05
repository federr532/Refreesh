import Image from 'next/image'
import visibilità from '../../public/visibilità.svg'
import originalità from '../../public/originalità.svg'
import rendimento from '../../public/rendimento.svg'
import sostenibilità from '../../public/sostenibilità.svg'

export default function Cards() {

    const imageSize = 110;

  return (
    <div className="mt-20 max-w-[120rem] mx-auto md:mt-0 px-5 lg:px-16 gap-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-14 lg:mb-0">
            <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl py-10 md:gap-0 rounded-xl justify-center items-center">
            <div className='mb-2 bg-c-yellow shadow-md backdrop-blur-xl p-2 translate-y-2 rounded-full mt-4 stroke-none '>
                <Image src={visibilità} height={imageSize} width={imageSize} alt="" className="" />
            </div>
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <p className="w-64 text-gray-500 text-center mt-3 translate-y-2">Potenzia il tuo marchio su un prodotto sostenibile, raggiungendo consumatori in ambienti chiave.</p>
            </div>
        </div>
        <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl  py-10 md:gap-0 rounded-xl justify-center items-center">
            <div className='mb-2 bg-c-yellow shadow-md backdrop-blur-xl p-2 rounded-full mt-4 stroke-none '>
                <Image src={originalità} height={imageSize} width={imageSize} alt="" className="" />
            </div>
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <p className="w-64 text-gray-500 mt-3 text-center">Immergiti in una pubblicità green con bottiglie d&apos;acqua di cartone personalizzate.</p>
            </div>
        </div>
        <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl  py-10 md:gap-0 rounded-xl justify-center items-center">
                <div className='mb-2 bg-c-yellow shadow-md backdrop-blur-xl p-2 rounded-full mt-4 stroke-none '>
                    <Image src={rendimento} height={imageSize} width={imageSize} alt="" className="scale-90 " />
                </div>
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <p className="w-64 text-gray-500 mt-3 text-center">Massimizza ROI con campagne mirate in un modello eco-friendly.</p>
            </div>
        </div>
        <div className="flex flex-col backdrop-blur-xl px-5 shadow-xl py-10 md:gap-0 rounded-xl justify-center items-center">
                <div className='mb-2 bg-c-yellow shadow-md backdrop-blur-xl p-2 rounded-full mt-4 stroke-none -translate-y-3'>
                    <Image src={sostenibilità} height={imageSize} width={imageSize} alt="" className="scale-90" />
                </div>
            <div className="flex w-2/3 md:w-fit flex-col items-center gap-2">
                <p className="w-64 text-gray-500 mt-3 text-center -translate-y-3">Il nostro obiettivo principale è rispettare l&apos;ambiente</p>
            </div>
        </div>
    </div>
  )
}

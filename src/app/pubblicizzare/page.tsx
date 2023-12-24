import React from 'react'
import Image from 'next/image'
import bottiglieUp from '../../../public/bottiglieUp.png'
import location from '../../../public/location.png'
import bottleBlue from '../../../public/bottle-blue.png'
import noMoney from '../../../public/no-money.png'
import Link from 'next/link'

export default function page() {
  return (
    <section className='mt-36 overflow-hidden  lg:px-32'>
        <div className='flex flex-col lg:flex-row items-center justify-around'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='font-bold text-center lg:text-start text-4xl xl:text-6xl'>Pubblicizza con RE<span className='text-c-blue'>FREE</span>SH</h1>
                <p className='mt-8 mb-12 px-10 lg:px-0 text-gray-500 xl:text-xl text-center lg:text-start'>Promuovi il Tuo Brand in Modo Sostenibile e Accessibile</p>
                <Link href="/contattaci" className="rounded-md bg-c-blue w-fit duration-150 px-7 py-4 font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contattaci ora <span aria-hidden="true" className='pl-3'>→</span>
              </Link>
            </div>
            <Image draggable="false" src={bottiglieUp} width={800} height={800} alt='bottiglie' className='md:max-w-2xl mt-16 2xl:max-w-none' />
        </div>
        <h4 className='text-3xl px-16 lg:px-0 font-semibold text-gray-800 mt-10'>Il Nostro Processo di Distribuzione</h4>
        <div className='flex px-16 lg:px-0 flex-col items-center'>
        <div className='grid gap-14 grid-cols-1 lg:grid-cols-2 mt-20'>
            <div className='flex flex-col gap-3'>
                <Image src={location} height={50} width={50} alt="location" />
                <h3 className='text-lg font-semibold text-grey-800'>1. Scelta delle Location</h3>
                <p className='text-gray-500 max-w-lg'>Le bottiglie di acqua con pubblicità vengono distribuite in varie location ad alto traffico, tra cui eventi sportivi, concerti, fiere commerciali, parchi e altre aree pubbliche. Queste location sono accuratamente selezionate per massimizzare la visibilità e l&apos;impatto delle campagne pubblicitarie.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Image src={bottleBlue} height={50} width={50} alt="bottle" />
                <h3 className='text-lg font-semibold text-grey-800'>2. Produzione di Bottiglie Sostenibili</h3>
                <p className='text-gray-500 max-w-lg'>Una volta raccolti i contratti pubblicitari, produciamo le bottiglie di acqua di cartone con gli spazi pubblicitari appropriati. Utilizziamo materiali ecologici e sostenibili per contribuire a preservare l&apos;ambiente.</p>
            </div>
        </div>
        <div className='flex justify-center mt-14 lg:mt-20'>
            <div className='flex flex-col gap-3'>
                    <Image src={noMoney} height={50} width={50} alt="bottle" />
                    <h3 className='text-lg font-semibold text-grey-800'>3. Distribuzione Gratuita</h3>
                    <p className='text-gray-500 max-w-lg'>Le bottiglie di acqua con pubblicità vengono distribuite gratuitamente alle persone in queste location. I consumatori possono prendere le bottiglie senza costi e godersi l&apos;acqua all&apos;interno, promuovendo così uno stile di vita sano e idratato.</p>
                </div>
        </div>
        </div>
    </section>
  )
}

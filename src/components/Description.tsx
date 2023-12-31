import React from 'react'
import Image from 'next/image'
import bottGial from '../../public/botGial.png'
import noPlastica from '../../public/noPlastica.png'

export default function Description() {
  return (
    <section id='chisiamo' className='flex flex-col items-center justify-center'>
        <div className='flex lg:mt-44 px-20 justify-center'>
            <div className='flex gap-14 lg:gap-28 items-center flex-col lg:flex-row'>
                <Image draggable="false" src={bottGial} height={500} width={500} alt='bottle' className='h-[30rem] md:h-[40rem] object-cover' />
                <div>
                    <p className='max-w-xl mt-9 text-lg text-center lg:text-start text-gray-500'>Refreesh è la prima start-up in Italia di Acqua Promozionale, offre alle aziende la possibilità di promuovere i propri marchi e prodotti su bottiglie di acqua di cartone. La chiave distintiva di questo progetto è che le bottiglie stesse sono finanziate dalla pubblicità delle aziende, il che consente di distribuirle gratuitamente ai consumatori</p>
                </div>
            </div>
        </div>
        <div className='mt-28 px-20 flex flex-col lg:flex-row gap-28 xl:gap-72 items-center'>
            <div>
                <h3 className='text-2xl text-center lg:text-start md:text-3xl xl:text-5xl font-semibold'>Niente plastica, solo cartone</h3>
                <p className='max-w-xl mt-9 text-center lg:text-start text-gray-500'>REFREESH utilizza esclusivamente bottiglie di cartone, sostenibili e riciclabili, riducendo così l&apos;impatto ambientale, rendendo sostenibile la pubblicità e migliorando l&apos;immagine delle aziende partner</p>
            </div>
            <Image draggable="false" src={noPlastica} height={500} width={500} alt='no plastica' className='scale-125' />
        </div>
    </section>
  )
}

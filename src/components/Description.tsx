import React from 'react'
import Image from 'next/image'
import box from '../../public/box.jpg'
import nonplastic from '../../public/no-plastica.jpg'

export default function Description() {
  return (
    <section id='chisiamo' className='flex flex-col items-center justify-center'>
        <div className='flex lg:mt-44 px-20 justify-center'>
            <div className='flex gap-14 lg:gap-28 items-center flex-col lg:flex-row'>
                <Image draggable="false" src={box} height={500} width={500} alt='bottle' />
                <div>
                    <h3 className='text-2xl text-center lg:text-start md:text-3xl xl:text-5xl font-semibold'>Chi Siamo</h3>
                    <p className='max-w-xl mt-9 text-center lg:text-start text-gray-500'>REFREESH è un&apos;innovativa start-up che si occupa di promuovere uno stile di vita sano e sostenibile, offrendo alle aziende la possibilità di promuovere i propri marchi e prodotti su bottiglie di acqua di cartone. La chiave distintiva di questo progetto è che le bottiglie stesse sono finanziate dalla pubblicità delle aziende, il che consente di distribuirle gratuitamente ai consumatori.</p>
                </div>
            </div>
        </div>
        <div className='mt-28 px-20 flex flex-col lg:flex-row gap-28 xl:gap-72 items-center'>
            <div>
                <h3 className='text-2xl text-center lg:text-start md:text-3xl xl:text-5xl font-semibold'>Non usiamo bottiglie di plastica</h3>
                <p className='max-w-xl mt-9 text-center lg:text-start text-gray-500'>REFREESH non utilizza bottiglie di plastica per promuovere la sostenibilità ambientale. Le bottiglie di cartone, sostenibili e riciclabili, riducono l&apos;impatto ambientale, promuovendo l&apos;uso responsabile delle risorse, risparmiando energia nella produzione e migliorando l&apos;immagine aziendale attraverso la responsabilità sociale.</p>
            </div>
            <Image draggable="false" src={nonplastic} height={500} width={500} alt='no plastica' className='scale-125' />
        </div>
    </section>
  )
}

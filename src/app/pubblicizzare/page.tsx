import React from 'react'
import Image from 'next/image'
import bottiglieUp from '../../../public/bottiglieUp.png'
import location from '../../../public/location.png'
import bottleBlue from '../../../public/bottle-blue.png'
import noMoney from '../../../public/no-money.png'
import Link from 'next/link'

import Steps from '@/components/Steps'

export default function page() {
  return (
    <section className='mt-36 overflow-hidden  lg:px-32'>
        <div className='flex flex-col lg:flex-row items-center max-w-[120rem] mx-auto justify-around'>
            <div className='flex flex-col items-center lg:items-start'>
            <h1 className=" font-bold tracking-wide  text-gray-800 text-center text-3xl lg:text-5xl">Pubblicizza con 
              RE<span className='font-outline-2 text-[1.8rem] tracking-wide lg:text-[3rem] text-c-yellow '>FREE</span>SH
            </h1>
                <p className='mt-8 mb-12 px-10 lg:px-0 text-gray-500 xl:text-xl text-center lg:text-start'>Promuovi il Tuo Brand in Modo Sostenibile e Accessibile</p>
                <Link href="/contattaci" className="rounded-md bg-c-yellow w-fit duration-150 px-7 py-4 font-semibold text-gray-700 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contattaci ora <span aria-hidden="true" className='pl-3'>→</span>
              </Link>
            </div>
            <Image draggable="false" src={bottiglieUp} width={800} height={800} alt='bottiglie' className='md:max-w-2xl mt-16 2xl:max-w-none' />
        </div>
        <h4 className='text-3xl lg:text-5xl text-center px-16 lg:px-0 font-semibold text-gray-800 mt-36'>Il Nostro Processo di Distribuzione</h4>
        <Steps />
    </section>
  )
}

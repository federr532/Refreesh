import React from 'react'
import Image from 'next/image'
import bottiglie from "@/../public/bottiglie.png"
import Link from 'next/link'

export default function Hero() {
  return (
    <div id='#home' className="relative isolate px-6 pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e5ec6087] to-[#c4800192] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='flex mx-auto max-w-6xl gap-20 flex-col md:flex-row items-center justify-center'>
        <div className="pt-28 pb-8 md:py-56">
          <div className="text-center lg:text-start">
            <h1 className=" font-bold tracking-wide  text-gray-800 text-5xl lg:text-8xl">
              RE<span className='font-outline-2 text-[2.8rem] tracking-wide lg:text-[5.8rem] text-c-yellow '>FREE</span>SH
            </h1>
            <p className="mt-6 text-lg leading-8 font-semibold text-gray-600">
            La prima acqua promozionale
            </p>
            <div className="mt-10 flex flex-col lg:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="/pubblicizzare"
                className="rounded-md bg-c-yellow duration-150 px-7 py-3 font-semibold text-gray-700 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Pubblicizza con noi
              </Link>
              <Link href="/chi-siamo"
                className="rounded-md duration-150 px-7 py-3 font-semibold text-gray-700 hover:text-gray-500">
                Chi siamo <span className='pl-1' aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
          <Image draggable="false" src={bottiglie} height={1080} width={1920} alt='' className='w-full xl:w-[40rem]' />
          </div>
        </div>
  )
}

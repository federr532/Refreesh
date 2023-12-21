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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#85e7f6] to-[#01aac4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='flex mx-auto max-w-6xl gap-20 flex-col md:flex-row items-center justify-center'>
        <div className="pt-28 pb-8 md:py-56">
          <div className="text-center lg:text-start">
            <h1 className=" font-bold tracking-tight text-gray-800 text-5xl lg:text-8xl">
              RE<span className='text-c-blue'>FREE</span>SH
            </h1>
            <p className="mt-6 text-lg leading-8 font-semibold text-[#606060]/70">
            Sorseggia, Sponsorizza, Sostieni
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
              <Link
                href="/contattaci"
                className="rounded-md bg-c-blue duration-150 px-7 py-3 font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contattaci
              </Link>
              <Link href="/pubblicizzare" className="text-sm font-semibold hover:text-c-blue duration-150 leading-6 text-gray-900">
                Pubblicizza con noi <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#85e7f6] to-[#01aac4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <Image draggable="false" src={bottiglie} height={1080} width={1920} alt='' className='w-full xl:w-[40rem]' />
          </div>
        </div>
  )
}

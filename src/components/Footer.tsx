import React from 'react'
import Image from 'next/image'
import RefreshLogo from '../../public/REFRESH-logo.png'
import Link from 'next/link'
import instagram from '../../public/instagram.png'

export default function Footer() {
  return (
    <footer className=" mt-48 bg-black/90">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-around">
          <div className="mb-10 md:mb-0 mt-10">
              <Link href="/contattaci">
                  <span className="self-center bg-c-yellow rounded-lg py-4 px-6 hover:bg-yellow-500 duration-150 font-semibold whitespace-nowrap text-gray-700"> Contattaci <span aria-hidden="true" className='pl-2'>&rarr;</span> </span>
                </Link>
                <div className='mt-12 text-gray-400/80 flex flex-col gap-3'>
                    <h3 className='uppercase font-semibold mb-2'>Contatti:</h3>
                    <h4 className=' '>Refreesh Srl Benefit</h4>
                    <a className='hover:underline' href='mailto:info@refreesh.it'>info@refreesh.it</a>
                    <p className="">Via lazzaro spallanzani 10 , Milano (MI)</p>
                    <p>P. IVA: 13516410969</p>
                </div>
          </div>
          <div className='flex flex-col justify-end text-gray-400/80'>
          <h4 className=' uppercase font-semibold mb-5'>Pagine:</h4>
          <div className="grid grid-cols-2 gap-8 sm:gap-28 sm:grid-cols-2">
              <div className='flex items-center '>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/" className="hover:underline">Home</Link>
                      </li>
                      <li className='mb-4'>
                          <Link href="/chi-siamo" className="hover:underline">Chi Siamo</Link>
                      </li>
                      <li>
                          <Link href="/pubblicizzare" className="hover:underline">Pubblicizzare</Link>
                      </li>
                  </ul>
              </div>
              <div className='flex items-center'>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className='mb-4'>
                          <Link href="/faq" className="hover:underline">FAQ</Link>
                      </li>
                      <li>
                          <Link href="/contattaci" className="hover:underline">Contattaci</Link>
                      </li>
                  </ul>
              </div>
            </div>
                <h4 className='mt-7 uppercase font-semibold mb-5'>Informazioni legali:</h4>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <Link href="/disposizioni-benefit" className="hover:underline">Disposizioni sulle Società Benefit</Link>
                    </li>
                </ul>
          </div>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Refreesh Srl Benefit</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.instagram.com/refreesh_official/" target='_blank'>
                    <Image src={instagram} height={30} width={30} alt='' />
              </a>
          </div>
      </div>
    </div>
</footer>
  )
}

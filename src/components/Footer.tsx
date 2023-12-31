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
          <div className="mb-20 md:mb-0 mt-10">
              <Link href="/contattaci">
                  <span className="self-center bg-c-yellow rounded-lg py-4 px-6 hover:bg-yellow-500 duration-150 font-semibold whitespace-nowrap text-gray-700"> Contattaci <span aria-hidden="true" className='pl-2'>&rarr;</span> </span>
                </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-28 sm:grid-cols-2">
              <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/" className="hover:underline">Home</Link>
                      </li>
                      <li className='mb-4'>
                          <Link href="/#chisiamo" className="hover:underline">Chi Siamo</Link>
                      </li>
                      <li>
                          <Link href="/pubblicizzare" className="hover:underline">Pubblicizzare</Link>
                      </li>
                  </ul>
              </div>
              <div>
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
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Refreesh™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.instagram.com/refreesh_official/" target='_blank'>
                    <Image src={instagram} height={20} width={20} alt='' />
              </a>
          </div>
      </div>
    </div>
</footer>
  )
}

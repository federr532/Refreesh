"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Dialog } from '@headlessui/react'
import RefreeshLogo from '../../public/REFRESH-logo.png'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Chi siamo', href: '/chi-siamo',  },
    { name: 'Pubblicizzare', href: '/pubblicizzare' },
    { name: 'Distribuisci', href: '/distribuisci' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Social', href: '/social' },
  ]

export default function Navbar() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    console.log(pathname)

  return (
    <header className="fixed backdrop-blur-xl md:bg-white/70 inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/#home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Name</span>
                <Image src={RefreeshLogo} width={120} height={120} alt='logo' className='font-semibold text-xl' />
            </Link> 
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className={`${!mobileMenuOpen && 'h-6 w-6'}`} aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} onClick={() => setMobileMenuOpen(false)} href={item.href} className={`text-sm ${pathname === item.href ? "text-blue-500" : "text-gray-500"} hover:text-blue-300 leading-6`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#contact" className="text-smg hover:text-blue-500 duration-150 font-semibold leading-6 ">
              Contattaci <span aria-hidden="true" className='pl-1'>&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/70 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Refreesh</span>
                
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-100/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                    onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-200/80"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-blue-700 hover:text-gray-100"
                  >
                    Contattaci
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}
"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Dialog } from '@headlessui/react'
import RefreeshLogo from '../../public/RefreeshLogo.png'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Contattaci', href: '/contattaci',  },
    { name: 'Pubblicizza', href: '/pubblicizzare' },
    { name: 'FAQ', href: '/faq' },
  ]

export default function Navbar() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed backdrop-blur-xl md:bg-white/50 inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-32" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
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
              <Link key={item.name} onClick={() => setMobileMenuOpen(false)} href={item.href} className={`text-sm ${pathname === item.href ? "text-c-yellow" : "text-gray-500"} hover:text-yellow-500 leading-6`}>
                {item.name}
              </Link>
            ))}
          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

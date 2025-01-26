import React from 'react'
import Link from 'next/link'

export default function notFound() {
  return (
    <main className="grid min-h-full mt-20 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-c-blue">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina non trovata</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">La pagina che hai cercato non esiste.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md duration-150 bg-c-yellow px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </main>
  )
}

import React from 'react'
import Domande from '../../components/Questions'

export default function page() {
  return (
    <section className='mt-32 px-8 md:px-14'>
        <h1 className='text-2xl md:text-4xl font-semibold'>Trova la risposta a tutte le nostre domande più richieste</h1>
        <div className='max-w-3xl mx-auto mt-24'>
          <Domande />
        </div>
    </section>
  )
}

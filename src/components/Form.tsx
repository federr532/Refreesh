"use client"
import React from 'react'
import contact from '../../public/contact.svg'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Form() {

    const [submitted, setSubmitted] = useState(false)

    const onSubmit = () =>{
        setSubmitted(true);
      }

  return (
    <form onSubmit={onSubmit} action="https://formsubmit.co/bd12c4f3f69abed30268eb8d7081197b" method="POST" className="mt-10 mb-14 px-6 flex rounded-2xl py-14 shadow-xl bg-contactBg lg:flex-row flex-col gap-10 backdrop-blur-2xl bg-gray-50/70 lg:px-16">
    <input type="hidden" name="_next" value="https://refreesh.vercel.app//contattaci" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_subject" value="New submission!" />
    <input type="hidden" name="_captcha" value="false" />
    <div className="flex flex-col md:gap-5 gap-10 lg:w-2/3" >
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="name">Nome</label>
            <input name="Nome" required id="name" placeholder="Il tuo nome" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="email">Email</label>
            <input type="Email" name="email" required id="email" className="rounded-2xl border border-gray-400 py-4 px-4 text-black" placeholder="La tua email" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="message" className="ml-4 font-light">Messaggio</label>
            <textarea name="Messaggio" required id="message" className="rounded-xl border border-gray-400 px-4 py-3 text-black" placeholder="Il tuo messaggio" rows={6} maxLength={300} />
        </div>
        <div className="flex gap-3 items-center">
            <input required id="checkbox" type="checkbox" value="" className="w-4 h-4 text-indigo-600 bg-indigo-100 border-indigo-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-indigo-800 focus:ring-2 dark:bg-indigo-700 dark:border-indigo-600" />
            <label htmlFor="checkbox" className="text-[.8rem]">Sono d&apos;accordo con i Termini di utilizzo e l&apos;Informativa sulla privacy.</label>
        </div>
        <button className="bg-blue-400 hover:bg-blue-300 text-white duration-300 py-3 rounded-lg" >Invia</button>
        {submitted && <p className="text-green-500">Messaggio inviato!</p>}
    </div>
    <div className="flex flex-col gap-2 w-full">
        <Image draggable="false" src={contact} alt="contact" height={800} width={800} />
    </div>
</form>
  )
}

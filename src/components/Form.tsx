"use client"
import React from 'react'
import contact from '../../public/contact.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function Form({host}: {host : string | null}) {

    const [submitted, setSubmitted] = useState(false)

    const onSubmit = () =>{
        setSubmitted(true);
      }

  return (
    <form onSubmit={onSubmit} action="https://formsubmit.co/refreeshmail@gmail.com" method="POST" className="mt-10 mb-14 px-6 flex rounded-2xl py-14 shadow-xl bg-contactBg lg:flex-row flex-col gap-10 backdrop-blur-2xl bg-gray-50/70 lg:px-16">
    <input type="hidden" name="_next" value={`https://${host}/contattaci`} />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_subject" value="New submission!" />
    <input type="hidden" name="_captcha" value="false" />
    <div className="flex flex-col md:gap-5 gap-10 lg:w-2/3" >
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="name">Nome</label>
            <input name="Nome" required id="name" placeholder="Il tuo nome" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="surname">Cognome</label>
            <input name="Cognome" required id="surname" placeholder="Il tuo cognome" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="email">Email</label>
            <input type="Email" name="email" required id="email" className="rounded-2xl border border-gray-400 py-4 px-4 text-black" placeholder="La tua email" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="number">Numero di telefono</label>
            <input name="Numero telefonico" required id="number" placeholder="Il tuo numero di telefono" type="tel" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="object">Oggetto</label>
            <input name="Oggetto" required id="object" placeholder="Oggetto del messaggio" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="message" className="ml-4 font-light">Messaggio</label>
            <textarea name="Messaggio" required id="message" className="rounded-xl border border-gray-400 px-4 py-3 text-black" placeholder="Il tuo messaggio" rows={6} maxLength={700} />
        </div>
        <div className="flex gap-3 items-center">
            <input required id="checkbox" type="checkbox" value="" className="w-4 h-4 text-c-blue bg-indigo-100 border-c-blue rounded-xl focus:ring-c-blue focus:ring-2" />
            <label htmlFor="checkbox" className="text-[.8rem]">Sono d&apos;accordo con i Termini di utilizzo e l&apos;Informativa sulla privacy.</label>
        </div>
        <button className="bg-c-blue hover:bg-cyan-600 text-white duration-300 py-3 rounded-lg" >Invia</button>
        {submitted && <p className="text-green-500">Messaggio inviato!</p>}
    </div>
    <div className="flex items-center justify-center flex-col gap-2 w-full">
        <Image draggable="false" src={contact} alt="contact" height={800} width={800} />
    </div>
</form>
  )
}

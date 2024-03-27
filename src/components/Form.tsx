"use client"
import { useState } from 'react'
import Spinner from './Spinner'
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image'
import contact from '../../public/contact.svg'

export default function Form({host}: {host : string | null}) {

    const [loading, setLoading] = useState(false)

    const { toast } = useToast()

        const [formData, setFormData] = useState({
          nome: '',
          cognome: '',
          email: '',
          numero: '',
          oggetto: '',
          messaggio: ''
        });
      
        const handleChange = (e : any) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e : any) => {
          e.preventDefault();
          setLoading(true)
      
          try {
            const response = await fetch('/api/sendContattaci', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            if (response.ok) {
              console.log('Email sent successfully!');
              setLoading(false)
              toast({
                description: "Il tuo messaggio è stato inviato con successo!",
              })
            } else {
              console.error('Failed to send email.');
            }
          } catch (error) {
            console.error('Error sending email:', error);
          }
        };


  return (
    <form onSubmit={handleSubmit} method="POST" className="mt-10 mb-14 px-6 flex rounded-2xl py-14 shadow-xl bg-contactBg lg:flex-row flex-col gap-10 backdrop-blur-2xl bg-gray-50/70 lg:px-16">
    <div className="flex flex-col md:gap-5 gap-10 lg:w-2/3" >
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="name">Nome</label>
            <input onChange={handleChange} value={formData.nome} name="nome" required id="name" placeholder="Il tuo nome" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="surname">Cognome</label>
            <input onChange={handleChange} value={formData.cognome} name="cognome" required id="surname" placeholder="Il tuo cognome" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light"  htmlFor="email">Email</label>
            <input onChange={handleChange} type="Email" name="email" value={formData.email} required id="email" className="rounded-2xl border border-gray-400 py-4 px-4 text-black" placeholder="La tua email" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="number">Numero di telefono</label>
            <input onChange={handleChange} value={formData.numero} name="numero" required id="number" placeholder="Il tuo numero di telefono" type="tel" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label className=" ml-4 font-light" htmlFor="object">Oggetto</label>
            <input onChange={handleChange} value={formData.oggetto} name="oggetto" required id="object" placeholder="Oggetto del messaggio" type="text" className="rounded-2xl py-4 px-4 border border-gray-400 text-black" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="message" className="ml-4 font-light">Messaggio</label>
            <textarea onChange={handleChange} value={formData.messaggio} name="messaggio" required id="message" className="rounded-xl border border-gray-400 px-4 py-3 text-black" placeholder="Il tuo messaggio" rows={8} maxLength={1000} />
        </div>
        <div className="flex gap-3 items-center">
            <input onChange={handleChange} required id="checkbox" type="checkbox" value="" className="w-4 h-4 text-c-blue bg-indigo-100 border-c-blue rounded-xl focus:ring-c-blue focus:ring-2" />
            <label htmlFor="checkbox" className="text-[.8rem]">Sono d&apos;accordo con i Termini di utilizzo e l&apos;Informativa sulla privacy.</label>
        </div>
        <button className="bg-c-yellow hover:bg-yellow-500 text-gray-700 duration-300 py-3 rounded-lg">{loading ? <Spinner /> : "Invia"}</button>
    </div>
    <div className="flex items-center justify-center flex-col gap-2 w-full">
        <Image draggable="false" src={contact} alt="contact" height={800} width={800} />
    </div>
</form>
  )
}
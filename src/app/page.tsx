import Image from 'next/image'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Description from '@/components/Description'
import Feed from '@/components/Feed'
import PhotoCarousel from '@/components/PhotoCarousel'
import { headers } from 'next/headers';
import images from "@/components/data/BottlesImages"
import EventImages from "@/components/data/EventImages"


export default function Home() {

  const headersList = headers();

  const domain = headersList.get('host');

  return (
      <section>
        <Hero />
        <Cards />
        <Description />
        <PhotoCarousel className=' mx-auto mt-36 px-8 lg:mt-52' images={images} />
          <h3 className="text-4xl mt-44 lg:mt-56 xl:text-5xl px-1 font-semibold text-gray-900 text-center">Il primo evento Refreesh</h3>
          <PhotoCarousel className='px-8 mx-auto mt-12' images={EventImages} />
        {domain === 'refreesh.it' || domain === 'refreesh.com' || domain === 'www.refreesh.com' || domain === 'www.refreesh.it'? <Feed /> : null}
      </section>
  )
}

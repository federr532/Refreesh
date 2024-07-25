import Image from 'next/image'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Description from '@/components/Description'
import Feed from '@/components/Feed'
import PhotoCarousel from '@/components/PhotoCarousel'
import { headers } from 'next/headers';
import images from "@/components/data/BottlesImages"
import Event from '@/components/Event'


export default function Home() {

  const headersList = headers();

  const domain = headersList.get('host');

  return (
      <section>
        <Hero />
        <Cards />
        <Description />
        <PhotoCarousel className=' mx-auto mt-36 px-8 lg:mt-52' images={images} />
        <Event />
        {domain === 'refreesh.it' || domain === 'refreesh.com' || domain === 'www.refreesh.com' || domain === 'www.refreesh.it'? <Feed /> : null}
      </section>
  )
}

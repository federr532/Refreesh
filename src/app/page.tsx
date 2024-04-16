import Image from 'next/image'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Description from '@/components/Description'
import Feed from '@/components/Feed'
import PhotoCarousel from '@/components/PhotoCarousel'
import { headers } from 'next/headers';



export default function Home() {

  const headersList = headers();

  const domain = headersList.get('host');

  return (
      <section>
        <Hero />
        <Cards />
        <Description />
        <PhotoCarousel />
        {domain === 'refreesh.it' || domain === 'refreesh.com' ? <Feed /> : null}
      </section>
  )
}

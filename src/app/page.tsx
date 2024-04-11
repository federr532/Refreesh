import Image from 'next/image'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Description from '@/components/Description'
import Gallery from '@/components/Gallery'

// #3B82F6 - blue

export default function Home() {
  return (
      <section>
        <Hero />
        <Cards />
        <Description />
        <Gallery />
      </section>
  )
}

import Image from 'next/image'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Description from '@/components/Description'

// #3B82F6 - blue

export default function Home() {
  return (
      <section>
        <Hero />
        <Cards />
        <Description />
      </section>
  )
}

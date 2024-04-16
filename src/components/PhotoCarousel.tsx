import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image'

import freud from "@/../public/Gallery/freud.webp"
import freud2 from "@/../public/Gallery/freud2.webp"
import yellow from "@/../public/Gallery/yellow.webp"
import rial from "@/../public/Gallery/rialAuto1.webp"
import rial2 from "@/../public/Gallery/rialAuto2.webp"
import rial3 from "@/../public/Gallery/rial3.webp"

const images = [
    yellow,
    rial,
    freud,
    freud2,
    rial2,
    rial3,
]

export default function CarouselSpacing() {
  return (
    <Carousel className="max-w-[100rem] mx-auto mt-52">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-3 md:basis-1/2 lg:basis-1/3">
                  <Image src={image} alt="" className="rounded-lg" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ) 
}

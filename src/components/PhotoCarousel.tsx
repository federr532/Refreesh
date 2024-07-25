import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {cn} from "@/lib/utils"

import Image, { StaticImageData } from 'next/image'

type Props = {
  images: StaticImageData[],
  className?: string
}

export default function CarouselSpacing({images,className} : Props) {
  return (
    <Carousel className={cn('max-w-[100rem]', className)}>
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

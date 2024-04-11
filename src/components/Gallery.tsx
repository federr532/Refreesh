import Image from 'next/image'

import freud from "@/../public/Gallery/freud.webp"
import freud2 from "@/../public/Gallery/freud2.webp"
import yellow from "@/../public/Gallery/yellow.webp"
import rial from "@/../public/Gallery/rialAuto1.webp"
import rial2 from "@/../public/Gallery/rialAuto2.webp"
import rial3 from "@/../public/Gallery/rial3.webp"


const ImagesSize = [900, 900]

export default function Gallery() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 mt-40 md:mt-60 px-2 gap-4 max-w-6xl mx-auto">
        <div className="grid gap-4">
        <Image className="h-auto max-w-full rounded-lg" src={yellow} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
        <Image className="h-auto max-w-full rounded-lg" src={freud} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
        <Image className="h-auto max-w-full rounded-lg" src={rial2} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
        </div>
        <div className="grid gap-4">
            <Image className="h-auto max-w-full rounded-lg" src={rial} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
            <Image className="h-auto max-w-full rounded-lg" src={freud2} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
            <Image className="h-auto max-w-full rounded-lg" src={rial3} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
        </div>
    </section>
  )
}

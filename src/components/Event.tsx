import EventImages from './data/EventImages'
import PhotoCarousel from './PhotoCarousel'

export default function Event() {
  return (
    <div className='flex mt-44 lg:mt-56 flex-col gap-14 items-center justify-center'>
        <h3 className="text-4xl xl:text-5xl font-semibold text-gray-900 text-center lg:text-start">Il primo evento Refreesh</h3>
        <PhotoCarousel className='px-8' images={EventImages} />
    </div>
  )
}
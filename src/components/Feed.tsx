import React from 'react'
import Image from 'next/image'
import instagram from '@/../public/instaWhite.svg'
import Link from 'next/link'


async function Feed() {

    const url = await fetch(`https://v1.nocodeapi.com/federr/instagram/${process.env.INSTAGRAM_TOKEN}`, {next : {revalidate: 21600}})
  const data = await url.json()
  const posts = await data.data

  return (
    <section className='text-gray-900 mt-56 px-9 max-w-[110rem] mx-auto md:px-14'>
        <h3 className="text-4xl xl:text-5xl font-semibold text-gray-900 text-center">Instagram Photo Gallery</h3>
        <div className='grid gap-5 grid-cols-1 mt-14 md:grid-cols-3 lg:grid-cols-3'>
        {posts && posts.map((post : any) => {
            return  (
                post.media_type==="IMAGE" || post.media_type === "CAROUSEL_ALBUM" ? <Link href={post.permalink} key={post.id} target='_blank' className='relative group cursor-pointer'>
                    <Image src={instagram} height={50} width={50} alt='instagram' className='opacity-0 group-hover:opacity-100 duration-300 absolute right-3 top-3 z-20' />
                    <Image src={post.media_url} height={500} width={500} alt={post.caption} className='w-full duration-300 group-hover:opacity-60 rounded-lg object-cover h-full'/>
                    </Link> : null
                )
            })}
            </div>
        </section>
  )
}


export default Feed;
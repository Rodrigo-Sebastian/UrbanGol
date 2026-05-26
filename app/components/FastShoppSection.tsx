'use client'
import CardCarousel from "./ui/CardCarousel"
import lag from '@/app/data/lag.json'

const items = lag.map(club => ( {
    id: club.id,
    image: club.cardImage,
    title: club.lag,
    link: `/lag/${club.slug}`,
}))

export default function FastShoppSection() {
  return (
     <div className=" container mx-auto p-4 mt-12">
      <h1 className="text-4xl font-semibold">Fotbollslag</h1>
      <hr className="mt-3 mb-10 w-full text-gray-300"></hr>
      <CardCarousel items={items}/>
    </div>
  )
}

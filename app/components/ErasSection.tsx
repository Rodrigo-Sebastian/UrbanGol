'use client'
import { link } from 'fs'
import CardCarousel from './ui/CardCarousel'
import eras from '../data/eras.json'

const items = eras.map((era => ({
    id: era.id,
    title: era.title,
    image: era.image,
    link: `/era/${era.slug}`
})))


export default function ErasSection() {
  
  return (
    <div className='container mx-auto py-20 p-4'>
        <h1 className="text-4xl font-semibold">Fotbollseror</h1>
        <hr className="mt-3 mb-10 w-full text-gray-300"></hr>
        <CardCarousel items={items} />
    </div>
  )
}

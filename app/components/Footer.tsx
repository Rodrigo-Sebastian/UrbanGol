import React from 'react'
import Acordion from './ui/Acordion'
import FooterInformation from './FooterInformation'

const items = [
  { id: 1, image: "/images/store-1.jpg", paragraf:"Peru", title: "Lima", description: "" },
  { id: 2, image: "/images/store-2.webp", paragraf:"Peru", title: "Cusco", description: "" },
  { id: 3, image: "/images/store-3.webp", paragraf:"Spanien", title: "Madrid", description: "" },
  { id: 4, image: "/images/store-4.jpg", paragraf:"Sverige", title: "Stockholm", description: "" },
  { id: 5, image: "/images/store-5.jpg", paragraf:"USA", title: "New Jersey", description: ""},
]

export default function Footer() {
  return (
    <div className='bg-black pb-5'>
      <div className='relative w-full overflow-hidden h-10 lg:h-175'>
        <video autoPlay muted loop playsInline className='w-full h-full object-cover'>
            <source src="/videos/shirt-store.mp4" type="video/mp4" />
        </video>
        {/* Botten */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black via-black/80 to-transparent" />
          {/* Topp */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-black via-black/80 to-transparent" />
          {/* Vänster */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-linear-to-r from-black via-black/80 to-transparent" />
          {/* Höger */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/4 bg-linear-to-l from-black via-black/80 to-transparent" />
      </div>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center p-6 mb-10'>
                <p className='text-gray-400 uppercase text-lg font-light tracking-wider'>Original kollektion</p>
                <h1 className='text-white uppercase text-2xl lg:text-4xl font-bold tracking-widest'>Våra butiker</h1>
            </div>
            <Acordion items={items} />
        </div>
        <FooterInformation />
    </div>
  )
}

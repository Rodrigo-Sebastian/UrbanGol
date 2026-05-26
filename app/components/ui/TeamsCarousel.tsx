'use client'
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { IconChevronLeft ,IconChevronRight } from '@tabler/icons-react';
import Lag from '@/app/data/lag.json'


export default function LeaguesCarousel() {
    
    const scrollRef = useRef<HTMLDivElement>(null)
    const scroll = (direction: "left" | "right") => {
        if(!scrollRef.current) return
        const scrollAmount = 200

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        })
    }

  return (
  <div className="flex items-center gap-4 w-full">
    
    {/* Vänster knapp */}
    <button 
      onClick={() => scroll("left")}
      className="hidden cursor-pointer md:flex shrink-0 bg-white shadow p-2 rounded-full transiton-all ease-in-out duration-300 hover:bg-black hover:text-white"
    >
      <IconChevronLeft size={30} />
    </button>

    {/* Carousel */}
    <div 
      ref={scrollRef} 
      className="flex-1 flex gap-2 md:gap-10 lg:gap-2 lg:justify-center px-2 py-6 overflow-x-auto md:overflow-hidden scroll-smooth"
    >
      {Lag.map((lag) => ( 
        <Link 
          key={lag.slug} 
          href={`/lag/${lag.slug}`} 
          className="shrink-0 transition-transform duration-300 hover:scale-110"
        >
          <div className="w-20.5 h-10.5 sm:w-30.5 sm:h-22.5 md:w-45.5 md:h-27.5 relative">
            <Image
              src={lag.imageLogo}
              alt={lag.lag}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 20vw, 10vw"
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>

    {/* Höger knapp */}
    <button 
      onClick={() => scroll("right")}
      className="hidden cursor-pointer md:flex shrink-0 bg-white shadow p-2 rounded-full transition-all ease-in-out duration-300 hover:bg-black hover:text-white"
    >
      <IconChevronRight size={30} />
    </button>

  </div>

  )
}

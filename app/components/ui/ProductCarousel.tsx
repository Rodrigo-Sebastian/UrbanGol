'use client'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { CarouselItem } from '../../types/CarouselItem'


type ProductCarouselProps<T extends CarouselItem> = {
  items: T[]
}

export default function ProductCarousel<T extends CarouselItem>({
  items,
}: ProductCarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const firstCard = scrollRef.current.querySelector('div')
    const scrollAmount =
      (firstCard as HTMLElement)?.clientWidth || scrollRef.current.offsetWidth * 0.6

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full">
      {/* Buttons */}
      <div className="flex flex-row items-center bg-gray-100 w-fit">
        <button
          className="cursor-pointer transition-all duration-300 p-2 hover:bg-black"
          onClick={() => scroll('left')}
        >
          <IconChevronLeft className="transition-all duration-300 hover:text-white" />
        </button>
        <button
          className="cursor-pointer transition-all duration-300 p-2 hover:bg-black"
          onClick={() => scroll('right')}
        >
          <IconChevronRight className="transition-all duration-300 hover:text-white" />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 snap-x snap-proximity no-scrollbar pl-[12vw] pr-4"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative border h-fit border-gray-300 shrink-0 snap-start pt-10 w-full md:w-[50%] xl:w-[28%] overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 28vw"
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Overlay */}
            <div className=" inset-0 flex flex-col justify-end gap-3 p-4 bg-linear-to-t from-black via-black/50 to-transparent">
              <h1 className="text-xl text-white font-medium">{item.title}</h1>
              <p className="text-gray-300 text-sm">{item.description}</p>
              <p className="text-xl font-bold text-white">
                ${item.price.toFixed(2)}
              </p>

              <Link
                href={item.link}
                className="text-black text-center w-fit bg-white px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white border border-white"
              >
                Ver mas
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
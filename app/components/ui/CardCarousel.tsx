'use client'
import { IconChevronLeft ,IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type CarouselItem = {
    id: number,
    image: string,
    title: string,
    link: string
}

type CardCarouselProps<T extends CarouselItem> = {
    items: T[],
}

export default function CardCarousel<T extends CarouselItem>({ items }: CardCarouselProps<T>) {

    const scrollRef = useRef<HTMLDivElement>(null)
    const scroll = (direction: 'left' | 'right') => {
        if(!scrollRef.current) return

        const scrollAmount = scrollRef.current.offsetWidth * 0.8

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        })
    }

    return (
    <div className="relative w-full">
        <div className='flex flex-row items-center bg-gray-100 w-fit'>
            <button className='cursor-pointer transition-all ease-in-out duration-300 p-1 hover:bg-black w-full' onClick={() => scroll('left')}>
                <IconChevronLeft size={30} className='transition-all ease-in-out duration-300 hover:text-white' />
            </button>
            <button className='cursor-pointer transition-all ease-in-out duration-300 p-1 hover:bg-black w-full' onClick={() => scroll('right')}>
                <IconChevronRight size={30} className='transition-all ease-in-out duration-300 hover:text-white' />
            </button>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto gap-10 snap-x snap-mandatory no-scrollbar bg-slate-50">
           {items.map((item) => (
            <div key={item.id} className="shrink-0 snap-start w-full sm:w-[45%] md:w-[40%] lg:w-[22%] shadow-md">
                <div className="overflow-hidden relative h-110">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading='lazy'
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 40vw, 22vw"
                     className="object-cover"
                />
                    <div className="absolute inset-0 flex flex-col gap-4 justify-end p-4 bg-linear-to-t from-black/70 via-black/20 to-transparent">
                        <p className="text-2xl text-white font-medium">{item.title}</p>
                        <Link href={item.link} className="text-black text-center w-fit bg-white border border-white px-4 py-2 transition-all ease-in-out duration-300 hover:bg-black hover:text-white hover:border hover:border-white">
                            se mer
                        </Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

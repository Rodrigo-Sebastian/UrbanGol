'use client'
import { useState, useRef } from "react";
import { IconChevronLeft ,IconChevronRight } from '@tabler/icons-react';
import Link from "next/link";
import Image from "next/image";

export type Slide = {
  id: number;
  image: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

type HeroCarouselProps = {
  slides: Slide[];
};

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full shrink-0 relative h-150 lg:h-175"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={slide.id === 0} 
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            {/* Overlay */}
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center pb-24 justify-end md:items-start p-4 sm:p-10 lg:p-20">
              <h2 className="text-white text-2xl text-center md:text-start tracking-wide sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                {slide.title}
              </h2>
              {slide.description && (
                <p className="text-white lg:text-2xl font-bold text-center tracking-wide mb-4 sm:mb-6">{slide.description}</p>
              )}
              {slide.buttonText && slide.buttonLink && (
                <Link
                  href={slide.buttonLink}
                  className="bg-transparent border border-white text-white font-semibold tracking-wide px-4 py-2 sm:px-6 sm:py-3 hover:bg-white hover:text-black transition"
                >
                  {slide.buttonText}
                </Link>
              )}
            </div>
            {/* Overlay shadow längst ner */}
            <div className="absolute bottom-0 left-0 w-full h-52 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-2 rounded-full hover:bg-black/60 transition z-10"
      >
        <IconChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-2 rounded-full hover:bg-black/60 transition z-10"
      >
        <IconChevronRight size={30} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`
              transition-all duration-300
              ${current === index ? "bg-white w-8 h-2 rounded-md" : "bg-white/50 w-2 h-2 rounded-full"}
            `}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
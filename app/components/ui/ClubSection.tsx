import Image from 'next/image'
import { CarouselItem } from '../../types/CarouselItem'
import ProductCarousel from './ProductCarousel'
import Link from 'next/link'

type clubSectionProps = {
  title: string
  description: string
  link: string
  image: string
  bgColor: string
  items: CarouselItem[]
}

export default function ClubSection({
  title,
  description,
  link,
  image,
  bgColor,
  items,
}: clubSectionProps) {
  return (
    <section>
      {/* HERO */}
      <div className={`w-full pt-10 ${bgColor}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl text-white md:text-4xl font-bold">{title}</h2>
            <p className="text-white text-2xl">{description}</p>
            <Link
                href={`/lag/${link}`}
                className="text-black text-center w-fit bg-white px-10 py-2 transition-all duration-300 hover:bg-black hover:text-white border border-white"
              >
                Visita la tienda
              </Link>
          </div>
          <Image
            src={image}
            width={650}
            height={650}
            alt={title}
            className="object-contain"
          />
        </div>
      </div>
      {/* CAROUSEL SECTION */}
      <div className="w-full overflow-hidden">
        <div className="w-full p-4 md:w-full xl:pl-75 py-10">
          <ProductCarousel items={items} />
        </div>
      </div>
    </section>
  )
}
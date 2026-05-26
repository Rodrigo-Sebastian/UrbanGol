import Link from 'next/link'
import Image from 'next/image'
import eras from '@/app/data/eras.json'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import HeroCarousel,  { Slide } from '@/app/components/ui/HeroCarousel'
import TeamsCarousel from "../components/ui/TeamsCarousel";
import LeaguesCarousel from "../components/ui/LeaguesCarousel";

const slides: Slide[] = [
    {
        id: 0,
        title: "La Era de los 90s",
        description: "Descubre las mejores camizetas de los 90, una epoca dorada del futboll.",
        image: "/images/90s-hero.jpg",
        buttonText: "visitar la era",
        buttonLink: "/era/90s"
    },
    {
        id: 1,
        title: "La Era de los 2000",
        description: "Descubre las mejores camizetas de los 2000, una epoca dorada del futboll.",
        image: "/images/00s-hero.jpg",
        buttonText: "visitar la era",
        buttonLink: "/era/00s"
    },
    {
        id: 2,
        title: "La Era de los 2010",
        description: "Descubre las mejores camizetas de los 2010, una epoca dorada del futboll.",
        image: "/images/10s-hero.jpg",
        buttonText: "visitar la era",
        buttonLink: "/era/10s"
    },
    {
        id: 3,
        title: "La Era Actual",
        description: "Descubre las mejores camizetas de la era actual, una epoca dinamica del futboll.",
        image: "/images/20s-hero.jpg",
        buttonText: "visitar la era",
        buttonLink: "/era/modern"
    },

]

export default function ErasPage() {
  return (
    <div>
      {/* Hero */}
      <Breadcrumbs />
      <HeroCarousel slides={slides} />
      {/* Era-kort */}
      <div className="max-w-7xl mx-auto mt-20 px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eras.map(era => (
            <Link
              key={era.slug}
              href={`/era/${era.slug}`}
              className="group relative h-80 rounded-2xl overflow-hidden"
            >
              <Image
                src={era.image}
                alt={era.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                  {era.yearFrom} — {era.yearTo === 2099 ? 'Nu' : era.yearTo}
                </p>
                <h2 className="text-white text-2xl font-bold">{era.title}</h2>
                <p className="text-white/70 text-sm mt-1">{era.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl container mx-auto flex flex-col gap-4 p-4 mt-20">
        <h1 className="text-3xl font-bold">Populäraste Lag</h1>
            <TeamsCarousel />
        </div>
         <div className="max-w-7xl container mx-auto flex flex-col gap-4 p-4 mb-20">
            <h1 className="text-3xl font-bold">Populäraste Ligor</h1>
            <LeaguesCarousel />
        </div>
    </div>
  )
}
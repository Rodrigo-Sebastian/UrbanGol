import HeroCarousel, { Slide } from "./ui/HeroCarousel";


const slides: Slide[] = [
    {id: 0,
        image: "/images/fanatico-celeste-hero.jpg",
        title: "Fanatico Celeste",
        description: "Collección exclusiva del club que nacio campeon del fútbol Peruano",
        buttonText: "Läs mer",
        buttonLink: "/lag/sporting-cristal",
    },
    {id: 1,
        image: "/images/sc-banner-2.png",
        title: "Fanatico Celeste",
        description: "Collección exclusiva del club que nacio campeon del fútbol Peruano",
        buttonText: "Läs mer",
        buttonLink: "/lag/sporting-cristal",
    }
]

export default function ScHero() {
  return (
    <div>
        <HeroCarousel slides={slides} />
    </div>
  )
}

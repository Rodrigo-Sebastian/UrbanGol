import HeroCarousel, { Slide } from "./ui/HeroCarousel";

const slides: Slide[] = [
    {
        id: 0,
        image: "/images/la-liga-carousel.png",
        title: "La Liga",
        description: "Upptäck vår kollektion av tröjor från de bästa lagen i La Liga.",
        buttonText: "Besök butiken",
        buttonLink: "/liga/la-liga",
    },
    {
        id: 1,
        image: "/images/serie-a-carousel.png",
        title: "Serie A",
        description: "Upptäck vår kollektion av tröjor från de bästa lagen i Serie A.",
        buttonText: "Besök butiken",
        buttonLink: "/liga/serie-a",
    },
    {
        id: 2,
        image: "/images/premier-league-carousel.png",
        title: "Premier League",
        description: "Upptäck vår kollektion av tröjor från de bästa lagen i Premier League.",
        buttonText: "Besök butiken",
        buttonLink: "/liga/premier-league",
    },
    {
        id: 3,
        image: "/images/bundes-liga-carousel.png",
        title: "Bundesliga",
        description: "Upptäck vår kollektion av tröjor från de bästa lagen i Bundesliga.",
        buttonText: "Besök butiken",
        buttonLink: "/liga/bundesliga",
    }
]

export default function LagHero() {
  return (
    <div>
        <HeroCarousel slides={slides} />
    </div>
  )
}

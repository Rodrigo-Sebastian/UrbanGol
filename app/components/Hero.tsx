import HeroCarousel, { Slide } from "./ui/HeroCarousel";

const slides: Slide[] = [
  {
    id: 0,
    image: "/images/hero-img-4.jpg",
    title: "Urban Gol, den bästa fotbollsbutiken i Peru",
    description: "Upptäck våra senaste kollektioner och exklusiva erbjudanden",
    buttonText: "Utforska",
    buttonLink: "/urban-gol",
  },
  {
    id: 1,
    image: "/images/fanatico-celeste.jpg",
    title: "Fanatico Celeste",
    description: "Exklusiv kollektion från klubben som föddes som mästare i peruansk fotboll",
    buttonText: "Läs mer",
    buttonLink: "/Celeste",
  },
  {
    id: 2,
    image: "/images/hero-img-3.jpeg",
    title: "Över 1000 fotbollströjor",
    description: "Upptäck våra senaste kollektioner och exklusiva erbjudanden",
    buttonText: "Utforska",
    buttonLink: "/shop",
  },
  {
    id: 3,
    image: "/images/hero-img-2.avif",
    title: "Hitta din perfekta fotbollströja",
    description: "Stötta ditt favoritlag med vårt breda urval av fotbollströjor",
    buttonText: "Utforska",
    buttonLink: "/shop",
  },
];

export default function Home() {
  return (
    <div>
      <HeroCarousel slides={slides} />
    </div>
  );
}
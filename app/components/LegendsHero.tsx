import React from 'react'
import HeroCarousel, {Slide} from './ui/HeroCarousel'

const slides: Slide[] = [
    { id: 0, image: '/images/legendas-rc-cl.jpg', title: 'legendas del Real Madrid', description: 'Los Reyes de la champions league', buttonText: 'ver mas', buttonLink: 'lag/real-madrid' },
    { id: 1, image: '/images/legendas-bc.jpg', title: 'legendas del Barcelona', description: 'Los Mas coperos de la copa del Rey', buttonText: 'ver mas', buttonLink: 'lag/barcelona' },
    { id: 2, image: '/images/legendas-juventus.webp', title: 'legendas de la Juventus', description: 'Los Reyes de Italia', buttonText: 'ver mas', buttonLink: 'lag/juventus' },
    { id: 3, image: '/images/legends-united.avif', title: 'legendas del Manchester United', description: 'Los Red Devils', buttonText: 'ver mas', buttonLink: 'lag/manchester-united' },
    { id: 4, image: '/images/legendas-sc.jpg', title: 'legendas del Sporting Cristal', description: 'El Club mas grande de todo el Perú', buttonText: 'ver mas', buttonLink: 'lag/sporting-cristal' },
]

export default function LegendsHero() {
  return (
    <div>
        <HeroCarousel slides={slides}  />
    </div>
  )
}

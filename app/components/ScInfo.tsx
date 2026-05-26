import React from 'react'
import DropDownAcordion from './ui/DropDownAcordion'
import Image from 'next/image'
import ProductCarousel from './ui/ProductCarousel'
import products from '@/app/data/products.json'
import Link from 'next/link'

const infoItems = [
     {
    title: '¿Quiénes somos?',
    content: 'Somos Fanatico Celeste, una comunidad de fanáticos del Sporting Cristal. Ofrecemos las mejores camisetas deportivas del club más grande del Perú.'
  },
  {
    title: 'Calidad de las camisetas',
    content: 'Todas nuestras camisetas son de alta calidad, fabricadas con materiales premium que garantizan comodidad y durabilidad.'
  },
  {
    title: 'Envíos y devoluciones',
    content: 'Realizamos envíos a todo el Perú y Suecia. El tiempo de entrega es de 3-5 días hábiles. Aceptamos devoluciones dentro de los 14 días.'
  },
  {
    title: 'Contactos y soporte',
    content: 'Puedes contactarnos a través de nuestro correo electrónico info@fanaticocelest.com o por teléfono al +51 123 456 789. Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 a 18:00.'
  }
]

const celesteItems = products
.filter(p => p.lag === "Sporting Cristal")
.map(p => ({
    id: p.id,
    image: p.image,
    title: p.name,
    description: p.info,
    price: p.price,
    link: `/Shop/${p.slug}`,
}))

export default function ScInfo() {
  return (
    <section className=" max-w-7xl mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center justify-evenly mb-16">
            <div className="flex flex-col gap-6 max-w-lg">
                <h1 className="text-4xl font-bold text-sky-300">Fanatico Celeste |</h1>
                <h2 className="text-2xl font-semibold text-gray-800">Somos Fanaticos del Equipo Mas Campeon del Peru!</h2>
                <p className="text-xl text-gray-600">En nuestra comunidad encontraras las mejores ofertas en camisetas deportivas del mas grande del Perú, El Sporting Cristal! tenemos camisetas Retro de todas las epocas!</p>
                <DropDownAcordion items={infoItems} />
            </div>
            <Image src="/images/sc-info-img.png" alt="Imagen de Sporting Cristal" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        {celesteItems.length > 0 ? (
            <div className="flex flex-col gap-4">
                <h2 className="text-6xl font-bold text-sky-300">Nuestra Piel Celeste</h2>
                <Link href="/lag/sporting-cristal" className="w-fit px-4 py-2 text-xl font-light bg-black text-white transition-all ease-in-out duration-300 hover:bg-sky-900">
                    Visita la tienda
                </Link>
                <ProductCarousel items={celesteItems} />
            </div>
        ):(
            <p className="text-gray-500 mt-4">Proximamente mas productos...</p>
        )}
    </section>
  )
}

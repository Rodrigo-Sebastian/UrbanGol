import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import products from "@/app/data/products.json"
import eras from "@/app/data/eras.json"
import Breadcrumbs from "@/app/components/Breadcrumbs"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function EraPage({ params }: Props) {
  const { slug } = await params
  const era = eras.find(e => e.slug === slug)

  if (!era) notFound()

  const eraProducts = products.filter(p =>
    p.yearFrom >= era.yearFrom && p.yearFrom <= era.yearTo
  )

  return (
    <div>
      <div className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mt-4">{era.title}</h1>
          <p className="text-white/70 mt-2">{era.description}</p>
        </div>
      </div>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-gray-500 mb-6">{eraProducts.length} produkter</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eraProducts.map(product => (
            <Link
              key={product.id}
              href={`/Shop/${product.slug}`}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="font-medium text-sm">{product.name}</h2>
                <p className="text-gray-500 text-xs mt-1">{product.seasson}</p>
                <p className="font-bold mt-2">{product.price} kr</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return eras.map(e => ({ slug: e.slug }))
}
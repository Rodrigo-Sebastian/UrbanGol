import { notFound } from "next/navigation"
import Image from "next/image"
import  products from "@/app/data/products.json"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import AddToCartButton from "@/app/components/AddToCartButton"
import DropDownAcordion from "@/app/components/ui/DropDownAcordion"
import ProductImages from "@/app/components/ui/ProductImages"
import RelatedProducts from "@/app/components/ui/RelatedProducts"
import { IconTruck, IconPackage, IconWorld } from '@tabler/icons-react'

interface Props {
    params: Promise<{slug: string}>
} 

export default async function page({ params }: Props) {
    const { slug } = await params
        console.log("slug från params:", slug) // ← lägg till detta tillfälligt

    const product = products.find(p => p.slug === slug)
    console.log("hittad produkt:", product) // ← och detta

    if (!product) {
        notFound()
    }

    const productInfo = [
        { title: 'material & kvalitet',
            content: product.material
        },
        { title: 'Skötselråd',
            content: product.care
        },
         {
            title: 'Storlek & passform',
            content: `Finns i storlekarna ${product.storlek.join(', ').toUpperCase()}. Vi rekommenderar att du väljer din vanliga storlek.`
        },
        {
            title: 'Frakt & retur',
            content: 'Gratis frakt på beställningar över 5 produkter. Leverans inom 3-5 arbetsdagar. Returrätt inom 14 dagar.'
        }
    ]

  return (
    <div className="max-w-7xl mx-auto container p-4">
      <Breadcrumbs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        <ProductImages images={product.images ?? [product.image]} />
        <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <h2 className="text-lg text-gray-500 mb-4">{product.seasson}</h2>
            <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600">{product.description}</p>
            <AddToCartButton product={product} />
            <hr className="my-8" />
            <DropDownAcordion items={productInfo} />
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-2xl mb-20">
        <h1 className="text-2xl font-bold">Frakt & leverans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                <IconTruck size={28} />
                <h3 className="font-bold">Sverige</h3>
                <p className="text-sm text-gray-500">3-5 arbetsdagar. Gratis frakt över 5 produkter.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                <IconPackage size={28} />
                <h3 className="font-bold">Peru</h3>
                <p className="text-sm text-gray-500">3-5 arbetsdagar. Frakt från 49 kr.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                <IconWorld size={28} />
                <h3 className="font-bold">Internationellt</h3>
                <p className="text-sm text-gray-500">7-14 arbetsdagar. Frakt från 99 kr.</p>
            </div>
            </div>
            <section>
                <h2 className="text-xl font-bold mb-3">Spårning</h2>
                <p className="text-gray-600 leading-relaxed">Du får ett spårningsnummer via email när din order skickats. Spåra din leverans direkt på transportörens hemsida.</p>
            </section>
        </div>
      <RelatedProducts currentSlug={product.slug} lag={product.lag} />
    </div>
  )
}

export async function generateStaticParams() {
    return products.map(p => ({ slug: p.slug }))
}


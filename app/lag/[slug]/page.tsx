import { notFound } from "next/navigation"
import products from "@/app/data/products.json"
import lag from "@/app/data/lag.json"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import LagProductsClient from "./LagProductsClient"
import Image from "next/image"

interface Props {
    params: Promise<{ slug: string }>
}

export default async function LagPage({ params }: Props) {
    const { slug } = await params
    const club = lag.find(l => l.lag.toLowerCase().replace(/ /g, '-') === slug)

    if (!club) notFound()

    const clubProducts = products.filter(p => p.lag === club.lag)

    return (
        <div>
            {/* Hero */}
            <div className={`w-full ${club.bgColor}`}>
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-5 md:w-1/2">
                    <h2 className="text-2xl text-white md:text-4xl font-bold">{club.title}</h2>
                    <p className="text-white text-2xl">{club.description}</p>
                </div>
                    <Image 
                        src={club.image}
                        alt={club.title}
                        width={650}
                        height={650}
                        className="object-contain"
                    />
                </div>
            </div>
            <Breadcrumbs />
            {/* Produkter + Filter */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <LagProductsClient products={clubProducts} />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return lag.map(l => ({
        slug: l.lag.toLowerCase().replace(/ /g, '-')
    }))
}
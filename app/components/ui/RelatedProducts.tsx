import Link from "next/link"
import Image from "next/image"
import products from "../../data/products.json"
import ProductCarousel from "./ProductCarousel"
interface Props {
    currentSlug: string
    lag: string
}

export default function RelatedProducts({ currentSlug, lag }: Props) {
    const related = products.filter(p => p.lag === lag && p.slug !== currentSlug)
    .slice(0, 8)
    .map(p => ({
        id: p.id,
        image: p.image,
        title: p.name,
        description: p.info,
        price: p.price,
        link: `/Shop/${p.slug}`
    }))
    if(related.length === 0) return null

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Fler från {lag}</h2>
        <ProductCarousel items={related} />
    </div>
  )
}

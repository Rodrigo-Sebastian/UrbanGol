'use client'

import { useState } from "react"
import { useCart } from "../context/CartContext"

interface Product {
    id: number
    slug: string
    name: string
    image: string
    price: number
    storlek: string[]
    lager: Record<string, number>
}

export default function AddToCartButton({ product }: { product: Product }) {
  
  const [valdStorlek,setValdStorlek] = useState<string | null>(null)
  const [tillagd, setTillagd] = useState(false)
  const { addToCart } = useCart()

    function handleAddToCart()  {
        if (!valdStorlek) return
        addToCart({
            id: product.id,
            slug: product.slug,
            name: product.name,
            image: product.image,
            price: product.price,
            storlek: valdStorlek,
            quantity: 1
        })
        setTillagd(true)
        setTimeout(() => setTillagd(false), 2000)
    }

    return (
    <div className="mt-8 flex flex-col gap-4">
        <div>
            <p>Välj storlek</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {product.storlek.map(s => {
                    const iLager = product.lager[s] > 0
                    return(
                        <button
                            key={s}
                            onClick={() => iLager && setValdStorlek(s)}
                            disabled={!iLager}
                            className={`px-4 py-2 mt-2 rounded-lg border uppercase text-sm font-medium transition-all
                            ${!iLager
                                ? 'border-gray-100 text-gray-300 cursor-not-allowed line-through'
                                : valdStorlek === s
                                ? 'border-black bg-black text-white'
                                : 'border-gray-300 hover:border-black'
                            }`}
                        >
                            {s}
                        </button>
                    )
                })}
            </div>
            {valdStorlek && <p className="mt-4">{product.lager[valdStorlek]}kvar i lager</p>}
        </div>
        <button
            onClick={handleAddToCart}
            disabled={!valdStorlek}
            className={`px-4 py-2 rounded-lg border uppercase text-sm font-medium transition-all
                ${!valdStorlek
                    ? 'border-gray-100 text-gray-300 cursor-not-allowed line-through'
                    : 'border-black bg-black text-white hover:bg-gray-800'
                }`}
        
        >
        {tillagd ? '✓ Tillagd i varukorgen!' : !valdStorlek ? 'Välj en storlek' : 'Lägg i varukorg'}
        </button>
    </div>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from '../data/products.json'

export default function FeaturedProducts() {

    const [product, setProduct] = useState(products[0])

    useEffect(() => {
        const random = products[Math.floor(Math.random() * products.length)]
        setProduct(random)
    }, [])

  return (
    <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Mest populär
        </p>
        <Link href={`/Shop/${product.slug}`} className="group/card">
            <div className="relative h-40 rounded-lg overflow-hidden bg-gray-100 mb-3">
                <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes='20vw'
                    className='object-contain group-hover/card:scale-105 transition-transform duration-300'
                />
            </div>
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">{product.price} kr</p>
        </Link>
    </div>
  )
}

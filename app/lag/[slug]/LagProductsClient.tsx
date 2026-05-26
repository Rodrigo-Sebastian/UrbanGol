'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import FilterSidebar from '@/app/Shop/FilterSidebar'

interface Product {
  id: number
  slug: string
  name: string
  seasson: string
  price: number
  image: string
  lag: string
  liga: string
  color: string[]
  storlek: string[]
  lager: Record<string, number>
  yearFrom: number
}

interface FilterState {
  storlek: string[]
  liga: string[]
  lag: string[]
  color: string[]
}

const ERA_RANGES: Record<string, {from: number, to: number}> = {
  '90s': {from: 1990, to: 1999},
  '00s': {from: 2000, to: 2009},
  '10s': {from: 2010, to: 2019},
  '20s': {from: 2020, to: 2029},
}

export default function LagProductsClient({ products }: { products: Product[] }) {

  const searchParams = useSearchParams()
  const era = searchParams.get('era')

  const [filters, setFilters] = useState<FilterState>({
    storlek: [],
    liga: [],
    lag: [],
    color: [],
  })

  const filtered = products.filter(p => {
    if (era && ERA_RANGES[era]) {
      const { from, to } = ERA_RANGES[era]
      if (p.yearFrom < from || p.yearFrom > to) return false
    }
    if (filters.storlek.length > 0 && !filters.storlek.some(s => p.storlek.includes(s))) return false
    if (filters.liga.length > 0 && !filters.liga.includes(p.liga)) return false
    if (filters.lag.length > 0 && !filters.lag.includes(p.lag)) return false
    if (filters.color.length > 0 && !filters.color.some(c => p.color.map(pc => pc.toLowerCase()).includes(c))) return false
    return true
  })

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <FilterSidebar onFilterChange={setFilters} />
      <div className="flex-1">
         {era && (
          <p className="text-sm text-gray-400 mb-2">
            Filtrerat: {era === '90s' ? '90-talet' : era === '00s' ? '2000-talet' : era === '10s' ? '2010-talet' : 'Modern'}
            <Link href="?" className="ml-2 text-black underline text-xs">Rensa</Link>
          </p>
        )}
        <p className="text-gray-500 mb-6">{filtered.length} produkter</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <Link
              key={product.id}
              href={`/Shop/${product.slug}`}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-54 bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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
        {filtered.length === 0 && (
          <p className="text-gray-400 text-center py-20">Inga produkter matchar ditt filter.</p>
        )}
      </div>
    </div>
  )
}
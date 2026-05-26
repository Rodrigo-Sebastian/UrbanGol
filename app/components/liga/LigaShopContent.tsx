// app/components/liga/LigaShopContent.tsx
'use client'
import { useState } from 'react'
import ProductCard from '@/app/components/ui/ProductCard'
import LigaFilterSidebar from './LigaFilterSidebar'

interface Product {
  id: number
  slug: string
  lag: string
  liga: string
  color: string[]
  name: string
  seasson: string
  description: string
  price: number
  image: string
  storlek: string[]
  lager: Record<string, number>
}

interface FilterState {
  storlek: string[]
  lag: string[]
  color: string[]
  pris: string[]
}

interface Props {
  products: Product[]
  liga: string
  lag: string[]
}

export default function LigaShopContent({ products, liga, lag }: Props) {
  const [filters, setFilters] = useState<FilterState>({
    storlek: [],
    lag: [],
    color: [],
    pris: [],
  })

  const filtered = products.filter(p => {
    if (filters.storlek.length > 0) {
      if (!filters.storlek.some(s => p.storlek.includes(s))) return false
    }
    if (filters.lag.length > 0 && !filters.lag.includes(p.lag)) return false
    if (filters.color.length > 0) {
      if (!filters.color.some(c => p.color.includes(c))) return false
    }
    if (filters.pris.length > 0) {
      const pris = p.price
      const matcher = filters.pris.some(range => {
        if (range === '0-500') return pris <= 500
        if (range === '500-1000') return pris > 500 && pris <= 1000
        if (range === '1000+') return pris > 1000
        return false
      })
      if (!matcher) return false
    }
    return true
  })

  return (
    <div className='flex flex-col lg:flex-row gap-8 mt-6'>
      <LigaFilterSidebar
        lag={lag}
        onFilterChange={setFilters}
      />

      <div className='flex-1'>
        <p className='text-sm text-gray-500 mb-4'>
          {filtered.length} {filtered.length === 1 ? 'produkt' : 'produkter'} i {liga}
        </p>

        {filtered.length === 0 ? (
          <div className='text-center py-16'>
            <p className='text-gray-400'>Inga produkter matchar ditt filter.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
'use client'
import ProductCard from "@/app/components/ui/ProductCard"
import { useState } from "react"
import FilterSidebar from "../FilterSidebar"
import products from "../../data/products.json"
import Image from "next/image"

interface FilterState {
  storlek: string[]
  liga: string[]
  lag: string[]
  color: string[]
}

export default function ShopContent() {
  const [filters, setFilters] = useState<FilterState>({
    storlek: [],
    liga: [],
    lag: [],
    color: [],
  })

  const filtered = products.filter(p => {
    if (filters.storlek.length > 0) {
      const harStorlek = filters.storlek.some(s => p.storlek.includes(s))
      if (!harStorlek) return false
    }
    if (filters.liga.length > 0 && !filters.liga.includes(p.liga)) return false
    if (filters.lag.length > 0 && !filters.lag.includes(p.lag)) return false
    if (filters.color.length > 0) {
      const harColor = filters.color.some(c => p.color.map(pc => pc.toLowerCase()).includes(c.toLowerCase()))
      if (!harColor) return false
    }
    return true
  })

  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      <FilterSidebar onFilterChange={setFilters} />

      <div className='flex-1'>

        <p className='text-sm text-gray-500 mb-4'>
          {filtered.length} {filtered.length === 1 ? 'produkt' : 'produkter'}
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
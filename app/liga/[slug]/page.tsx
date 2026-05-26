// app/liga/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ligor from '@/app/data/ligor.json'
import products from '@/app/data/products.json'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import LigaShopContent from '@/app/components/liga/LigaShopContent'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function LigaPage({ params }: Props) {
  const { slug } = await params
  const liga = ligor.find(l => l.slug === slug)

  if (!liga) notFound()

  const ligaProdukter = products.filter(p => p.liga === liga.name)

  return (
    <div>
      {/* Banner */}
      <div className={`${liga.color} w-full`}>
        <div className='max-w-7xl mx-auto px-4 pt-10 md:pt-0 flex flex-col md:flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='flex flex-col gap-4'>
            <p className='text-white/70 uppercase tracking-widest text-sm'>{liga.land}</p>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>{liga.name}</h1>
            <p className='text-white/80 max-w-md'>{liga.description}</p>
            <p className='text-white font-medium'>{ligaProdukter.length} tröjor tillgängliga</p>
          </div>
          <div className='relative w-full h-64 md:w-150 md:h-90 bg-white shrink-0'>
            <Image
              src={liga.image}
              alt={liga.name}
              fill
               priority
               sizes="(max-width: 768px) 100vw, 50vw"
              className='object-cover'
            />
          </div>
        </div>
      </div>

      {/* Shop med filter */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <Breadcrumbs />
        <LigaShopContent products={ligaProdukter} liga={liga.name} lag={liga.lag} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return ligor.map(l => ({ slug: l.slug }))
}
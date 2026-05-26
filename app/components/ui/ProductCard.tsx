import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    id: number;
    slug: string;
    lag: string;
    name: string;
    seasson: string;
    description: string;
    price: number;
    image: string;
    storlek:string[];
    lager: Record<string, number>;
} 

export default function ProductCard({ product} : { product: ProductCardProps }) {
    const harLager = Object.values(product.lager).some(antal => antal > 0);
  return (
     <Link href={`/Shop/${product.slug}`}>
      <div className="group flex flex-col items-center rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        
        {/* Bild */}
        <div className="relative w-64 h-64 bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover p-6 group-hover:scale-105 transition-transform duration-300"
          />
          {!harLager && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Slutsålt
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-sm text-gray-500">{product.lag}</p>
          <h3 className="font-semibold text-gray-900 mt-1">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.seasson}</p>

          {/* Storlekar */}
          <div className="flex gap-1 mt-2">
            {product.storlek.map(s => {
              const iLager = product.lager[s] > 0
              return (
                <span
                  key={s}
                  className={`text-xs px-2 py-1 rounded border uppercase ${
                    iLager
                      ? 'border-gray-300 text-gray-700'
                      : 'border-gray-100 text-gray-300 line-through'
                  }`}
                >
                  {s}
                </span>
              )
            })}
          </div>

          {/* Pris */}
          <p className="mt-3 font-bold text-lg">{product.price} kr</p>
        </div>

      </div>
    </Link>
  )
}

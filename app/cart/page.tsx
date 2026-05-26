// app/cart/page.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IconTrash, IconMinus, IconPlus } from '@tabler/icons-react'
import { useCart } from '@/app/context/CartContext'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export default function CartPage() {
  const { cart, removeFromCart, totalItems, totalPrice, addToCart, decreaseQuantity } = useCart()

  if (cart.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-16 text-center'>
        <Breadcrumbs />
        <h1 className='text-3xl font-bold mt-8 mb-4'>Din varukorg är tom</h1>
        <p className='text-gray-500 mb-8'>Du har inga produkter i varukorgen än.</p>
        <Link
          href='/shop'
          className='inline-block bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors'
        >
          Fortsätt handla
        </Link>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <Breadcrumbs />
      <h1 className='text-3xl font-bold mt-6 mb-8'>
        Varukorg ({totalItems} {totalItems === 1 ? 'produkt' : 'produkter'})
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

        {/* Vänster — Produktlista */}
        <div className='lg:col-span-2 flex flex-col gap-4'>
          {cart.map(item => (
            <div
              key={`${item.id}-${item.storlek}`}
              className='flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm'
            >
              {/* Bild */}
              <div className='relative w-28 h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0'>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Info */}
              <div className='flex-1 flex flex-col justify-between'>
                <div>
                  <h2 className='font-semibold'>{item.name}</h2>
                  <p className='text-sm text-gray-500 uppercase mt-1'>
                    Storlek: {item.storlek}
                  </p>
                </div>

                {/* Antal-väljare */}
                <div className='flex items-center gap-3 mt-2'>
                  <button
                    onClick={() => decreaseQuantity(item.id, item.storlek)}
                    className='p-1.5 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors'
                  >
                    <IconMinus size={14} />
                  </button>
                  <span className='text-sm font-medium w-4 text-center'>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => addToCart({ ...item })}
                    className='p-1.5 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors'
                  >
                    <IconPlus size={14} />
                  </button>
                </div>
              </div>

              {/* Pris + Ta bort */}
              <div className='flex flex-col items-end justify-between shrink-0'>
                <button
                  onClick={() => removeFromCart(item.id, item.storlek)}
                  className='p-1.5 rounded-lg hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors'
                >
                  <IconTrash size={18} />
                </button>
                <p className='font-bold'>{item.price * item.quantity} kr</p>
              </div>
            </div>
          ))}
        </div>

        {/* Höger — Ordersammanfattning */}
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-8'>
            <h2 className='font-bold text-lg mb-4'>Ordersammanfattning</h2>

            <div className='flex flex-col gap-2 text-sm'>
              <div className='flex justify-between'>
                <p className='text-gray-500'>Delsumma</p>
                <p>{totalPrice} kr</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-500'>Frakt</p>
                <p className='text-green-500'>Gratis</p>
              </div>
              <div className='border-t border-gray-100 mt-2 pt-2 flex justify-between font-bold text-base'>
                <p>Totalt</p>
                <p>{totalPrice} kr</p>
              </div>
            </div>

            <button className='mt-6 w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors'>
              Gå till betalning
            </button>

            <Link
              href='/Shop'
              className='mt-3 block text-center text-sm text-gray-500 hover:text-black transition-colors'
            >
              ← Fortsätt handla
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
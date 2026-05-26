'use client'
import { IconShoppingCart, IconSettings, IconTrash, IconUser, IconLogin } from '@tabler/icons-react'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { useState, useRef } from 'react'

export default function UserNav() {
  const { totalItems, totalPrice, cart, removeFromCart } = useCart()
  const [hoverCart, setHoverCart] = useState(false)
  const [hoverUser, setHoverUser] = useState(false)
  const cartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const userTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleCartEnter() {
    if (cartTimeoutRef.current) clearTimeout(cartTimeoutRef.current)
    setHoverCart(true)
  }
  function handleCartLeave() {
    cartTimeoutRef.current = setTimeout(() => setHoverCart(false), 150)
  }

  function handleUserEnter() {
    if (userTimeoutRef.current) clearTimeout(userTimeoutRef.current)
    setHoverUser(true)
  }
  function handleUserLeave() {
    userTimeoutRef.current = setTimeout(() => setHoverUser(false), 150)
  }

  const { isSignedIn } = useUser()

  return (
    <div className='flex flex-row items-center gap-4'>

      {/* Användare */}
      {!isSignedIn ? (
        <div
          className='relative z-20'
          onMouseEnter={handleUserEnter}
          onMouseLeave={handleUserLeave}
        >
          <button className='hover:text-gray-500 transition-colors cursor-pointer'>
            <IconUser size={28} stroke={1.5} />
          </button>

          {hoverUser && (
            <>
              <div className='absolute right-0 top-full h-3 w-full' />
              <div className='absolute right-0 top-12 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden'>
                <div className='px-4 py-3 border-b border-gray-100'>
                  <p className='text-xs text-gray-400'>Inte inloggad</p>
                </div>
                <div className='p-3'>
                  <SignInButton mode="modal">
                    <button className='w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'>
                      <IconLogin size={16} />
                      Logga in
                    </button>
                  </SignInButton>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label='Mitt konto'
              labelIcon={<IconSettings size={16} />}
              href='/account'
            />
          </UserButton.MenuItems>
        </UserButton>
      )}

      {/* Kundvagn */}
      <div
        className='relative z-20'
        onMouseEnter={handleCartEnter}
        onMouseLeave={handleCartLeave}
      >
        <Link href="/cart" className='cursor-pointer'>
          <div className='relative w-8 h-8 hover:text-gray-500 transition-colors cursor-pointer'>
            <IconShoppingCart size={32} stroke={1} />
            {totalItems > 0 && (
              <span className='absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium'>
                {totalItems}
              </span>
            )}
          </div>
        </Link>
        {hoverCart && (
          <>
            <div className='absolute right-0 top-full h-3 w-full' />
            <div className='absolute right-0 top-full mt-6.5 w-80 bg-white rounded-md shadow-2xl border border-gray-100 overflow-hidden'>
              <div className='px-4 py-3 border-b border-gray-100'>
                <p className='font-semibold text-sm'>
                  Varukorg ({totalItems} {totalItems === 1 ? 'produkt' : 'produkter'})
                </p>
              </div>
              <div className='max-h-72 overflow-y-auto'>
                {cart.length === 0 ? (
                  <p className='text-sm text-gray-400 text-center py-8'>Din varukorg är tom</p>
                ) : (
                  cart.map(item => (
                    <div key={`${item.id}-${item.storlek}`} className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors'>
                      <div className='relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0'>
                        <Image src={item.image} alt={item.name} fill sizes='65px' className='object-cover' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium truncate'>{item.name}</p>
                        <p className='text-xs text-gray-500 uppercase mt-0.5'>Storlek: {item.storlek} · Antal: {item.quantity}</p>
                        <p className='text-sm font-semibold mt-1'>{item.price * item.quantity} kr</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.storlek)}
                        className='shrink-0 p-1.5 rounded-lg hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors'
                      >
                        <IconTrash size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className='border-t border-gray-100 px-4 py-3'>
                  <div className='flex justify-between items-center mb-3'>
                    <p className='text-sm text-gray-500'>Totalt</p>
                    <p className='font-bold'>{totalPrice} kr</p>
                  </div>
                  <Link href="/cart" className='block w-full bg-black text-white text-sm text-center font-medium py-3 rounded-xl hover:bg-gray-800 transition-colors'>
                    Gå till kassan
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
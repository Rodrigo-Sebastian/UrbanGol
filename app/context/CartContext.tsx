'use client'
import React, { createContext, useContext, useState} from 'react'

interface CartItem {
    id: number
    slug: string
    name: string
    image: string
    price: number
    storlek: string
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number, storlek: string) => void
    decreaseQuantity: (id: number, storlek: string) => void  // ← ny
    totalItems: number
    totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children}: { children: React.ReactNode}) {
    const [cart, setCart] = useState<CartItem[]>([])

    function addToCart(item: CartItem){
        setCart(prev => {
            const finns = prev.find(p => p.id === item.id && p.storlek === item.storlek)
            if(finns) {
                return prev.map(p => p.id === item.id && p.storlek === item.storlek ? {...p, quantity: p.quantity + 1} : p)

            }
            return [...prev, { ...item, quantity: 1 }]
        })
    }

    function decreaseQuantity(id: number, storlek: string) {
        setCart(prev => {
        const produkt = prev.find(p => p.id === id && p.storlek === storlek)
        // Om quantity är 1 → ta bort helt
        if (produkt && produkt.quantity === 1) {
            return prev.filter(p => !(p.id === id && p.storlek === storlek))
        }
        // Annars minska med 1
        return prev.map(p =>
            p.id === id && p.storlek === storlek
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        })
    }

    function removeFromCart(id: number, storlek: string) {
        setCart(prev => prev.filter(p => !(p.id === id && p.storlek === storlek)))
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart måste användas inom en CartProvider")
    return context
}

'use client'

import { IconSearch, IconX } from "@tabler/icons-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import products from "../data/products.json"

export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const results = query.length > 1
        ? products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.liga.toLowerCase().includes(query.toLowerCase()) ||
            p.lag.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6)
        : []

    // Stäng dropdown när man klickar utanför
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false)
                setQuery("")
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    function handleSelected(slug: string) {
        setOpen(false)
        setQuery("")
        router.push(`/Shop/${slug}`)
    }

    return (
        <div ref={wrapperRef} className="relative w-full">

            {/* Sökfält */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 w-full">
                <IconSearch size={18} className="text-gray-400 shrink-0" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Sök tröja, lag eller liga..."
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                        setOpen(true)
                    }}
                    onFocus={() => setOpen(true)}
                    className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                />
                {query.length > 0 && (
                    <button onClick={() => { setQuery(""); setOpen(false) }}>
                        <IconX size={16} className="text-gray-400 hover:text-black transition-colors" />
                    </button>
                )}
            </div>

            {/* Dropdown */}
            {open && query.length > 1 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                    {results.length > 0 ? (
                        <ul>
                            {results.map(p => (
                                <li key={p.id}>
                                    <button
                                        onClick={() => handleSelected(p.slug)}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                                    >
                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                            <Image src={p.image} alt={p.name} fill className="object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{p.name}</p>
                                            <p className="text-xs text-gray-400">{p.lag} · {p.price} kr</p>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400 text-center py-8">
                            Inga produkter hittades för "{query}"
                        </p>
                    )}
                </div>
            )}

        </div>
    )
}
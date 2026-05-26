'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { IconX, IconChevronDown } from "@tabler/icons-react"
import lag from '@/app/data/lag.json'
import ligor from '@/app/data/ligor.json'
import eras from '@/app/data/eras.json'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const close = () => setIsOpen(false)
  const toggleDropdown = (menu: string) => setOpenMenu(openMenu === menu ? null : menu)

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10"
      >
        <span className="h-0.5 w-6 bg-black"></span>
        <span className="h-0.5 w-8 bg-black"></span>
        <span className="h-0.5 w-4 bg-black"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div onClick={close} className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link href="/" onClick={close}>
            <Image src="/images/UrbanGol-logo.png" alt="UrbanGol" width={60} height={60} />
          </Link>
          <button onClick={close} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IconX size={20} />
          </button>
        </div>

        {/* Innehåll */}
        <div className="flex flex-col">

          {/* Inicio */}
          <Link
            href="/"
            onClick={close}
            className="px-6 py-4 text-sm font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            Inicio
          </Link>

          {/* Urban Gol */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleDropdown("urban")}
              className="flex justify-between items-center w-full px-6 py-4 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Urban Gol
              <IconChevronDown size={16} className={`transition-transform duration-200 ${openMenu === "urban" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openMenu === "urban" ? "max-h-screen" : "max-h-0"}`}>
              <div className="bg-gray-50 flex flex-col">

                <p className="px-8 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Kategorier</p>
                <Link href="/lag" onClick={close} className="px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors">⭐ Equipos</Link>
                <Link href="/Shop" onClick={close} className="px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors">👕 Nya tröjor</Link>
                {eras.map(era => (
                  <Link key={era.slug} href={`/era/${era.slug}`} onClick={close} className="px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors">
                    🏆 {era.title}
                  </Link>
                ))}

                <p className="px-8 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Lag</p>
                {lag.map(club => (
                  <Link key={club.slug} href={`/lag/${club.slug}`} onClick={close} className="px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors">
                    {club.lag}
                  </Link>
                ))}

                <p className="px-8 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Ligor</p>
                {ligor.map(liga => (
                  <Link key={liga.slug} href={`/liga/${liga.slug}`} onClick={close} className="px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors">
                    {liga.name}
                  </Link>
                ))}
                <div className="h-4" />
              </div>
            </div>
          </div>

          {/* Fanatico Celeste */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleDropdown("celeste")}
              className="flex justify-between items-center w-full px-6 py-4 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Fanatico Celeste
              <IconChevronDown size={16} className={`transition-transform duration-200 ${openMenu === "celeste" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openMenu === "celeste" ? "max-h-screen" : "max-h-0"}`}>
              <div className="bg-blue-50 flex flex-col">
                <p className="px-8 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">Tröjor per era</p>
                <Link href="/lag/sporting-cristal?era=90s" onClick={close} className="px-8 py-2.5 text-sm hover:bg-blue-100 transition-colors">🏆 90-talet</Link>
                <Link href="/lag/sporting-cristal?era=00s" onClick={close} className="px-8 py-2.5 text-sm hover:bg-blue-100 transition-colors">🏆 2000-talet</Link>
                <Link href="/lag/sporting-cristal" onClick={close} className="px-8 py-2.5 text-sm hover:bg-blue-100 transition-colors">🔥 Senaste</Link>
                <Link href="/Shop" onClick={close} className="px-8 py-2.5 text-sm hover:bg-blue-100 transition-colors">👕 Shop</Link>
                <div className="h-4" />
              </div>
            </div>
          </div>

          {/* Legends */}
          <Link href="/Legends" onClick={close} className="px-6 py-4 text-sm font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors">
            Legends
          </Link>

          {/* Contacto */}
          <Link href="/kontakt" onClick={close} className="px-6 py-4 text-sm font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors">
            Contacto
          </Link>

        </div>

        {/* Footer i drawer */}
        <div className="px-6 py-6 mt-auto border-t border-gray-100">
          <p className="text-xs text-gray-400">© 2026 Urban Gol</p>
        </div>

      </div>
    </>
  )
}
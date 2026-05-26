import { IconBallFootball, IconCreditCardHand, IconMailbox, IconTruckReturn, IconBook, IconShirt, IconFlame } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import UserNav from './UserNav'
import MobileNav from './MobileNav'
import SearchBar from './SearchBar'
import ligor from '@/app/data/ligor.json'
import lag from '@/app/data/lag.json'
import eras from '@/app/data/eras.json'
import FeaturedProducts from './FeaturedProducts'

export default function Nav() {
  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-gray-100'>

      {/* Topbar */}
      <div className='bg-black text-white'>
        <p className='max-w-7xl p-2 tracking-widest font-light mx-auto text-xs text-center'>
          Grattis Leverans vid kö av | 5 produkter
        </p>
      </div>

      {/* Övre rad — Logo + Search + Ikoner */}
      <div className='max-w-7xl px-6 py-4 mx-auto flex flex-row items-center justify-between gap-8'>
        
        {/* Logo */}
        <Link href="/" className='shrink-0'>
          <Image src="/images/UrbanGol-logo.png" alt="UrbanGol logo" width={100} height={100} />
        </Link>

        {/* Sökfält — tar upp mellanrummet */}
        <div className='flex-1 hidden md:block'>
          <SearchBar />
        </div>

        {/* Höger ikoner */}
        <div className='flex flex-row items-center gap-4'>
          <UserNav />
          <MobileNav />
        </div>

      </div>
      <div className='lg:hidden px-4 pb-3 border-b border-gray-100'>
      <SearchBar />
    </div>
      {/* Undre rad — Kategorilänkar */}
      <div className='border-t border-gray-100 hidden lg:block'>
        <div className='max-w-7xl px-6 mx-auto'>
          <ul className='flex flex-row items-center gap-0 text-xl font-medium'>

            {/* Hem */}
            <li>
              <Link href="/" className='px-4 py-3 inline-block hover:bg-gray-50 transition-colors'>
                Hem
              </Link>
            </li>

            {/* Urban Gol mega menu */}
            <li className='relative group'>
              <button className='px-4 py-3 inline-flex items-center gap-1 hover:bg-gray-50 transition-colors cursor-pointer'>
                Urban Gol
                <svg className='w-3 h-3 transition-transform duration-200 group-hover:rotate-180' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>

              <div className='fixed left-0 right-0 bg-white border-t border-gray-100 shadow-xl
                opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50'>
                <div className='max-w-7xl mx-auto px-6 py-8'>
                  <div className='grid grid-cols-4 gap-8'>

                    {/* Kolumn 1 — Kategorier */}
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4'>Kategorier</p>
                      <ul className='flex flex-col gap-3'>
                        <li>
                          <Link href="/lag" className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                            <IconShirt size={16} />
                            Equipos
                          </Link>
                        </li>
                        <li>
                          <Link href="/Shop" className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                            <IconShirt size={16} />
                            Nya tröjor
                          </Link>
                        </li>
                        {eras.map(era => (
                          <li key={era.slug}>
                            <Link href={`/era/${era.slug}`} className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                              <IconBallFootball size={16} className='text-gray-700' />
                              {era.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kolumn 2 — Lag */}
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4'>Lag</p>
                      <ul className='flex flex-col gap-3'>
                        {lag.map(club => (
                          <li key={club.slug}>
                            <Link href={`/lag/${club.slug}`} className='text-sm hover:text-gray-500 transition-colors'>
                              {club.lag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kolumn 3 — Ligor */}
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4'>Ligor</p>
                      <ul className='flex flex-col gap-3'>
                        {ligor.map(liga => (
                          <li key={liga.slug}>
                            <Link href={`/liga/${liga.slug}`} className='text-sm hover:text-gray-500 transition-colors'>
                              {liga.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kolumn 4 — Utvald produkt */}
                    <FeaturedProducts />
                  </div>
                </div>
              </div>
            </li>
            {/* Fanatico Celeste mega menu */}
            <li className='relative group'>
              <button className='px-4 py-3 inline-flex items-center gap-1 hover:bg-gray-50 transition-colors cursor-pointer'>
                Fanatico Celeste
                <svg className='w-3 h-3 transition-transform duration-200 group-hover:rotate-180' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              <div className='fixed left-0 right-0 bg-white border-t border-gray-100 shadow-xl
                opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50'>
                <div className='max-w-7xl mx-auto px-6 py-8'>
                  <div className='grid grid-cols-3 gap-8'>

                    <div>
                      <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4'>Tröjor per era</p>
                      <ul className='flex flex-col gap-3'>
                        <li>
                          <Link href="/lag/sporting-cristal?era=90s" className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                            <IconBallFootball size={16} className='text-gray-700' />
                            90-talet
                          </Link>
                        </li>
                        <li>
                          <Link href="/lag/sporting-cristal?era=00s" className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                            <IconBallFootball size={16} className='text-gray-700' />
                            2000-talet
                          </Link>
                        </li>
                        <li>
                          <Link href="/lag/sporting-cristal" className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                            <IconFlame size={16} className='text-gray-700' />
                            Senaste
                          </Link>
                        </li>
                        <li>
                          <Link href="/lag/sporting-cristal" className='flex items-center gap-2 text-sm hover:text-gray-500 transition-colors'>
                            <IconShirt size={16} className='text-gray-700' />
                            Shop
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='col-span-2 bg-blue-50 rounded-2xl p-6 flex items-center gap-6'>
                      <Image src="/images/sporting-cristal.png" alt="Sporting Cristal" width={80} height={80} className='object-contain' />
                      <div>
                        <p className='font-bold text-lg'>Sporting Cristal</p>
                        <p className='text-sm text-gray-500 mt-1'>Upptäck alla tröjor och merchandise för den sanna fansen.</p>
                        <Link
                          href="https://market.joinnus.com/Sporting%20Cristal%20-%20OUTLET%20CELESTE?store=749"
                          className='inline-block mt-3 bg-black text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors'
                        >
                          Se kollektion →
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            {/* Kontakta oss dropdown */}
<li className='relative group'>
  <button className='px-4 py-3 inline-flex items-center gap-1 hover:bg-gray-50 transition-colors cursor-pointer'>
    Kontakta oss
    <svg className='w-3 h-3 transition-transform duration-200 group-hover:rotate-180' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
    </svg>
  </button>

  <div className='absolute left-0 top-full mt-0 w-52 bg-white border border-gray-100 shadow-xl
    opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out
    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 overflow-hidden'>
    <ul className='flex flex-col py-2'>
      <li>
        <Link href="/kontakt" className='flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors'>
          <IconMailbox size={16} />
          Kontakt & Support
        </Link>
      </li>
      <li>
        <Link href="/betalning" className='flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors'>
          <IconCreditCardHand size={16} />
          Betalningsalternativ
        </Link>
      </li>
      <li>
        <Link href="/var-historia" className='flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors'>
          <IconBook size={16} />
          Vår historia
        </Link>
      </li>
      <li>
        <Link href="/returer" className='flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition-colors'>
          <IconTruckReturn size={16} />
          Returer
        </Link>
      </li>
    </ul>
  </div>
</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
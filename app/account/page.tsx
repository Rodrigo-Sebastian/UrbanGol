// app/account/page.tsx
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import { IconPackage, IconHeart, IconMapPin, IconSettings } from '@tabler/icons-react'

export default async function AccountPage() {
  const user = await currentUser()

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>

      {/* Profilhuvud */}
      <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6'>
        <div className='flex items-center gap-4'>
          {user?.imageUrl && (
            <Image
              src={user.imageUrl}
              alt='Profilbild'
              width={72}
              height={72}
              className='rounded-full'
            />
          )}
          <div>
            <h1 className='text-2xl font-bold'>
              {user?.firstName} {user?.lastName}
            </h1>
            <p className='text-gray-500 text-sm mt-1'>
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
      </div>

      {/* Snabblänkar */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
        {[
          { icon: IconPackage, label: 'Mina ordrar', href: '#ordrar', count: 0 },
          { icon: IconHeart, label: 'Önskelista', href: '#onskelista', count: 0 },
          { icon: IconMapPin, label: 'Adresser', href: '#adresser', count: 0 },
          { icon: IconSettings, label: 'Inställningar', href: '#installningar', count: null },
        ].map(item => (
          <Link
            key={item.label}
            href={item.href}
            className='bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow'
          >
            <item.icon size={24} className='text-gray-600' />
            <p className='text-sm font-medium'>{item.label}</p>
            {item.count !== null && (
              <p className='text-xs text-gray-400'>{item.count} st</p>
            )}
          </Link>
        ))}
      </div>

      {/* Ordrar */}
      <div id='ordrar' className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6'>
        <h2 className='font-bold text-lg mb-4 flex items-center gap-2'>
          <IconPackage size={20} />
          Mina ordrar
        </h2>
        <div className='text-center py-12'>
          <p className='text-gray-400 text-sm'>Du har inga ordrar än.</p>
          <Link
            href='/Shop'
            className='inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors'
          >
            Börja handla
          </Link>
        </div>
      </div>

      {/* Önskelista */}
      <div id='onskelista' className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6'>
        <h2 className='font-bold text-lg mb-4 flex items-center gap-2'>
          <IconHeart size={20} />
          Önskelista
        </h2>
        <div className='text-center py-12'>
          <p className='text-gray-400 text-sm'>Din önskelista är tom.</p>
          <Link
            href='/Shop'
            className='inline-block mt-4 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors'
          >
            Hitta tröjor
          </Link>
        </div>
      </div>

      {/* Adresser */}
      <div id='adresser' className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6'>
        <h2 className='font-bold text-lg mb-4 flex items-center gap-2'>
          <IconMapPin size={20} />
          Sparade adresser
        </h2>
        <div className='text-center py-12'>
          <p className='text-gray-400 text-sm'>Du har inga sparade adresser.</p>
          <button className='inline-block mt-4 border border-gray-200 px-6 py-3 rounded-xl text-sm font-medium hover:border-black transition-colors'>
            + Lägg till adress
          </button>
        </div>
      </div>

    </div>
  )
}
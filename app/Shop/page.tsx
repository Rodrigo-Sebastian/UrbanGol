import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ShopContent from './[slug]/ShopContent'


export default function page() {
  return (
    <div>
        <Breadcrumbs />
      <div className='max-w-7xl mx-auto container p-4'>
        <h1 className='mb-10 text-2xl font-semibold'>De bästa tröjorna i världen</h1>
        <ShopContent />
      </div>
    </div>
  )
}

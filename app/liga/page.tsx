import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import LagHero from '../components/LagHero'
import TeamsCarousel from '../components/ui/TeamsCarousel'
import LeaguesCarousel from '../components/ui/LeaguesCarousel'
import LegendsPorductsSection from '../components/LegendsPorductsSection'

export default function page() {
  return (
    <div>
        <LagHero />
        <Breadcrumbs />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <h2 className='text-2xl font-bold mb-4'>Top Lag</h2>
            <TeamsCarousel />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <h2 className='text-2xl font-bold mb-4'>Top Ligor</h2>
            <LeaguesCarousel />
        </div>
        <LegendsPorductsSection />
    </div>
  )
}

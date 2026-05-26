'use client'
import { useState } from 'react'
import { IconChevronDown, IconChevronUp, IconX, IconAdjustments } from '@tabler/icons-react'

interface FilterState {
  storlek: string[]
  liga: string[]
  lag: string[]
  color: string[]
}

interface Props {
  onFilterChange: (filters: FilterState) => void
}

const STORLEKAR = ['s', 'm', 'l', 'xl']
const LIGOR = ['La Liga', 'Premier League', 'Serie A', 'Bundesliga', 'Ligue 1']
const LAG = ['Barcelona', 'Real Madrid', 'Manchester United', 'Liverpool', 'Juventus', 'Bayern München', 'PSG', 'Lyon']
const FARGER = ['blå', 'röd', 'vit', 'svart', 'grön', 'gul']

export default function FilterSidebar({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<FilterState>({
    storlek: [],
    liga: [],
    lag: [],
    color: [],
  })
  const [open, setOpen] = useState({
    storlek: true,
    liga: true,
    lag: true,
    color: true,
  })
  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggle(category: keyof FilterState, value: string) {
    const updated = {
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter(v => v !== value)
        : [...filters[category], value],
    }
    setFilters(updated)
    onFilterChange(updated)
  }

  function toggleSection(section: keyof typeof open) {
    setOpen(prev => ({ ...prev, [section]: !prev[section] }))
  }

  function clearAll() {
    const empty = { storlek: [], liga: [], lag: [], color: [] }
    setFilters(empty)
    onFilterChange(empty)
  }

  const hasActiveFilters = Object.values(filters).some(f => f.length > 0)
  const totalActive = Object.values(filters).reduce((sum, f) => sum + f.length, 0)

  const filterContent = (
    <div className='flex flex-col h-full'>

      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-bold text-base'>Filter</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className='text-xs text-gray-400 hover:text-black transition-colors'
          >
            Rensa alla
          </button>
        )}
      </div>

      {/* Storlek */}
      <FilterSection title='Storlek' isOpen={open.storlek} onToggle={() => toggleSection('storlek')}>
        <div className='flex flex-wrap gap-2'>
          {STORLEKAR.map(s => (
            <button
              key={s}
              onClick={() => toggle('storlek', s)}
              className={`px-3 py-1.5 rounded-lg border text-sm uppercase font-medium transition-all
                ${filters.storlek.includes(s)
                  ? 'bg-black text-white border-black'
                  : 'border-gray-200 hover:border-black'
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      <Divider />

      {/* Liga */}
      <FilterSection title='Liga' isOpen={open.liga} onToggle={() => toggleSection('liga')}>
        {LIGOR.map(l => (
          <CheckboxItem key={l} label={l} checked={filters.liga.includes(l)} onChange={() => toggle('liga', l)} />
        ))}
      </FilterSection>

      <Divider />

      {/* Lag */}
      <FilterSection title='Lag' isOpen={open.lag} onToggle={() => toggleSection('lag')}>
        {LAG.map(l => (
          <CheckboxItem key={l} label={l} checked={filters.lag.includes(l)} onChange={() => toggle('lag', l)} />
        ))}
      </FilterSection>

      <Divider />

      {/* Färg */}
      <FilterSection title='Färg' isOpen={open.color} onToggle={() => toggleSection('color')}>
        <div className='flex flex-wrap gap-2'>
          {FARGER.map(f => (
            <button
              key={f}
              onClick={() => toggle('color', f)}
              className={`px-3 py-1.5 rounded-lg border text-sm capitalize transition-all
                ${filters.color.includes(f)
                  ? 'bg-black text-white border-black'
                  : 'border-gray-200 hover:border-black'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </FilterSection>

    </div>
  )

  return (
    <>
      {/* Mobile — filterknapp */}
      <div className='lg:hidden'>
        <button
          onClick={() => setDrawerOpen(true)}
          className='flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:border-black transition-colors'
        >
          <IconAdjustments size={18} />
          Filter
          {totalActive > 0 && (
            <span className='bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
              {totalActive}
            </span>
          )}
        </button>
      </div>

      {/* Mobile — overlay */}
      {drawerOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm'
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile — drawer */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out
          ${drawerOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Drag-indikator */}
        <div className='flex justify-center pt-3 pb-1'>
          <div className='w-10 h-1 bg-gray-200 rounded-full' />
        </div>

        {/* Stäng-knapp */}
        <div className='flex justify-between items-center px-5 py-3 border-b border-gray-100'>
          <h2 className='font-bold'>Filter</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className='p-1.5 rounded-lg hover:bg-gray-100 transition-colors'
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Innehåll */}
        <div className='px-5 py-4 overflow-y-auto max-h-[70vh]'>
          {filterContent}
        </div>

        {/* Visa resultat-knapp */}
        <div className='px-5 py-4 border-t border-gray-100'>
          <button
            onClick={() => setDrawerOpen(false)}
            className='w-full bg-black text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors'
          >
            Visa resultat
          </button>
        </div>
      </div>

      {/* Desktop — vanlig sidebar */}
      <aside className='hidden lg:block w-64 shrink-0'>
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-5'>
          {filterContent}
        </div>
      </aside>
    </>
  )
}

// Hjälpkomponenter
function FilterSection({ title, isOpen, onToggle, children }: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className='py-3'>
      <button onClick={onToggle} className='flex justify-between items-center w-full mb-3'>
        <span className='font-medium text-sm'>{title}</span>
        {isOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
      </button>
      {isOpen && <div className='flex flex-col gap-2'>{children}</div>}
    </div>
  )
}

function CheckboxItem({ label, checked, onChange }: {
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label className='flex items-center gap-2 cursor-pointer group'>
      <div
        onClick={onChange}
        className={`w-4 h-4 rounded border flex items-center justify-center transition-all
          ${checked ? 'bg-black border-black' : 'border-gray-300 group-hover:border-black'}`}
      >
        {checked && (
          <svg className='w-2.5 h-2.5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
          </svg>
        )}
      </div>
      <span className='text-sm text-gray-700 group-hover:text-black transition-colors'>{label}</span>
    </label>
  )
}

function Divider() {
  return <div className='border-t border-gray-100' />
}
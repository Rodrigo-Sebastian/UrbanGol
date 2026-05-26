'use client'
import { useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'

type DropDownItem = {
    title: string;
    content: string;
}

export default function DropDownAcordion({items}: {items: DropDownItem[]}) {
    const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divided-gray-200">
        {items.map((item, index) => (
            <div key={index} className="py-4">
                <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="flex justify-between items-center w-full text-left"
                >
                    <span className="font-medium text-base">{item.title}</span>
                    <IconChevronDown size={18}
                        className={`shrink-0 transition-transform duration-200 ${open === index ? 'rotate-180' : ''}`} 
                    />
                </button>
                {open === index && (
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.content}</p>
                )}
            </div>
        ))}
    </div>
  )
}

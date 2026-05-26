'use client'
import React from 'react'
import Image from 'next/image'

type AcordionItem = {
    id: number;
    paragraf: string;
    title: string;
    image: string;
    description?: string;
}

export default function Acordion( {items}: {items:AcordionItem[]}) {
  return (
     <div className="flex w-full h-150 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="
            group relative flex-1 
            transition-all duration-500 ease-in-out 
            hover:flex-[0_0_40%]
          "
        >
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
          {/* 🔥 Hover overlay (gradient för text) */}
          <div className="
            absolute inset-0 
            bg-linear-to-t 
            from-black/80 via-black/50 to-transparent
            opacity-0 group-hover:opacity-100
            transition-all duration-300
          " />
            {/* 🔹 Vertical text (default) */}
            <div className="
                absolute z-10 
                text-white tracking-widest
                transition-all duration-300
                group-hover:opacity-0
                rotate-90 mt-120 text-2xl font-bold
            ">
                {item.title}
            </div>
            {/* 🔸 Hover content */}
            <div className="
                absolute z-10 text-white text-start px-8
                opacity-0 group-hover:opacity-100
                transition-all duration-300 mt-120
            ">
                <h1 className='font-semibold tracking-wider'>{item.paragraf}</h1>
                <div className='flex flex-row items-center gap-2'>
                    <span className='block w-2 h-6 bg-green-400'></span>
                    <h3 className="lg:text-4xl font-bold">{item.title}</h3>
                </div>
                <p className="text-sm mb-20">{item.description}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

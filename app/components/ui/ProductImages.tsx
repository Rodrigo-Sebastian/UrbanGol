'use client'
import {useState} from 'react'
import Image from 'next/image'

export default function ProductImages({ images }: { images: string[] })  {
    const [selected, setSelected] = useState(0)

    return(
        <div className="flex flex-col gap-4">
            <div className="relative h-100 border-border-gray-100 rounded-2xl overflow-hidden">
                <Image 
                    src={images[selected]}
                    alt="Produktbild"
                    fill
                    className="object-contain transition-opacity duration-300"
                    priority
                />
            </div>
            <div className="flex justify-center gap-4">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`relative h-24 w-24 border-2 rounded-xl overflow-hidden ${selected === index ? 'border-black' : 'border-gray-200 hover:border-gray-400'}`}
                    >
                        <Image 
                            src={img}
                            alt={`Bild ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </button>
                )
            
            )}
            </div>
        </div>
    )
}
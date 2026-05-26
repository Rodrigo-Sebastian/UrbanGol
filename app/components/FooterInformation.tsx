import React from 'react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok,   } from '@tabler/icons-react';
import Link from 'next/link';
import { title } from 'process';

const FooterItems = [
    {id: 1, icon: <IconBrandFacebook size={34} />, link: "https://www.facebook.com/urbangol"},
    {id: 2, icon: <IconBrandInstagram size={34} />, link: "https://www.instagram.com/urbangol/"},
    {id: 3, icon: <IconBrandTiktok size={34} />, link: "https://www.tiktok.com/@urbangol"},
]

const FooterLinks = [
    {id: 1,
        title:"Kontakt & Support",
        links: [
            {label: "FAQ & Kontakt", url: "/kontakt"},
            {label: "Returer", url: "/returer"},
            {label: "Frakt & Leverans", url: "/returer"}
        ]
    },
    {
        id: 2,
        title:"Om Urban Gol",
        links: [
            {label: "Vår Historia", url: "/var-historia"},
            {label: "Hållbarhet", url: "/var-historia"},
        ]
    },
    {
        id: 3,
        title:"Kundservice",
        links: [
            {label: "Storleksguide", url: "/betalning"},
            {label: "Betalningsalternativ", url: "/betalning"},
            {label: "Returer & Byten", url: "/betalning"},
        ]
    }
]


export default function FooterInformation() {
  return (
    <footer>
        <div className="max-w-7xl mx-auto container p-4 mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {FooterLinks.map(section => (
                    <div key={section.id} className="flex flex-col items-start space-x-4">
                    <h3 className="md:text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul>
                        {section.links.map(link => (
                            <li key={link.label} className="mb-2">
                                <Link href={link.url} className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                ))}
                <div>
                    <h1 className="md:text-2xl font-bold text-white mb-4">Sociala medier</h1>
                    {FooterItems.map(item => (
                            <Link key={item.id} href={item.link} className="text-gray-400  hover:text-gray-200 inline-block mr-4 transition-colors duration-300">
                                {item.icon}
                            </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-row justify-between p-4 mt-10">
            <h1 className="text-white text-xs md:text-sm">© 2026 Urban Gol. Alla rättigheter reserverade.</h1>
            <h2 className="text-white text-xs md:text-sm">Designad och utvecklad av Rodrigo Sebasitan</h2>
        </div>
    </footer>
  )
}

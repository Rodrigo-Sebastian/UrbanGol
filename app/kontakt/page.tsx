import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconMail, IconPhone, IconMapPin, IconClock } from '@tabler/icons-react'
import Link from 'next/link'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ContactForm from '@/app/components/ContactForm'

const socialItems = [
    { id: 1, icon: <IconBrandFacebook size={24} />, link: "https://www.facebook.com/urbangol", label: "Facebook" },
    { id: 2, icon: <IconBrandInstagram size={24} />, link: "https://www.instagram.com/urbangol/", label: "Instagram" },
    { id: 3, icon: <IconBrandTiktok size={24} />, link: "https://www.tiktok.com/@urbangol", label: "TikTok" },
]

const faqItems = [
    { question: "Hur lång är leveranstiden?", answer: "Leverans inom 3-5 arbetsdagar i Sverige och Peru." },
    { question: "Kan jag returnera en produkt?", answer: "Ja, du har 14 dagars returrätt från mottagningsdatum." },
    { question: "Vilka betalningsmetoder accepterar ni?", answer: "Vi accepterar kort, Swish och Klarna." },
    { question: "Är tröjorna officiella?", answer: "Vi säljer både officiella kit och högkvalitativa replicas — detta anges tydligt på varje produkt." },
]

export default function KontaktPage() {
    return (
        <div>
            {/* Hero */}
                    <Breadcrumbs />
            <div className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-bold text-white mt-6">Kontakt</h1>
                    <p className="text-white/70 mt-3 text-lg">Vi finns för att hjälpa dig — kontakta oss när som helst.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Vänster — Info */}
                    <div className="flex flex-col gap-10">

                        {/* Kontaktinfo */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Kontaktuppgifter</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <IconMail size={20} />
                                    <span>info@urbangol.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <IconPhone size={20} />
                                    <span>+51 123 456 789</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <IconMapPin size={20} />
                                    <span>Lima, Peru & Stockholm, Sverige</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <IconClock size={20} />
                                    <span>Mån–Fre: 09:00–18:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Sociala medier */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Följ oss</h2>
                            <div className="flex gap-4 flex-wrap">
                                {socialItems.map(item => (
                                    <Link
                                        key={item.id}
                                        href={item.link}
                                        target="_blank"
                                        className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                                    >
                                        {item.icon}
                                        <span className="text-sm">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Vanliga frågor</h2>
                            <div className="flex flex-col divide-y divide-gray-200">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="py-4">
                                        <h3 className="font-medium mb-2">{item.question}</h3>
                                        <p className="text-sm text-gray-500">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Höger — Formulär */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Skicka ett meddelande</h2>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    )
}
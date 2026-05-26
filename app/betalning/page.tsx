import InfoPage from '@/app/components/InfoPage'
import { IconCreditCard, IconDeviceMobile, IconShieldCheck } from '@tabler/icons-react'
import Link from 'next/link'

const sizes = [
    { size: 'S', chest: '86-91', waist: '71-76', height: '165-170' },
    { size: 'M', chest: '96-101', waist: '81-86', height: '170-175' },
    { size: 'L', chest: '106-111', waist: '91-96', height: '175-180' },
    { size: 'XL', chest: '116-121', waist: '101-106', height: '180-185' },
]

export default function BetalningPage() {
    return (
        <InfoPage title="Betalningsalternativ" subtitle="Säkra och smidiga betalningssätt">
            <div className="flex flex-col md:flex-row justify-between gap-16 ">
                <div className="flex flex-col gap-8 max-w-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                            <IconCreditCard size={28} />
                            <h3 className="font-bold">Kort</h3>
                            <p className="text-sm text-gray-500">Visa, Mastercard och American Express accepteras.</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                            <IconDeviceMobile size={28} />
                            <h3 className="font-bold">Swish</h3>
                            <p className="text-sm text-gray-500">Snabb och enkel betalning via Swish.</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                            <IconShieldCheck size={28} />
                            <h3 className="font-bold">Klarna</h3>
                            <p className="text-sm text-gray-500">Köp nu, betala senare med Klarna.</p>
                        </div>
                    </div>
                    <section>
                        <h2 className="text-xl font-bold mb-3">Säker betalning</h2>
                        <p className="text-gray-600 leading-relaxed">Alla betalningar är krypterade och säkra. Vi lagrar aldrig kortuppgifter.</p>
                    </section>
                </div>
                 <div className="flex flex-col gap-8 max-w-2xl">
                <section>
                    <h2 className="text-xl font-bold mb-3">Byte av storlek</h2>
                    <p className="text-gray-600 leading-relaxed">Beställde du fel storlek? Kontakta oss så hjälper vi dig med ett byte. Byten sker kostnadsfritt inom 14 dagar.</p>
                </section>
                <section>
                    <h2 className="text-xl font-bold mb-3">Retur av produkt</h2>
                    <p className="text-gray-600 leading-relaxed">Varan ska vara oanvänd och i originalförpackning. Se vår returpolicy för mer information.</p>
                    <Link href="/returer" className="inline-block mt-4 text-sm underline hover:text-gray-500 transition-colors">
                        Läs mer om returer →
                    </Link>
                </section>
                <section>
                    <h2 className="text-xl font-bold mb-3">Kontakta oss</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">Har du frågor om retur eller byte? Vi hjälper dig gärna.</p>
                    <Link href="/kontakt" className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors">
                        Kontakta oss →
                    </Link>
                </section>
                </div>
            </div>
            <div className="flex flex-col gap-8 max-w-2xl mt-10">
                <h1 className="text-2xl font-bold">Storleksguide</h1>
                <p className="text-gray-600">Mät ditt bröst, midja och längd och jämför med tabellen nedan.</p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 font-semibold">Bröst (cm)</th>
                                <th className="text-left py-3 font-semibold">Midja (cm)</th>
                                <th className="text-left py-3 font-semibold">Längd (cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sizes.map(row => (
                                <tr key={row.size} className="border-b border-gray-100">
                                    <td className="py-3 font-bold">{row.size}</td>
                                    <td className="py-3 text-gray-600">{row.chest}</td>
                                    <td className="py-3 text-gray-600">{row.waist}</td>
                                    <td className="py-3 text-gray-600">{row.height}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-400">Tips — om du är mellan två storlekar rekommenderar vi att du väljer den större.</p>
            </div>
        </InfoPage>
    )
}
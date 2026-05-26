import InfoPage from '@/app/components/InfoPage'
import { IconTruck, IconPackage, IconWorld } from '@tabler/icons-react'

export default function ReturerPage() {
    return (
        <InfoPage title="Returer / Frakt & leverans" subtitle="Enkel och smidig returprocess">
            <div className="flex flex-col md:flex-col lg:flex-row gap-16">
                <div className="flex flex-col gap-8 max-w-2xl">
                    <section>
                        <h2 className="text-xl font-bold mb-3">Returpolicy</h2>
                        <p className="text-gray-600 leading-relaxed">Du har 14 dagars returrätt från det datum du mottog din beställning. Varan ska vara oanvänd och i originalförpackning.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold mb-3">Hur returnerar jag?</h2>
                        <ol className="flex flex-col gap-2 text-gray-600">
                            <li className="flex gap-2"><span className="font-bold">1.</span> Kontakta oss på info@urbangol.com</li>
                            <li className="flex gap-2"><span className="font-bold">2.</span> Ange ordernummer och anledning till retur</li>
                            <li className="flex gap-2"><span className="font-bold">3.</span> Vi skickar en returlabel</li>
                            <li className="flex gap-2"><span className="font-bold">4.</span> Skicka paketet inom 7 dagar</li>
                        </ol>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold mb-3">Återbetalning</h2>
                        <p className="text-gray-600 leading-relaxed">Återbetalning sker inom 5-10 arbetsdagar efter att vi mottagit returen.</p>
                    </section>
                </div>
                <div className="flex flex-col gap-8 max-w-2xl">
                    <h1 className="text-2xl font-bold">Frakt & leverans</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                            <IconTruck size={28} />
                            <h3 className="font-bold">Sverige</h3>
                            <p className="text-sm text-gray-500">3-5 arbetsdagar. Gratis frakt över 5 produkter.</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                            <IconPackage size={28} />
                            <h3 className="font-bold">Peru</h3>
                            <p className="text-sm text-gray-500">3-5 arbetsdagar. Frakt från 49 kr.</p>
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                            <IconWorld size={28} />
                            <h3 className="font-bold">Internationellt</h3>
                            <p className="text-sm text-gray-500">7-14 arbetsdagar. Frakt från 99 kr.</p>
                        </div>
                    </div>
                    <section>
                        <h2 className="text-xl font-bold mb-3">Spårning</h2>
                        <p className="text-gray-600 leading-relaxed">Du får ett spårningsnummer via email när din order skickats. Spåra din leverans direkt på transportörens hemsida.</p>
                    </section>
                </div>
            </div>
        </InfoPage>
        
    )
}
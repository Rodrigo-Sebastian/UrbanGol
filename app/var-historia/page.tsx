import InfoPage from '@/app/components/InfoPage'
import { IconLeaf, IconRecycle, IconHeart } from '@tabler/icons-react'

export default function HistoriaPage() {
    return (
        <InfoPage title="Vår Historia" subtitle="Från Lima till Stockholm — en passion för fotboll">
            <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-8 max-w-2xl">
                    <p className="text-gray-600 leading-relaxed text-lg">Urban Gol grundades av fotbollsfantaster med rötter i Peru och Sverige. Vår mission är att förena kulturer genom fotbollens universella språk.</p>
                    <section>
                        <h2 className="text-xl font-bold mb-3">Hur det började</h2>
                        <p className="text-gray-600 leading-relaxed">Det började som en liten samling vintage-tröjor och grew into en fullständig e-handel med hundratals tröjor från världens bästa lag.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold mb-3">Vår vision</h2>
                        <p className="text-gray-600 leading-relaxed">Vi vill bli Latinamerikas och Skandinaviens ledande destination för fotbollstrojor — från klassiska vintage-kit till de senaste säsongernas officiella kit.</p>
                    </section>
                </div>
                <div className="flex flex-col gap-8 max-w-2xl">
                    <h1 className="text-2xl font-bold">Hållbarhet</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                        <IconLeaf size={28} className="text-green-500" />
                        <h3 className="font-bold">Miljövänliga material</h3>
                        <p className="text-sm text-gray-500">Vi prioriterar leverantörer med hållbara tillverkningsprocesser.</p>
                    </div>
                    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                        <IconRecycle size={28} className="text-green-500" />
                        <h3 className="font-bold">Återvinning</h3>
                        <p className="text-sm text-gray-500">Våra förpackningar är 100% återvinningsbara.</p>
                    </div>
                    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                        <IconHeart size={28} className="text-green-500" />
                        <h3 className="font-bold">Socialt ansvar</h3>
                        <p className="text-sm text-gray-500">Vi stödjer lokala fotbollsklubbar i Lima och Stockholm.</p>
                    </div>
                </div>
            </div>
            </div>
        </InfoPage>
    )
}
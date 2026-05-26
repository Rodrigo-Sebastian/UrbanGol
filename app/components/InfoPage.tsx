import Breadcrumbs from '@/app/components/Breadcrumbs'

type InfoPageProps = {
    title: string,
    subtitle: string,
    children: React.ReactNode
}

export default function InfoPage({ title, subtitle, children,}: InfoPageProps) {
  return (
    <div>
      <Breadcrumbs />
      <div className="w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl md:text-5xl font-bold text-white mt-6">{title}</h1>
          <p className="text-white/70 mt-3 text-lg">{subtitle}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {children}
      </div>
    </div>
  )
}

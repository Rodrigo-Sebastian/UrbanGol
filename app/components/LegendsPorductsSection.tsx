import ClubSection from './ui/ClubSection'
import products from '@/app/data/products.json'
import lag from '@/app/data/lag.json'

export default function LegendsPorductsSection() {
  return (
    <div>
        {lag.map((club) => {
            const items = products
            .filter((p) => p.lag === club.lag)
            .map((p) => ({
                id: p.id,
                image: p.image,
                title: p.name,
                description: p.info,
                price: p.price,
                link: `/Shop/${p.slug}`,
            }))
       return (
            <ClubSection  
                key={club.lag}
                title={club.title}
                description={club.description}
                image={club.image}
                bgColor={club.bgColor}
                items={items}
                link={club.slug}
            />
            )
        })}
    </div>
  )
}

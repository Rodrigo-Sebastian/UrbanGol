import Breadcrumbs from "../components/Breadcrumbs";
import TeamsCarousel from "../components/ui/TeamsCarousel";
import LeaguesCarousel from "../components/ui/LeaguesCarousel";
import LegendsPorductsSection from "../components/LegendsPorductsSection";
import LagHero from "../components/LagHero";

export default function page() {
  return (
    <div>
      <Breadcrumbs />
      <LagHero />
      <div className="max-w-7xl container mx-auto flex flex-col gap-4 p-4 mt-20">
        <h1 className="text-3xl font-bold">Populäraste Lag</h1>
        <TeamsCarousel />
      </div>
      <div className="max-w-7xl container mx-auto flex flex-col gap-4 p-4 mb-20">
        <h1 className="text-3xl font-bold">Populäraste Ligor</h1>
        <LeaguesCarousel />
      </div>
        <LegendsPorductsSection />
    </div>
  )
}

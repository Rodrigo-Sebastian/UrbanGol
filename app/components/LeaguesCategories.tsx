import LeaguesCarousel from "./ui/LeaguesCarousel";



export default function LeaguesCategories() {
  return (
    <div className="container mx-auto my-20 p-4">
        <h1 className="text-4xl font-semibold">Ligas</h1>
        <hr className="mt-3 mb-10 w-full text-gray-300"></hr>
        <LeaguesCarousel />
    </div>
  )
}

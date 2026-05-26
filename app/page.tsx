import FastShoppSection from "./components/FastShoppSection";
import Hero from "./components/Hero";
import LeaguesCategories from "./components/LeaguesCategories";
import ErasSection from "./components/ErasSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FastShoppSection />
      <LeaguesCategories />
      <ErasSection />
    </div>
  );
}

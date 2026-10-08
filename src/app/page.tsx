import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Highlights from "@/components/sections/Highlights";
import Itinerary from "@/components/sections/Itinerary";
import Inclusions from "@/components/sections/Inclusions";
import Upgrades from "@/components/sections/Upgrades";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      <Highlights />
      <Itinerary />
      <Inclusions />
      <Upgrades />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

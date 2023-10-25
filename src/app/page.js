import Image from "next/image";
import Hero from "./Components/Hero";
import GridSection from "./Components/GridSection";
import Testimonials from "./Components/Testimonials";
import BottomGrid from "./Components/BottomGrid";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen h-screen w-full top-0">
      <Hero />
      <GridSection />
      <Testimonials />
      <BottomGrid />
      <Footer />
    </main>
  );
}

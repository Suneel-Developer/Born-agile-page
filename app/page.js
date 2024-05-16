import Hero from "./components/Hero";
import Training from "./components/Training";
import Mission from "./components/Mission";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Innovation from "./components/Innovation";

export default function Home() {
  return (
    <main>
      <Hero />
      <Training />
      <Mission />
      <Pricing />
      <Innovation />
      <Footer />
    </main>
  );
}

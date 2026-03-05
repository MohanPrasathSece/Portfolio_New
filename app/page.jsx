import Balance from "./components/Balance";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeMade from "./components/HomeMade";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { TechStack } from "./components/TechStack";
import { LogoCarousel } from "./components/LogoCarousel";
import ScrollAnimations from "./components/ScrollAnimations";
import Ticker from "./components/Ticker";

export default function Home() {
  return (
    <main className="font-mona">
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <div className="my-20">
        <Ticker />
      </div>
      <HomeMade />
      <TechStack />
      <Balance />
      <Services />
      <LogoCarousel />
      <Footer />
      {/* <div className="h-dvh"></div> */}
    </main>
  );
}

import Balance from "./components/Balance";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeMade from "./components/HomeMade";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { TechStack } from "./components/TechStack";
import { LogoCarousel } from "./components/LogoCarousel";

export default function Home() {
  return (
    <main className="font-mona">
      <Navbar />
      <Hero />
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

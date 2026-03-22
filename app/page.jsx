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
      <section id="hero" aria-label="Mohan Prasath - Hero Introduction">
        <Hero />
      </section>
      <div className="my-20">
        <Ticker />
      </div>
      <section id="about" aria-label="About Mohan Prasath's Work">
        <HomeMade />
      </section>
      <section id="skills" aria-label="Mohan Prasath Tech Stack and Skills">
        <TechStack />
      </section>
      <section id="projects" aria-label="Mohan Prasath Portfolio Projects">
        <Balance />
      </section>
      <section id="services" aria-label="Services offered by Mohan Prasath">
        <Services />
      </section>
      <section id="brands" aria-label="Brands empowered by Mohan Prasath">
        <LogoCarousel />
      </section>
      <Footer />
    </main>
  );
}

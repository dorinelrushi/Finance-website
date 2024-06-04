import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "./Components/HeroSection/HeroSection";
import RowColumn from "./Components/rowColumn/RowColumn";
import Contact from "./Components/Contact/Contact";
import Finance from "./Components/Finance/Finance";
import Testimonials from "./Components/Testimonials/Testimonials";
import Strategic from "./Components/Strategic/Strategic";
import Optimize from "./Components/Optimize/Optimize";
import ContactMe from "./Components/ContactMe/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RowColumn />
      <Contact />
      <Finance />
      <Testimonials />
      <Strategic />
      <Optimize />
      <ContactMe />
    </main>
  );
}

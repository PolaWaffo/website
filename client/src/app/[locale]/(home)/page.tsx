import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesSection from "./__components/Service";
import HeroSection from "./__components/Hero";
import ChoisirSection from "./__components/Choisir";
import RealizationsSection from "./__components/Realisation";
import Testimonies from "./__components/Testimonies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechSprint | Solutions Numériques sur Mesure",
  description: "TechSprint accompagne les TPE, PME et particuliers dans leur transformation digitale grâce à des solutions web modernes, accessibles et personnalisées.",
};

export default function Home() {
 

  return (
    <div className="min-h-screen flex flex-col   ">
      {/* En-tête du site */}

      <Navbar />

      {/* Contenu principal */}
      <main>
      <HeroSection/>
      <ServicesSection/>
      <ChoisirSection/>
      <RealizationsSection/>
      <Testimonies/>

      </main>
      <Footer />
    </div>
  );
}

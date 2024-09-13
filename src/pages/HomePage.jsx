import { Helmet, HelmetProvider } from "react-helmet-async"
import Hero from "../sections/Hero"
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | Početna</title>
      </Helmet>
      <Navbar/>
      <main>
        <Hero />
        <Intro />
        <Services />
      </main>
      <Cta/>
      <Footer/>
    </HelmetProvider>
  );
}

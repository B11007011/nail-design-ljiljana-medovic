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
        <meta name="description" content="Dobrodošli u naš kutak lepote i elegancije u srcu Niša. Posvetite se nezi u našem salonu gde je vaša lepota naš prioritet."/>
        <meta property="og:image" content="https://naildesign-ljiljanamedovic.com/og-image-home.webp"/>
        <meta property="og:title" content="Nail Design Ljiljana Medović | Početna"/>
        <meta property="og:description" content="Dobrodošli u naš kutak lepote i elegancije u srcu Niša. Posvetite se nezi u našem salonu gde je vaša lepota naš prioritet."/>
        <meta property="og:url" content="https://naildesign-ljiljanamedovic.com"/>
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

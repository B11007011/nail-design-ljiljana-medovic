import { Helmet, HelmetProvider } from "react-helmet-async"
import Hero from "../sections/Hero"
import Intro from "../sections/Intro"
import Services from "../sections/Services"

export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | Home</title>
        <meta
          name="description"
          content="Welcome to NM Photography portfolio. Discover breathtaking images and explore the artistry behind each shot."
        />
      </Helmet>

      <main>
        <Hero />
        <Intro />
        <Services />
      </main>
    </HelmetProvider>
  );
}

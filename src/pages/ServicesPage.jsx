import Services from "../sections/Services";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  
  return (
    <HelmetProvider>
      <Helmet>
      <title>Nail Design Ljiljana Medović | Usluge</title>
      <meta name="description" content="Istražite širok spektar profesionalnih usluga u našem salonu, uključujući manikir, trajnu šminku i još mnogo toga."/>
      <meta property="og:title" content="Nail Design Ljiljana Medović | Usluge" />
      <meta property="og:description" content="Istražite širok spektar profesionalnih usluga u našem salonu, uključujući manikir, trajnu šminku i još mnogo toga." />
      <meta property="og:url" content="https://naildesign-ljiljanamedovic.com/usluge" />
      </Helmet>
      <Navbar/>
    <main>
    <BreadCrumb page="Usluge"/>
      <Services showTitle={false}/>
    </main>
    <Cta/>
    <Footer/>
    </HelmetProvider>
  );
}

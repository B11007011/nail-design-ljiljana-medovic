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
      </Helmet>
      <Navbar/>
    <BreadCrumb page="Usluge"/>
    <main>
      <Services showTitle={false}/>
    </main>
    <Cta/>
    <Footer/>
    </HelmetProvider>
  );
}

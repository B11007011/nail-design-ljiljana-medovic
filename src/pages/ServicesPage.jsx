import Services from "../sections/Services";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";

export default function ServicesPage() {
  
  return (
    <>
    <BreadCrumb page="Usluge"/>
    <main>
      <Services showTitle={false}/>
    </main>
    <Cta/>
    <Footer/>
    </>
  );
}

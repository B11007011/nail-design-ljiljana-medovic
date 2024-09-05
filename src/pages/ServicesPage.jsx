import Services from "../sections/Services";
import BreadCrumb from "../components/BreadCrumb";

export default function ServicesPage() {
  
  return (
    <>
    <BreadCrumb page="Usluge"/>
    <main>
      <Services showTitle={false}/>
    </main>
    </>
  );
}

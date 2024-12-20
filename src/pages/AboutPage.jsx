import BreadCrumb from "../components/BreadCrumb"
import { aboutSection } from "../data"
import Footer from "../components/Footer"
import Cta from "../sections/Cta"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | O Nama</title>
        <meta name="description" content="Saznajte više o nama i našoj posvećenosti nezi noktiju i lepoti."/>
        <meta property="og:title" content="Nail Design Ljiljana Medović | O Nama" />
        <meta property="og:description" content="Saznajte više o nama i našoj posvećenosti nezi noktiju i lepoti." />
        <meta property="og:url" content="https://naildesign-ljiljanamedovic.com/o-nama" />
      </Helmet>
      <Navbar/>
      <main>
      <BreadCrumb page="O nama" />
        <section>
          <div className="wrapper my-[50px] lg:my-[100px]">
            <div>
              {aboutSection.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:even:flex-row-reverse items-center gap-8 lg:gap-20 mb-[50px] lg:mb-[100px]"
                >
                  <div className="w-full sm:w-1/2 h-[500px]">
                    <img src={section.aboutImg} alt={section.altImg} />
                  </div>
                  <div className="sm:w-1/2">
                    <h2 className="mb-6">{section.aboutTItle}</h2>
                    <p>{section.aboutDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Cta/>
      <Footer/>
      </HelmetProvider>
  );
}

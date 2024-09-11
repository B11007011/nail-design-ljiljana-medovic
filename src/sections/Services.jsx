import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { services } from '../data';

export default function Services({ showTitle = true }) {
 
  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
     <div className="max-w-xl mx-auto mb-[50px] sm:text-center">
     <h2 className="mb-6 sm:mb-12">Naše usluge</h2>
     {/* <p>Verujemo da lepota dolazi kroz pažljivo negovanje i stručan pristup. Bez obzira na to da li želite manikir ili neku od naših drugih usluga, mi smo tu da ispunimo sva vaša očekivanja.</p> */}
     </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-4 xl:gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <div className="aspect-square mb-8">
                <img src={service.servicesImg} alt="" />
              </div>
              <h3>{service.servicesTitle}</h3>
              <p className="mt-3 mb-4 line-clamp-3">{service.servicesDesc}</p>
              <div className="inline-block">
                <Link to={`/usluge/${service.pageUrl}`} className="btn-tertiary">
                  <span>pročitajte više</span>
                  <GoArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

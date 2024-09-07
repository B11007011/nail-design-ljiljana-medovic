import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { services } from '../data';

export default function Services({ showTitle = true }) {
 
  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
      {showTitle && <h2 className="mb-6 sm:mb-12 sm:text-center">naše usluge</h2>}
        <div className="flex flex-wrap justify-center gap-y-6 gap-4 xl:gap-8">
          {services.map((service, index) => (
            <div key={index} className="sm:w-[calc((100%/2)-8px)] lg:w-[calc((100%/3)-24px)]">
              <div className="aspect-square mb-8">
                <img src={service.servicesImg} alt="" />
              </div>
              <h3>{service.servicesTitle}</h3>
              <p className="my-3 line-clamp-3">{service.servicesDesc}</p>
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

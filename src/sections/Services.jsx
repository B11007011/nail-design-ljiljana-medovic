import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export default function Services({ showTitle = true }) {
  const services = [
    {
      pageUrl: "manikir",
      servicesTitle: "manikir",
      servicesDesc:
        "Precizna i pažljiva nega noktiju koja uključuje oblikovanje po želji, turpijanje kako bi se postigla savršena glatkoća, detaljnu negu zanoktica za zdrav i uredan izgled, kao i nanošenje visokokvalitetnog laka u boji po izboru. Koristimo najbolje tehnike i proizvode kako bi vaši nokti izgledali besprekorno i trajali što duže. Osim estetskog aspekta, manikir tretman pomaže i u očuvanju zdravlja noktiju i kože ruku, pružajući osećaj svežine i luksuza.",
      servicesImg: "/images/manicure-img.jpg",
    },
    {
      pageUrl: "trajna-sminka",
      servicesTitle: "trajna šminka",
      servicesDesc:
        "Naša usluga trajne šminke uključuje preciznu aplikaciju pigmenta za definisanje obrva, očnih kapaka i usana, pružajući vam savršen izgled u svakom trenutku, bez potrebe za svakodnevnim nanošenjem šminke. Koristimo najkvalitetnije pigmente i najsavremenije tehnike kako bismo postigli prirodan i elegantan izgled koji traje mesecima. Uz našu trajnu šminku, svakodnevno ćete se buditi spremni za dan, uz osećaj samopouzdanja i besprekornosti.",
      servicesImg: "/images/permanent-makeup-img.jpg",
    },
    ,
    {
      pageUrl: "edukacije",
      servicesTitle: "edukacije",
      servicesDesc:
        "Unapredite svoje veštine i znanje uz naše stručno osmišljene edukacije namenjene kako početnicima tako i iskusnim profesionalcima. Naši kursevi obuhvataju najnovije tehnike i trendove u oblasti lepote, od manikira i pedikira, preko masaže i nege lica, do naprednih kurseva trajne šminke i mnogih drugih tretmana. Edukacije su osmišljene tako da pruže praktično znanje i iskustvo kroz interaktivne radionice, vođene od strane iskusnih instruktora sa dugogodišnjim iskustvom. Sa nama ćete steći ne samo teoretska znanja, već i praktične veštine koje će vam omogućiti da izgradite uspešnu karijeru u industriji lepote.",
      servicesImg: "/images/educations-img.jpg",
    },
  ];
  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
      {showTitle && <h2 className="mb-[50px] sm:text-center">naše usluge</h2>}
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

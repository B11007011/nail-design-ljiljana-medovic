import { Link, useLocation, useParams } from "react-router-dom";

const services = [
  {
    pageUrl: "manikir",
    servicesTitle: "manikir",
    servicesDesc:
      "Precizna i pažljiva nega noktiju koja uključuje oblikovanje po želji, turpijanje kako bi se postigla savršena glatkoća, detaljnu negu zanoktica za zdrav i uredan izgled, kao i nanošenje visokokvalitetnog laka u boji po izboru. Koristimo najbolje tehnike i proizvode kako bi vaši nokti izgledali besprekorno i trajali što duže. Osim estetskog aspekta, manikir tretman pomaže i u očuvanju zdravlja noktiju i kože ruku, pružajući osećaj svežine i luksuza.",
    servicesImg: "/images/manicure-img.jpg",
    servicesList: [
      {servicesListTitle: 'Gel nokti', servicesListDesc: 'Ova tehnika koristi gel koji se nanosi preko prirodnih noktiju ili ekstenzija. Gel se zatim stvrdnjava pomoću UV ili LED lampe. Gel nokti su poznati po svojoj dugotrajnosti, prirodnom izgledu i sjaju.'},
      {servicesListTitle: 'Akrilni nokti', servicesListDesc: 'Akril se stvara kombinacijom tečnog monomera i praha polimera, koji se nanosi na nokte kako bi se stvorila čvrsta, dugotrajna površina. Ova tehnika omogućava produženje noktiju i kreiranje različitih oblika.'},
      {servicesListTitle: 'Shellac (Šelak)', servicesListDesc: 'Shellac je hibridni lak za nokte koji kombinuje karakteristike običnog laka i gela. Nanosi se kao lak za nokte i stvrdnjava se pod UV svetlom. Šelak nudi dugotrajan, sjajan finiš bez ljuštenja.'},
      {servicesListTitle: 'Francuski manikir', servicesListDesc: 'Klasična tehnika koja se ističe prirodnim izgledom. Nokti su obično premazani neutralnom ili ružičastom bazom, dok su vrhovi obojeni belom bojom. Ovaj stil je elegantan i svestran.'},
    ],
    servicesGallery: ['/images/gallery-manicure-1.jpg', '/images/gallery-manicure-2.jpg', '/images/gallery-manicure-3.jpg', '/images/gallery-manicure-4.jpg', '/images/gallery-manicure-5.jpg', '/images/gallery-manicure-6.jpg', '/images/gallery-manicure-7.jpg', '/images/gallery-manicure-8.jpg', '/images/gallery-manicure-9.jpg']
  },
  {
    pageUrl: "trajna-sminka",
    servicesTitle: "trajna šminka",
    servicesDesc:
      "Naša usluga trajne šminke uključuje preciznu aplikaciju pigmenta za definisanje obrva, očnih kapaka i usana, pružajući vam savršen izgled u svakom trenutku, bez potrebe za svakodnevnim nanošenjem šminke. Koristimo najkvalitetnije pigmente i najsavremenije tehnike kako bismo postigli prirodan i elegantan izgled koji traje mesecima. Uz našu trajnu šminku, svakodnevno ćete se buditi spremni za dan, uz osećaj samopouzdanja i besprekornosti.",
    servicesImg: "/images/permanent-makeup-img.jpg",
    servicesList: [
      {servicesListTitle: 'Trajna Šminka Očiju', servicesListDesc: 'Ova tehnika uključuje nanošenje pigmenata u područje oko očiju kako bi se postigao efekat eyelinera ili popunjavanja obrva. Trajna šminka očiju može uključivati različite stilove, kao što su tanak linijski eyeliner ili sjenčanje. Rezultat je dugotrajan izgled koji ne zahvata svakodnevnu primenu šminke.'},
      {servicesListTitle: 'Trajna Šminka Usana', servicesListDesc: 'Ova metoda koristi pigmente kako bi se kreirao dugotrajan boja na usnama. Može se postići efekt prirodne boje usana, naglašavanje konture ili popunjavanje usana. Trajna šminka usana može pomoći u redefiniranju oblika usana i dodavanju boje bez potrebe za stalnim ponovnim nanošenjem ruža.'},
      {servicesListTitle: 'Trajna Šminka Obrva', servicesListDesc: 'Poznata i kao mikroblejdinga ili tehnika senčenja, ova metoda koristi tanke igle za nanošenje pigmenata u gornji sloj kože kako bi se stvorio efekat prirodnih dlačica ili popunili retki delovi obrva. Ova tehnika omogućava dugotrajan i precizan izgled obrva koji se može prilagoditi potrebama i željama klijenta.'},
    ],
    servicesGallery: [ '/images/gallery-permanent-1.jpg', '/images/gallery-permanent-2.jpg', '/images/gallery-permanent-3.jpg', '/images/gallery-permanent-4.jpg', '/images/gallery-permanent-5.jpg', '/images/gallery-permanent-6.jpg', '/images/gallery-permanent-7.jpg', '/images/gallery-permanent-8.jpg', '/images/gallery-permanent-9.jpg']
  },
  {
    pageUrl: "edukacije",
    servicesTitle: "edukacije",
    servicesDesc:
      "Unapredite svoje veštine i znanje uz naše stručno osmišljene edukacije namenjene kako početnicima tako i iskusnim profesionalcima. Naši kursevi obuhvataju najnovije tehnike i trendove u oblasti lepote, od manikira i pedikira, preko masaže i nege lica, do naprednih kurseva trajne šminke i mnogih drugih tretmana. Edukacije su osmišljene tako da pruže praktično znanje i iskustvo kroz interaktivne radionice, vođene od strane iskusnih instruktora sa dugogodišnjim iskustvom. Sa nama ćete steći ne samo teoretska znanja, već i praktične veštine koje će vam omogućiti da izgradite uspešnu karijeru u industriji lepote.",
    servicesImg: "/images/educations-img.jpg",
    servicesList: [
      {servicesListTitle: 'Kurs za Tehniku Noktiju', servicesListDesc: 'Ovaj kurs obuhvata različite tehnike manikira i pedikira, uključujući gel, akril, šelak i praškaste nokte. Polaznici će naučiti o aplikaciji, održavanju i uklanjanju ovih tehnika, kao i o sigurnosnim merama i higijeni.'},
      {servicesListTitle: 'Kurs za Trajnu Šminku', servicesListDesc: 'Ova edukacija fokusira se na sve aspekte trajne šminke, uključujući pripremu kože, izbor pigmenata, tehnike nanošenja i post-procesne brige. Polaznici će naučiti kako da kreiraju prirodan izgled za oči, usne i obrve, kao i kako da upravljaju očekivanjima klijenata i reše eventualne probleme.'},
      {servicesListTitle: 'Kurs za Nail Art (Umetnost Noktiju)', servicesListDesc: 'Ovaj kurs obuhvata različite stilove i tehnike za kreiranje umetnosti na noktima, uključujući crteže, ukrase, nalepnice i efekte. Polaznici će steći veštine u kreativnom izražavanju i naučiti kako da kreiraju jedinstvene i privlačne dizajne.'},
      {servicesListTitle: 'Kurs za Savremene Kozmetičke Tehnike', servicesListDesc: 'Ova edukacija pokriva najnovije trendove i tehnike u kozmetici, uključujući inovacije u trajnoj šminki, manikiri, i beauty industriji uopšte. Polaznici će imati priliku da se upoznaju sa najnovijim proizvodima i metodama, i kako ih implementirati u svojoj praksi.'},
    ],
    servicesGallery: [ '/images/gallery-education-1.jpg', '/images/gallery-education-2.jpg', '/images/gallery-education-3.jpg', '/images/gallery-education-4.jpg', '/images/gallery-education-5.jpg', '/images/gallery-education-6.jpg', '/images/gallery-education-7.jpg', '/images/gallery-education-8.jpg', '/images/gallery-education-9.jpg']
  }
]

export default function BreadCrumb({ page }) {
  const { title } = useParams();
  const location = useLocation();

  const isServiceDetailPage = location.pathname.startsWith("/service/");

  const service = services.find((service) => service.pageUrl === title);

  return (
    <header>
      <div className="wrapper">
        <div className="bg-accent p-6 lg:p-8 flex justify-between items-center">
          <ul className="flex flex-wrap gap-2 font-normal capitalize">
            {!isServiceDetailPage && service  ? (
              <>
                <li>
                  <Link to="/">početna</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/usluge">usluge</Link>
                </li>
                <li>/</li>
                <li>{service.servicesTitle}</li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">početna</Link>
                </li>
                <li>/</li>
                <li>{page}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

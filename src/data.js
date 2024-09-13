import manicureImg from './assets/manicure-img.webp';
import permanentMakeupImg from './assets/permanent-makeup-img.webp';
import educationsImg from './assets/educations-img.webp';

import galleryManicure1 from './assets/gallery-manicure-1.jpg';
import galleryManicure2 from './assets/gallery-manicure-2.jpg';
import galleryManicure3 from './assets/gallery-manicure-3.jpg';
import galleryManicure4 from './assets/gallery-manicure-4.jpg';
import galleryManicure5 from './assets/gallery-manicure-5.jpg';
import galleryManicure6 from './assets/gallery-manicure-6.jpg';
import galleryManicure7 from './assets/gallery-manicure-7.jpg';
import galleryManicure8 from './assets/gallery-manicure-8.jpg';
import galleryManicure9 from './assets/gallery-manicure-9.jpg';

import galleryPermanent1 from './assets/gallery-permanent-1.jpg';
import galleryPermanent2 from './assets/gallery-permanent-2.jpg';
import galleryPermanent3 from './assets/gallery-permanent-3.jpg';
import galleryPermanent4 from './assets/gallery-permanent-4.jpg';
import galleryPermanent5 from './assets/gallery-permanent-5.jpg';
import galleryPermanent6 from './assets/gallery-permanent-6.jpg';
import galleryPermanent7 from './assets/gallery-permanent-7.jpg';
import galleryPermanent8 from './assets/gallery-permanent-8.jpg';
import galleryPermanent9 from './assets/gallery-permanent-9.jpg';

import galleryeducation1 from './assets/gallery-education-1.jpg';
import galleryeducation2 from './assets/gallery-education-2.jpg';
import galleryeducation3 from './assets/gallery-education-3.jpg';
import galleryeducation4 from './assets/gallery-education-4.jpg';
import galleryeducation5 from './assets/gallery-education-5.jpg';
import galleryeducation6 from './assets/gallery-education-6.jpg';
import galleryeducation7 from './assets/gallery-education-7.jpg';
import galleryeducation8 from './assets/gallery-education-8.jpg';
import galleryeducation9 from './assets/gallery-education-9.jpg';

import aboutImg1 from './assets/about-img-1.webp';
import aboutImg2 from './assets/about-img-2.webp';

import envelopeIcon from './assets/envelope-icon.svg';
import mapMarkerIcon from './assets/map-marker-icon.svg';
import phoneIcon from './assets/phone-icon.svg';
import facebookIcon from './assets/facebook-icon.svg';
import instagramIcon from './assets/instagram-icon.svg';

export const navLinks = [
    {name: 'Početna', url: '/'},
    {name: 'Usluge', url: '/usluge'},
    {name: 'O Nama', url: '/o-nama'},
    {name: 'Kontakt', url: '/kontakt'},
]

export const services = [
    {
      pageUrl: "manikir",
      servicesTitle: "Manikir",
      servicesDesc:
        "Precizna i pažljiva nega noktiju koja uključuje oblikovanje po želji, turpijanje kako bi se postigla savršena glatkoća, detaljnu negu zanoktica za zdrav i uredan izgled, kao i nanošenje visokokvalitetnog laka u boji po izboru. Koristimo najbolje tehnike i proizvode kako bi vaši nokti izgledali besprekorno i trajali što duže. Osim estetskog aspekta, manikir tretman pomaže i u očuvanju zdravlja noktiju i kože ruku, pružajući osećaj svežine i luksuza.",
      servicesImg: manicureImg,
      servicesList: [
        {servicesListTitle: 'Gel nokti', servicesListDesc: 'Ova tehnika koristi gel koji se nanosi preko prirodnih noktiju ili ekstenzija. Gel se zatim stvrdnjava pomoću UV ili LED lampe. Gel nokti su poznati po svojoj dugotrajnosti, prirodnom izgledu i sjaju.'},
        {servicesListTitle: 'Akrilni nokti', servicesListDesc: 'Akril se stvara kombinacijom tečnog monomera i praha polimera, koji se nanosi na nokte kako bi se stvorila čvrsta, dugotrajna površina. Ova tehnika omogućava produženje noktiju i kreiranje različitih oblika.'},
        {servicesListTitle: 'Shellac (Šelak)', servicesListDesc: 'Shellac je hibridni lak za nokte koji kombinuje karakteristike običnog laka i gela. Nanosi se kao lak za nokte i stvrdnjava se pod UV svetlom. Šelak nudi dugotrajan, sjajan finiš bez ljuštenja.'},
        {servicesListTitle: 'Francuski manikir', servicesListDesc: 'Klasična tehnika koja se ističe prirodnim izgledom. Nokti su obično premazani neutralnom ili ružičastom bazom, dok su vrhovi obojeni belom bojom. Ovaj stil je elegantan i svestran.'},
      ],
      servicesGallery: [galleryManicure1, galleryManicure2, galleryManicure3, galleryManicure4, galleryManicure5, galleryManicure6, galleryManicure7, galleryManicure8, galleryManicure9]
    },
    {
      pageUrl: "trajna-sminka",
      servicesTitle: "Trajna šminka",
      servicesDesc:
        "Naša usluga trajne šminke uključuje preciznu aplikaciju pigmenta za definisanje obrva, očnih kapaka i usana, pružajući vam savršen izgled u svakom trenutku, bez potrebe za svakodnevnim nanošenjem šminke. Koristimo najkvalitetnije pigmente i najsavremenije tehnike kako bismo postigli prirodan i elegantan izgled koji traje mesecima. Uz našu trajnu šminku, svakodnevno ćete se buditi spremni za dan, uz osećaj samopouzdanja i besprekornosti.",
      servicesImg: permanentMakeupImg,
      servicesList: [
        {servicesListTitle: 'Trajna šminka očiju', servicesListDesc: 'Ova tehnika uključuje nanošenje pigmenata u područje oko očiju kako bi se postigao efekat eyelinera ili popunjavanja obrva. Trajna šminka očiju može uključivati različite stilove, kao što su tanak linijski eyeliner ili sjenčanje. Rezultat je dugotrajan izgled koji ne zahvata svakodnevnu primenu šminke.'},
        {servicesListTitle: 'Trajna šminka usana', servicesListDesc: 'Ova metoda koristi pigmente kako bi se kreirao dugotrajan boja na usnama. Može se postići efekt prirodne boje usana, naglašavanje konture ili popunjavanje usana. Trajna šminka usana može pomoći u redefiniranju oblika usana i dodavanju boje bez potrebe za stalnim ponovnim nanošenjem ruža.'},
        {servicesListTitle: 'Trajna šminka obrva', servicesListDesc: 'Poznata i kao mikroblejdinga ili tehnika senčenja, ova metoda koristi tanke igle za nanošenje pigmenata u gornji sloj kože kako bi se stvorio efekat prirodnih dlačica ili popunili retki delovi obrva. Ova tehnika omogućava dugotrajan i precizan izgled obrva koji se može prilagoditi potrebama i željama klijenta.'},
      ],
      servicesGallery: [ galleryPermanent1, galleryPermanent2, galleryPermanent3, galleryPermanent4, galleryPermanent5, galleryPermanent6, galleryPermanent7, galleryPermanent8, galleryPermanent9]
    },
    {
      pageUrl: "edukacije",
      servicesTitle: "Edukacije",
      servicesDesc:
        "Unapredite svoje veštine i znanje uz naše stručno osmišljene edukacije namenjene kako početnicima tako i iskusnim profesionalcima. Naši kursevi obuhvataju najnovije tehnike i trendove u oblasti lepote, od manikira i pedikira, preko masaže i nege lica, do naprednih kurseva trajne šminke i mnogih drugih tretmana. Edukacije su osmišljene tako da pruže praktično znanje i iskustvo kroz interaktivne radionice, vođene od strane iskusnih instruktora sa dugogodišnjim iskustvom. Sa nama ćete steći ne samo teoretska znanja, već i praktične veštine koje će vam omogućiti da izgradite uspešnu karijeru u industriji lepote.",
      servicesImg: educationsImg,
      servicesList: [
        {servicesListTitle: 'Kurs za tehniku noktiju', servicesListDesc: 'Ovaj kurs obuhvata različite tehnike manikira i pedikira, uključujući gel, akril, šelak i praškaste nokte. Polaznici će naučiti o aplikaciji, održavanju i uklanjanju ovih tehnika, kao i o sigurnosnim merama i higijeni.'},
        {servicesListTitle: 'Kurs za trajnu šminku', servicesListDesc: 'Ova edukacija fokusira se na sve aspekte trajne šminke, uključujući pripremu kože, izbor pigmenata, tehnike nanošenja i post-procesne brige. Polaznici će naučiti kako da kreiraju prirodan izgled za oči, usne i obrve, kao i kako da upravljaju očekivanjima klijenata i reše eventualne probleme.'},
        {servicesListTitle: 'Kurs za Nail Art (Umetnost noktiju)', servicesListDesc: 'Ovaj kurs obuhvata različite stilove i tehnike za kreiranje umetnosti na noktima, uključujući crteže, ukrase, nalepnice i efekte. Polaznici će steći veštine u kreativnom izražavanju i naučiti kako da kreiraju jedinstvene i privlačne dizajne.'},
        {servicesListTitle: 'Kurs za savremene kozmetičke tehnike', servicesListDesc: 'Ova edukacija pokriva najnovije trendove i tehnike u kozmetici, uključujući inovacije u trajnoj šminki, manikiri, i beauty industriji uopšte. Polaznici će imati priliku da se upoznaju sa najnovijim proizvodima i metodama, i kako ih implementirati u svojoj praksi.'},
      ],
      servicesGallery: [ galleryeducation1, galleryeducation2, galleryeducation3, galleryeducation4, galleryeducation5, galleryeducation6, galleryeducation7, galleryeducation8, galleryeducation9]
    }
  ];

  export  const aboutSection = [
    {
      aboutImg: aboutImg1,
      aboutTItle: "Naša priča",
      aboutDesc:
        "Sve je počelo pre više od 25 godina, kada je Ljiljana Medović, inspirisana strašću prema lepoti i željom da stvori jedinstvene trenutke za svoje klijente, otvorila svoj prvi salon. Od tada, svakodnevno se trudimo da svakom klijentu pružimo iskustvo koje ga čini negovanim i zadovoljnim. Tokom godina, postali smo sinonim za kvalitet i profesionalizam. Naš salon je prepoznatljiv po posebnom fokusu na negu i ulepšavanje noktiju, uključujući izradu salonskih noktiju, kao i organizaciju obuka za nail dizajnere i takmičare. Kroz stalno usavršavanje i praćenje najnovijih trendova u industriji lepote, uspevamo da pružimo usluge koje zadovoljavaju najviše standarde.",
      altImg: "Ljiljana Medovic demonstrating her style and professionalism in a posed photo."
    },
    {
      aboutImg: aboutImg2,
      aboutTItle: "Naša vizija",
      aboutDesc:
        "Želimo da budemo više od običnog kozmetičkog salona – mesto gde se svaka osoba oseća cenjeno, inspirisano i podržano u svojoj lepoti i jedinstvenosti. Verujemo da lepota dolazi iznutra, ali i da pažljivo negovan spoljašnji izgled može doprineti samopouzdanju i unutrašnjem miru. Zato se posvećujemo stalnom unapređenju naših veština, praćenju najnovijih trendova i korišćenju najkvalitetnijih proizvoda. Nastavićemo da gradimo poverenje kroz profesionalizam, posvećenost i toplu atmosferu u kojoj se svako oseća kao kod kuće.",
        altImg: "Close-up of hands with long, elaborately designed acrylic nails resting on a certificate."
    },
  ];

  export const contactInfo = [
    {
      type: 'Telefon',
      name: "+381621162977",
      info: "tel:+381621162977",
      icon: phoneIcon,
    },
    {
      type: 'Email',
      name: "ljiljana.medovic@gmail.com",
      info: "mailto:ljiljana.medovic@gmail.com",
      icon: envelopeIcon,
    },
    {
      type: 'Adresa',
      name: "Marija Bursaća 8, Niš",
      info: "https://www.google.com/maps/place/Nail+Design+Ljiljana+Medovi%C4%87/@43.3133352,21.8964168,15z/data=!4m2!3m1!1s0x0:0x8f2e902bfc6d7ccb?sa=X&ved=1t:2428&ictx=111",
      icon: mapMarkerIcon,
    },
  ];

  export const socialLinks = [
    {
      url: "https://www.facebook.com/ljiljana.medovicnailharmony/?locale=sr_RS",
      icon: facebookIcon,
      ariaLabel: 'Visit Facebook page',
      alt: 'Facebook icon'
    },
    {
      url: "https://www.instagram.com/ljiljanamedovic/",
      icon: instagramIcon,
      ariaLabel: 'Visit Instagram page',
      alt: 'Instagram icon'
    },
  ];
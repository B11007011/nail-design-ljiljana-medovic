import BreadCrumb from "../components/BreadCrumb";

export default function AboutPage() {
  const aboutSection = [
    {
      aboutImg: "/images/about-img-1.jpg",
      aboutTItle: "Naša priča",
      aboutDesc:
        "Sve je počelo pre više od 25 godina, kada je Ljiljana Medović, inspirisana strašću prema lepoti i željom da stvori jedinstvene trenutke za svoje klijente, otvorila svoj prvi salon. Od tada, svakodnevno se trudimo da svakom klijentu pružimo iskustvo koje ga čini negovanim i zadovoljnim. Tokom godina, postali smo sinonim za kvalitet i profesionalizam. Naš salon je prepoznatljiv po posebnom fokusu na negu i ulepšavanje noktiju, uključujući izradu salonskih noktiju, kao i organizaciju obuka za nail dizajnere i takmičare. Kroz stalno usavršavanje i praćenje najnovijih trendova u industriji lepote, uspevamo da pružimo usluge koje zadovoljavaju najviše standarde.",
    },
    {
      aboutImg: "/images/about-img-2.jpg",
      aboutTItle: "Naša vizija",
      aboutDesc:
        "Želimo da budemo više od običnog kozmetičkog salona – mesto gde se svaka osoba oseća cenjeno, inspirisano i podržano u svojoj lepoti i jedinstvenosti. Verujemo da lepota dolazi iznutra, ali i da pažljivo negovan spoljašnji izgled može doprineti samopouzdanju i unutrašnjem miru. Zato se posvećujemo stalnom unapređenju naših veština, praćenju najnovijih trendova i korišćenju najkvalitetnijih proizvoda. Nastavićemo da gradimo poverenje kroz profesionalizam, posvećenost i toplu atmosferu u kojoj se svako oseća kao kod kuće.",
    },
  ];
  return (
    <>
      <BreadCrumb page="O nama" />
      <main>
        <section>
          <div className="wrapper my-[50px] lg:my-[100px]">
            <div>
              {aboutSection.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:even:flex-row-reverse items-center gap-8 lg:gap-20 mb-[50px] lg:mb-[100px]"
                >
                  <div className="w-full sm:w-1/2 h-[500px]">
                    <img src={section.aboutImg} alt="" />
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
    </>
  );
}

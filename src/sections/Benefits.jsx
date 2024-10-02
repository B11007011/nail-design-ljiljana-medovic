export default function Benefits() {

    const counter = [
        {counterNumber: '1000', counterTitle: "Zadovoljnih klijenata", counterDesc: 'Naši zadovoljni klijenti su dokaz naše posvećenosti, stručnosti i visokog kvaliteta usluga koje pružamo svakodnevno.'},
        {counterNumber: '500', counterTitle: "Održanih obuka", counterDesc: 'Organizovali smo brojne obuke i edukacije, pomažući profesionalcima da unaprede svoje znanje i veštine u oblasti lepote.'},
        {counterNumber: '25', counterTitle: "Godine postojanja", counterDesc: 'Sa dugogodišnjim iskustvom u svetu lepote, negujemo tradiciju kvaliteta i postojanosti, pružajući vrhunske usluge.'},
    ]
  return (
    <section>
        <div className="wrapper p-[50px] bg-accent">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {counter.map((item, index) => (
                <li className="space-y-4" key={index}>
                    <h2>{item.counterNumber}<span className="font-sans font-light text-4xl">+</span></h2>
                    <h3>{item.counterTitle}</h3>
                    <p>{item.counterDesc}</p>
                </li>
            ))}
            </ul>
        </div>
    </section>
  )
}
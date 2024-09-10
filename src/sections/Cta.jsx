import cherryBlossomsImg from '../assets/cherry-blossoms-img.png';

export default function Cta() {
  return (
    <section>
        <div className="wrapper" >
          <div className="bg-accent/85 p-8 lg:px-[50px] lg:py-[75px] flex flex-wrap gap-6 items-center justify-between relative">
            <div className="max-w-[450px] w-full lg:max-w-[550px]">
            <h2 className="mb-6">Zakazite vaš <br /> termin već danas</h2>
            <p>Bilo da ste ovde na manikiru ili uživate u nekom od naših drugih tretmana, možete očekivati vrhunsku uslugu i personalizovan pristup. Verujemo da će vam boravak kod nas biti prijatan, a rezultati - zadivljujući. Radujemo se prilici da vam pružimo najbolje od lepote i nege.</p>
            </div>
            <a href="tel:+381641162977" className="btn">Zakažite Termin</a>
            <img className="-z-[1] absolute inset-0 transform scale-x-[-1]" src={cherryBlossomsImg} alt="" />
        </div>
        </div>
    </section>
  )
}
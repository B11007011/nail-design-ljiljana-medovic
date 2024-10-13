import ctaImg from '../assets/cta-img.webp';

export default function Cta() {
  return (
    <section>
        <div className="wrapper" >
          <div className="bg-accent flex items-center flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-8 md:py-0 flex lg:px-14 flex-col gap-6 items-start">
            <h2>Zakazite vaš <br /> termin već danas</h2>
            <p>Bilo da ste ovde na manikiru ili uživate u nekom od naših drugih tretmana, možete očekivati vrhunsku uslugu i personalizovan pristup. Verujemo da će vam boravak kod nas biti prijatan, a rezultati - zadivljujući. Radujemo se prilici da vam pružimo najbolje od lepote i nege.</p>
            <a href="tel:+381641162977" className="btn btn-primary">Zakažite Termin</a>
            </div>
            <div className='aspect-square w-full md:w-1/2 md:h-[500px]'>
            <img className='object-cover' src={ctaImg}/>
            </div>
        </div>
        </div>
    </section>
  )
}
const counter = [
  {counterTitle: 'Zadovoljnih mušterija', counterValue: 1000},
  {counterTitle: 'Održanih obuka', counterValue: 500},
  {counterTitle: 'Godina postojanja', counterValue: 25}
]

export default function Intro() {
  return (
    <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper sm:text-center">
            <h2 className="mb-[50px]">Salon lepote <br /> nail Design</h2>
            <p className="mb-4">Dobrodošli u naš kutak lepote i elegancije, smešten u srcu Niša, gde su vaše zadovoljstvo i nega na prvom mestu. </p>
            <p className="mb-4">Naš salon, osmišljen s ljubavlju i pažnjom prema detaljima, pruža vam nezaboravno iskustvo lepote. Posebnu pažnju posvećujemo svakom detalju manikira, kako bi vaši nokti izgledali savršeno. </p>
            <p>Bilo da ste ovde na manikiru ili uživate u nekom od naših drugih tretmana, možete očekivati vrhunsku uslugu i personalizovan pristup.  Verujemo da će vam boravak kod nas biti prijatan, a rezultati - zadivljujući. Radujemo se prilici da vam pružimo najbolje od lepote i nege.</p>
            <div className="flex flex-col justify-evenly gap-4 my-[50px] sm:flex-row">
            {counter.map((item, index) => (
              <div className="lg:w-1/3" key={index}>
              <h3 className="font-serif text-5xl mb-2">{item.counterValue}<span className="text-4xl">+</span></h3>
              <p className="font-normal">{item.counterTitle}</p>
              </div>
            ))}
           
            
            </div>
            <div className="h-[400px] relative">
            <img src="/images/intro-img.jpg" alt="" className="w-full"/>
            <div className="bg-black/25 absolute inset-0"></div>
            </div>

        
            {/* <div className="h-[400px] relative" style={ {clipPath: 'inset(0)' }}>
            <img src="/images/intro-img.jpg" alt="" className="w-full h-full object-contain fixed inset-0 -z-[2]"/>
            <div className="bg-black/25 absolute inset-0"></div>
            </div> */}
            
        </div>
    </section>
  )
}
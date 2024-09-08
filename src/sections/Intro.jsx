import { counter } from '../data';
import introImg from '../assets/intro-img.jpg';

export default function Intro() {
  return (
    <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper sm:text-center">
            <div className='max-w-3xl mx-auto mb-[50px] sm:text-center'>
            <h2 className="mb-6 sm:mb-12">Salon lepote Nail Design</h2>
            <p className="mb-4">Dobrodošli u naš kutak lepote i elegancije, smešten u srcu Niša, gde su vaše zadovoljstvo i nega na prvom mestu. Naš salon, osmišljen s ljubavlju i pažnjom prema detaljima, pruža vam nezaboravno iskustvo lepote. Posebnu pažnju posvećujemo svakom detalju manikira, kako bi vaši nokti izgledali savršeno.</p>
            </div>
            <div className="flex flex-col text-center justify-evenly gap-4 my-[50px] sm:flex-row">
            {counter.map((item, index) => (
              <div className="flex sm:flex-col items-center gap-4 sm:gap-1" key={index}>
              <h2 className="mb-2">{item.counterValue}<span className="text-2xl font-bold lg:text-4xl">+</span></h2>
              <p>{item.counterTitle}</p>
              </div>
            ))}
           
            
            </div>
            <div className="h-[400px] relative">
            <img src={introImg} alt="" className="w-full"/>
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
import introImg from '../assets/intro-img-1.webp';
import introImg2 from '../assets/intro-img-2.webp';

export default function Intro() {
  return (
    <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper sm:text-center">
            <div className='max-w-2xl mx-auto mb-[50px] sm:text-center'>
            <h2 className="mb-6">Salon lepote Nail Design</h2>
            <p className="mb-4">Dobrodošli u naš kutak lepote i elegancije u srcu Niša. Posvetite se nezi u našem salonu gde je vaša lepota naš prioritet. Posebnu pažnju posvećujemo svakom detalju manikira, kako bi vaši nokti izgledali savršeno. Posetite nas i osetite razliku u nezi.</p>
            </div>
            <div className='flex flex-col md:flex-row relative'>
            <div className="aspect-video md:flex-1 border-offWhite mr-[50px] md:-mr-[50px] border-r-[16px] border-b-[16px] xl:border-r-[24px] xl:border-b-[24px] md:mb-[74px]">
            <img src={introImg} alt="" className="w-full"/>
            </div>
            <div className="aspect-video md:flex-1 border-offWhite ml-[50px] -mt-[74px] md:-ml-[50px] md:mt-[74px] border-l-[16px] border-t-[16px] xl:border-l-[24px] xl:border-t-[24px] -z-[1]">
            <img src={introImg2} alt="" className="w-full"/>
            </div>
            </div>        
        </div>
    </section>
  )
}
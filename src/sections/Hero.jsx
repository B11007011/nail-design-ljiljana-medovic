import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import heroImg from '../assets/hero-img.png';

export default function Hero() {
  return (
    <section>
        <div className="wrapper py-[50px] md:py-[100px] flex flex-col sm:items-center sm:flex-row-reverse justify-between gap-4 relative">
        <div className="sm:w-1/2 border-r-[16px] -mr-4 border-t-[16px] border-b-[16px] sm:border-l-[16px] lg:border-l-[24px] lg:border-t-[24px] lg:border-b-[24px] lg:border-r-0 lg:-mr-0 lg:h-[600px] border-offWhite ">
                <img className="w-full h-full object-cover" src={heroImg} alt="" />
              </div>
            <div className="flex flex-col items-start gap-6 sm:w-1/2">
                <h1>Savršeni<br />nokti su deo<br />vaše lepote</h1>
                <p className="text-xl">Mi smo tu da pružimo besprekoran sjaj vašim noktima</p>
                <Link to="/usluge/manikir" className="btn"><span>saznajte više</span><GoArrowRight />
                </Link>
            </div>
            <div className="bg-accent absolute top-0 left-[250px] right-0 lg:left-[300px] h-full sm:right-[100px] z-[-2]"></div>
        </div>
    </section>
  )
}
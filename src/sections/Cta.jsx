import cherryBlossomsImg from '../assets/cherry-blossoms-img.png';

export default function Cta() {
  return (
    <section>
        <div className="wrapper" >
          <div className="bg-accent/85 p-8 lg:px-[50px] lg:py-[75px] flex flex-wrap gap-6 items-center justify-between relative">
            <div className="max-w-[450px] w-full lg:max-w-[550px]">
            <h2 className="mb-6">zakazite vaš <br /> termin jos danas</h2>
            <p>Bilo da ste u potrazi za novim manikirom ili trajnom šminkom, mi smo tu da vam pružimo vrhunsku uslugu. Rezervišite svoj termin i prepustite se vrhunskoj nezi u našem salonu.</p>
            </div>
            <a href="tel:+381641162977" className="btn" target="_blank">Zakažite Termin</a>
            <img className="-z-[1] absolute inset-0 transform scale-x-[-1]" src={cherryBlossomsImg} alt="" />
        </div>
        </div>
    </section>
  )
}
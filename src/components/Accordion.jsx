import { useState } from "react"

export default function Accordion({ servicesList }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <section className="my-[100px]">
        <div className="wrapper">
           
              <ul className="space-y-2">
              {servicesList.map((item,index) => (
                <li key={index} className="">
                    <button onClick={() => toggleAccordion(index)} className="px-6 py-5 cursor-pointer w-full flex text-left justify-between items-center gap-4 border border-gray-300">
                        <h4>{item.servicesListTitle}</h4>
                        <div className="relative">
                            <div className="w-[18px] h-[0.1rem] bg-black"></div>
                            <div className={`w-[18px] h-[0.1rem] bg-black absolute top-1/2 -translate-y-1/2 transition-transform duration-200 ${openIndex === index ? 'rotate-0' : 'rotate-90'}`}></div>
                        </div>
                    </button>
                    {openIndex === index && (
                    <div className="px-6  pb-6 -mt-[1px] border border-gray-300 bg-offWhite border-t-offWhite">
                        <p>{item.servicesListDesc}</p>
                    </div>
                    )}
                </li>
            ))}
              </ul>
          
        </div>
    </section>
  )
}
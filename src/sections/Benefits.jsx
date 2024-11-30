import { counter } from "../data"

export default function Benefits() {
  return (
    <section>
        <div className="wrapper ">
            <ul className="bg-accent px-4 py-[50px] flex flex-wrap justify-around gap-4">
            {counter.map((item, index) => (
                <li className="max-w-[310px] text-center" key={index}>
                    <h2 className="mb-2">{item.counterNumber}<span className="font-sans font-light text-3xl lg:text-4xl">+</span></h2>
                    <h3 className="mb-4">{item.counterTitle}</h3>
                    <p>{item.counterDesc}</p>
                </li>
            ))}
            </ul>
        </div>
    </section>
  )
}
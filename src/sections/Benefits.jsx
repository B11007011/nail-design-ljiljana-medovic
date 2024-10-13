import { counter } from "../data"

export default function Benefits() {

  return (
    <section>
        <div className="wrapper bg-accent p-8 flex lg:p-14">
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
import { Link } from "react-router-dom";
import { navLinks, services, contactInfo, socialLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrapper">
        <div className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-6 py-[50px] lg:py-[100px] border-b border-gray-300">
          <div className="max-w-[335px]">
            <Link to="/" className="logo">
              <img src="/logo.svg" alt="Nail Design Ljiljana Medović Logo" />
            </Link>
            <div className="mt-4 mb-5">
              Dobrodošli u naš kutak lepote i elegancije, smešten u srcu Niša,
              gde su vaše zadovoljstvo i nega na prvom mestu.
            </div>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="h-[50px] w-[50px] flex justify-center items-center rounded-full border border-black"
                    href={link.url}
                    target="_blank"
                    aria-label={link.ariaLabel}
                  >
                    <img className="w-[22px] h-[22px]" src={link.icon} alt={link.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xl">Brzi linkovi</div>
            <div className="flex flex-wrap gap-2 sm:flex-col">
              {navLinks.map((link, index) => (
                  <Link key={index} to={link.url}>{link.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-xl">Usluge</div>
            <div className="flex flex-wrap gap-2 sm:flex-col">
              {services.map((service, index) => (
                  <Link key={index} className="capitalize" to={`/usluge/${service.pageUrl}`}>
                    {service.servicesTitle}
                  </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-xl">Kontakt informacije</div>
            <div className="flex flex-col space-y-2">
              {contactInfo.map((contact, index) => (
                  <a key={index} href={contact.info} target="_blank">
                    {contact.name}
                  </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 sm:text-center">&copy; {currentYear} Nail Design Ljiljana Medović. Developed by&nbsp;
            <a className="underline" href="https://github.com/stefanelli990" target="_blank">stefanelli990</a>
        </div>
      </div>
    </footer>
  );
}

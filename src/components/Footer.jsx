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
            <p className="mt-4 mb-5">
              Dobrodošli u naš kutak lepote i elegancije, smešten u srcu Niša,
              gde su vaše zadovoljstvo i nega na prvom mestu.
            </p>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="h-[50px] w-[50px] flex justify-center items-center rounded-full border border-black"
                    href={link.url}
                    target="_blank"
                  >
                    <img className="w-[22px] h-[22px]" src={link.icon} alt=""/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Brzi linkovi</h4>
          <ul className="flex flex-wrap gap-2 sm:flex-col">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
          </div>
          <div>
            <h4 className="mb-4">Usluge</h4>
          <ul className="flex flex-wrap gap-2 sm:flex-col">
            {services.map((service, index) => (
              <li key={index} className="capitalize">
                <Link to={`/usluge/${service.pageUrl}`}>{service.servicesTitle}</Link>
              </li>
            ))}
          </ul>
          </div>
          <div>
          <h4 className="mb-4">Kontakt informacije</h4>
          <ul className="space-y-2">
            {contactInfo.map((contact, index) => (
              <li key={index}>
                <a href={contact.info} target="_blank">
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>

        <div className="flex flex-wrap-reverse items-start gap-6 justify-between py-6">
          <p>
            &copy; {currentYear} Nail Design Ljiljana Medović. Developed by{" "}
            <a className="underline" href="https://github.com/stefanelli990" target="_blank">
              stefanelli990
            </a>
          </p>
          <ul className="flex gap-6">
            <li>
            Politika Privatnosti
            </li>
            <li>
            Uslovi Koriscenja
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

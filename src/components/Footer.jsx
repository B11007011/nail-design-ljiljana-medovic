import { Link } from "react-router-dom";
import { navLinks, services, contactInfo, socialLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrapper">
        <div className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-6 py-[50px] lg:py-[100px] border-b border-gray-300">
          
          {/* Logo and Description Section */}
          <div className="max-w-[335px]">
            <Link className="logo" to="/" aria-label="Nail Design Ljiljana Medović Home">
              <img  src="/logo.svg" alt="Nail Design Ljiljana Medović logo" />
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
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <img className="w-[22px] h-[22px]" src={link.icon} alt={link.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Section */}
          <nav aria-label="Brzi linkovi">
            <h2 className="mb-4 text-xl font-serif">Brzi linkovi</h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link  to={link.url} aria-label={link.name}>
                  {link.name}
                </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Section */}
          <nav aria-label="Usluge">
            <h2 className="mb-4 text-xl font-serif">Usluge</h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {services.map((service, index) => (
                <li key={index}>
                  <Link className="capitalize" to={`/usluge/${service.pageUrl}`} aria-label={`Pogledajte ${service.servicesTitle}`}>
                  {service.servicesTitle}
                </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="mb-4 text-xl font-serif">
              Kontakt informacije
            </h2>
            <ul className="flex flex-col space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a href={contact.info} aria-label={`Kontaktirajte nas putem ${contact.name}`}>
                  {contact.name}
                </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="py-6 sm:text-center">
          &copy; {currentYear} Nail Design Ljiljana Medović. Developed by&nbsp;
          <a
            className="underline"
            href="https://github.com/stefanelli990"
            target="_blank"
            rel="noopener noreferrer"
          >
            stefanelli990
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom"
import { GrFacebookOption } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      url: "https://www.facebook.com/ljiljana.medovicnailharmony/?locale=sr_RS",
      icon: <GrFacebookOption />,
    },
    {
      url: "https://www.instagram.com/ljiljanamedovic/",
      icon: <SiInstagram />,
    },
  ];
  const footerLinks = [
    { name: "Početna", url: "/" },
    { name: "Usluge", url: "/usluge" },
    { name: "O Nama", url: "/about" },
    { name: "Kontakt", url: "/contact" },
  ];
  const services = [
    { name: "Manikir", path: "/services/manikir" },
    { name: "Trajna šminka", path: "/services/trajna-šminka" },
    { name: "Edukacije", path: "/services/edukacije" },
  ];
  const contactInfo = [
    { name: "+381621162977", info: "tel:+381621162977", icon: '/images/phone-icon.svg' },
    {
      name: "ljiljana.medovic@gmail.com",
      info: "mailto:ljiljana.medovic@gmail.com",
      icon: '/images/envelope-icon.svg'
    },
    {
      name: "Marija Bursaća 8, Niš",
      info: "https://www.google.com/maps/place/Nail+Design+Ljiljana+Medovi%C4%87/@43.3133352,21.8964168,15z/data=!4m2!3m1!1s0x0:0x8f2e902bfc6d7ccb?sa=X&ved=1t:2428&ictx=111",
      icon: '/images/map-marker-icon.svg'
    },
  ];
  return (
    <footer>
      <div className="wrapper">
        <div className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-6 py-[50px] lg:py-[100px] border-b border-gray-300">
          <div className="max-w-[350px]">
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
                    className="h-[50px] w-[50px] flex justify-center items-center rounded-full border border-black text-xl"
                    href={link.url}
                    target="_blank"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Brzi linkovi</p>
          <ul className="flex flex-wrap gap-2 sm:flex-col">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Usluge</p>
          <ul className="flex flex-wrap gap-2 sm:flex-col">
            {services.map((service, index) => (
              <li key={index}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
          </div>
          <ul className="space-y-2">
            <li className="font-medium">Kontakt informacije</li>
            {contactInfo.map((contact, index) => (
              <li key={index}>
                <a href={contact.info} target="_blank">
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>
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
              <Link>Politika Privatnosti</Link>
            </li>
            <li>
              <Link>Uslovi Koriscenja</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

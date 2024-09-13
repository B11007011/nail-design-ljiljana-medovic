import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data";
import Menu from './Menu';

export default function Navbar() {

  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative bg-offWhite top-0 left-0 right-0 z-10">
      <div className="wrapper py-4 flex items-center justify-between  text-black lg:py-6">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Nail Design Ljiljana Medović logo" />
        </Link>
        <nav>
        <div className="hidden md:flex items-center gap-6">
            {navLinks.map((navLink, index) => (
              <div key={index} className="group relative capitalize">
                <Link to={navLink.url}>{navLink.name}</Link>
                {(location.pathname === navLink.url || 
                  (navLink.url === '/usluge' && location.pathname.startsWith('/usluge'))) && (
                  <div className="absolute -bottom-1 bg-black h-[1px] w-5"></div>
                )}
                <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
              </div>
            ))}
            <a href="tel:+381641162977" className="btn" target="_blank">Zakažite Termin</a>
          </div>
        </nav>
        <button onClick={() => setOpen(!open)} aria-label="Open menu" className="w-8 h-8 flex justify-center flex-col space-y-[7px] items-end group md:hidden">
          <div className="h-[0.1rem] w-6 bg-black group-hover:w-8 duration-500"></div>
          <div className="h-[0.1rem] w-8 bg-black group-hover:w-8 duration-500"></div>
          <div className="h-[0.1rem] w-4 bg-black group-hover:w-8 duration-500"></div>
        </button>
      </div>
    </header>
    <Menu open={open} setOpen={setOpen} />
    </>
  );
}

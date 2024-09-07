import BreadCrumb from "../components/BreadCrumb";
import { contactInfo } from "../data";


export default function ContactPage() {
  return (
    <>
      <BreadCrumb page="Kontakt"/>
      <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper text-center">
          <div className="max-w-3xl mx-auto mb-[50px]">
          <h2 className="mb-6 sm:mb-12">kontaktirajte nas</h2>
          <p>Bilo da imate pitanja o našim uslugama, želite da saznate više o našem timu stručnjaka, ili da zakažete svoj sledeći termin, ovde smo da vam pomognemo. Vaše zadovoljstvo je naš prioritet, i radujemo se svakom vašem javljanju!</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((item, index) => (
            <a href={item.info} className="h-[200px] flex items-center justify-center flex-col gap-2 border border-gray-300 cursor-pointer" key={index} target="_blank">
              <img className="w-[40px] h-[40px]" src={item.icon} alt="" />
              <h4>{item.type}</h4>
              <p>{item.name}</p>
            </a>
          ))}
          <div className="md:col-span-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.0451245063146!2d21.896403799999995!3d43.3133148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0af9ae34807%3A0xc7ae8abfba214190!2z0JzQsNGA0LjRmNC1INCR0YPRgNGB0LDRmyA4LCDQndC40YggMTgxMDU!5e0!3m2!1ssr!2srs!4v1725195935022!5m2!1ssr!2srs" width="100%" height="450" loading="lazy"></iframe>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

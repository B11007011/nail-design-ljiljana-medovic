import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cta from "./sections/Cta";
import ServicesPageDetails from "./pages/ServicesPageDetails";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  
  const location = useLocation(); 

  return (
    <>
    <ScrollToTop/>
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/usluge" element={<ServicesPage />} />
        <Route path="/o-nama" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/usluge/:title" element={<ServicesPageDetails />} />
      </Routes>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App

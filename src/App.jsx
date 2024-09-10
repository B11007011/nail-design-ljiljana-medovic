import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import ServicesPageDetails from "./pages/ServicesPageDetails";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from 'framer-motion';
import PageAnimation from "./components/PageAnimations";


function App() {

  const location = useLocation(); 

  return (
    <>
    <ScrollToTop/>
      <Navbar/>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageAnimation><HomePage /></PageAnimation>} />
        <Route path="/usluge" element={<PageAnimation><ServicesPage /></PageAnimation>} />
        <Route path="/o-nama" element={<PageAnimation><AboutPage /></PageAnimation>} />
        <Route path="/kontakt" element={<PageAnimation><ContactPage /></PageAnimation>} />
        <Route path="/usluge/:title" element={<PageAnimation><ServicesPageDetails /></PageAnimation>} />
      </Routes>
      </AnimatePresence>
    
    </>
  )
}

export default App

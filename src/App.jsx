import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ServicesPageDetails from "./pages/ServicesPageDetails";
import { AnimatePresence } from 'framer-motion';
import PageAnimation from "./components/PageAnimations";

import ScrollToTop from "./components/ScrollToTop";


function App() {

  const location = useLocation(); 

  return (
    <>
   
      <AnimatePresence mode="wait">
      <ScrollToTop/>
    
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

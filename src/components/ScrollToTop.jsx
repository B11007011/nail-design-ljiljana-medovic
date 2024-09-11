import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animate } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const scrollAnimation = animate(window.scrollY, 0, {
        duration: 1, 
        onUpdate: (latest) => window.scrollTo(0, latest),
      });

      return scrollAnimation;
    };

    scrollToTop();
  }, [pathname]);

  return null;
}

import { useEffect, useState } from "react";
import arrow from "@/assets/arrow.svg";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-3 transition-transform duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:-translate-y-2`}
    >
      <img alt="arrow-up" src={arrow} className="-rotate-90 w-6 h-6" />
    </button>
  );
}

export default ScrollToTopButton;

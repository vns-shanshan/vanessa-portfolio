import { useEffect, useState } from "react";
import sun from "@/assets/sun.svg";
import moon from "@/assets/moon.svg";
import { Switch } from "@/components/ui/switch";

const sections = [
  "01 Home",
  "02 Skills",
  "03 Projects",
  "04 Experience",
  "05 Certifications",
  "06 Contact",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isTransparent, setIsTransparent] = useState(false);

  const transparentClass = isTransparent
    ? "bg-secondary-light/50 backdrop-filter backdrop-blur-[5px] backdrop-saturate-50"
    : "bg-secondary-light ";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 flex justify-around items-center    ${transparentClass}`}
    >
      <div className="my-4">
        <h1 className="text-primary-light font-playfair-display font-bold l:text-3xl m:text-2xl s:text-xl">
          Huijing Jin
        </h1>
      </div>

      <div className="l:flex m:hidden s:hidden">
        <ul className="flex gap-6 text-primary-light font-dm-sans font-medium text-m">
          {sections.map((section) => (
            <button className="cursor-pointer hover:text-accent-light transition">
              {section}
            </button>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="l:hidden flex flex-col gap-2 p-2 relative group"
        >
          {/* First Line */}
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 origin-center group-hover:rotate-15 ${
              isMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></div>

          {/* Second Line */}
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 group-hover:-rotate-15 ${
              isMenuOpen ? "opacity-0 translate-x-3" : ""
            }`}
          ></div>
        </button>
        <img alt="sun" src={sun} className="w-5 h-5" />
        <Switch className="border-1 border-primary-light data-[state=unchecked]:bg-text-light data-[state=checked]:bg-accent-light" />

        <img alt="moon" src={moon} className="w-4 h-5 ml-1" />
      </div>
    </nav>
  );
}

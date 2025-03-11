import sun from "@/assets/sun.svg";
import sunDark from "@/assets/sun-dark.svg";

import moon from "@/assets/moon.svg";
import moonDark from "@/assets/moon-dark.svg";

import { Switch } from "@/components/ui/switch";
import HamburgerMenu from "@/components/features/Navbar/HamburgerMenu";
import { useState, useEffect } from "react";

const sections = [
  "01 Home",
  "02 Skills",
  "03 Projects",
  "04 Experience",
  "05 Certifications",
  "06 Contact",
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 flex justify-around items-center bg-secondary-light dark:bg-secondary-dark z-50`}
    >
      <div className="my-4">
        <h1 className="text-primary-light dark:text-accent-light font-playfair-display font-bold l:text-3xl m:text-2xl s:text-xl">
          Huijing Jin
        </h1>
      </div>

      <div className="l:flex m:hidden s:hidden">
        <ul className="flex gap-6 text-primary-light dark:text-accent-light font-dm-sans font-medium text-m">
          {sections.map((section, i) => {
            const sectionId = section.split(" ")[1].toLowerCase();

            return (
              <button
                key={i}
                className="cursor-pointer hover:text-accent-light dark:hover:text-primary-dark transition"
                onClick={() => handleScroll(sectionId)}
              >
                {section}
              </button>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <HamburgerMenu sections={sections} />

        <div className="flex gap-2">
          {!isDarkMode ? (
            <img alt="sun" src={sun} className="w-5 h-5 " />
          ) : (
            <img alt="sun dark" src={sunDark} className="w-5 h-5 " />
          )}
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleTheme}
            className=" data-[state=unchecked]:bg-text-light data-[state=checked]:bg-accent-light"
          />
          {!isDarkMode ? (
            <img alt="moon" src={moon} className="w-4 h-5 ml-1" />
          ) : (
            <img alt="moon dark" src={moonDark} className="w-4 h-5 ml-1 " />
          )}
        </div>
      </div>
    </nav>
  );
}

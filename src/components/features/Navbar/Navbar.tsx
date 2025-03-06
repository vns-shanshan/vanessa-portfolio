import sun from "@/assets/sun.svg";
import moon from "@/assets/moon.svg";
import { Switch } from "@/components/ui/switch";
import HamburgerMenu from "@/components/features/Navbar/HamburgerMenu";

const sections = [
  "01 Home",
  "02 Skills",
  "03 Projects",
  "04 Experience",
  "05 Certifications",
  "06 Contact",
];

export default function Navbar() {
  return (
    <nav
      className={`fixed w-full top-0 flex justify-around items-center bg-secondary-light`}
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
        <HamburgerMenu sections={sections} />

        <div className="flex gap-2">
          <img alt="sun" src={sun} className="w-5 h-5" />
          <Switch className="border-1 border-primary-light data-[state=unchecked]:bg-text-light data-[state=checked]:bg-accent-light" />

          <img alt="moon" src={moon} className="w-4 h-5 ml-1" />
        </div>
      </div>
    </nav>
  );
}

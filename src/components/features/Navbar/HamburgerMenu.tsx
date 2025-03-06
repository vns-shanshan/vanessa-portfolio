import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

type HamburgerMenuProps = {
  sections: string[];
};

export default function HamburgerMenu({ sections }: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      {/* Your Custom Button */}

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="l:hidden flex flex-col gap-2.5 p-4 relative group"
      >
        {/* First Line */}
        <div
          className={`w-8 h-1 bg-primary-light rounded-full transition-all duration-300 origin-center group-hover:rotate-15 ${
            isMenuOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></div>

        {/* Second Line */}
        <div
          className={`w-8 h-1 bg-primary-light rounded-full transition-all duration-300 group-hover:-rotate-15 ${
            isMenuOpen ? "opacity-0 translate-x-3" : ""
          }`}
        ></div>
      </button>

      {/* Your Sheet Content */}
      <SheetContent
        side="right"
        className="m:w-[300px] s:w-[200px] bg-secondary-light"
      >
        {/* Close button (reusing your two-line button) */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-4 flex flex-col gap-2.5 p-4 group"
        >
          {/* First Line rotated */}
          <div className="w-8 h-1 bg-primary-light rounded-full transition-all duration-300 origin-center rotate-45 translate-y-2"></div>
          {/* Second Line rotated */}
          <div className="w-8 h-1 bg-primary-light rounded-full transition-all duration-300 origin-center -rotate-45 -translate-y-1"></div>
        </button>

        {/* Drawer content */}
        <div className="flex justify-center m:mt-40 s:mt-24 p-4">
          <ul className="flex flex-col m:gap-20 s:gap-12 items-start text-primary-light font-dm-sans m:font-medium s:font-normal m:text-l s:text-m">
            {sections.map((section) => (
              <button>{section}</button>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

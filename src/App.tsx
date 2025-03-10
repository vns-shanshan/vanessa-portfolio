import Navbar from "@/components/features/Navbar/Navbar";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

import ScrollToTopButton from "@/components/ui/ScrollToTop";

function App() {
  return (
    <div className="w-full bg-primary-light">
      <Navbar />

      <main className="flex flex-col l:gap-36 gap-20 w-[60%] mx-auto ">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <ScrollToTopButton />
    </div>
  );
}

export default App;

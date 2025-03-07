import Navbar from "@/components/features/Navbar/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

function App() {
  return (
    <div className="w-full bg-primary-light">
      <Navbar />

      <main className="flex flex-col l:gap-36 gap-20 w-[60%] mx-auto">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;

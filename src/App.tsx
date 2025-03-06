import Navbar from "@/components/features/Navbar/Navbar";
import Hero from "@/sections/Hero";

function App() {
  return (
    <div className="w-full">
      <Navbar />

      <main className="w-[60%] mx-auto">
        <Hero />
      </main>
    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technicals from "./components/Technicals";




function App() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Technicals />
      <Projects />
    </div>
  );
}

export default App;

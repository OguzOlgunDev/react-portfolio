import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import LanguageFadeWrapper from "./LanguageFadeWrapper";
import Projects from "./components/Projects";

function App() {
  return (
    <LanguageFadeWrapper>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </LanguageFadeWrapper>
  );
}

export default App;

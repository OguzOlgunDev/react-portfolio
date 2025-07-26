import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import LanguageFadeWrapper from "./LanguageFadeWrapper";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  return (
    <LanguageFadeWrapper>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </LanguageFadeWrapper>
  );
}

export default App;

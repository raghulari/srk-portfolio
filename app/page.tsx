import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Explorations from "./components/Explorations";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="grain flex-1">
      <Hero />
      <About />
      <Projects />
      <Explorations />
      <Skills />
      <Learning />
      <Contact />
    </main>
  );
}

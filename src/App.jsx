import { Helmet } from "react-helmet";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>jerry mbenda-leca</title>
        <meta
          name="description"
          content="Portfolio professionnel d'un développeur frontend. Découvrez mes projets, compétences et expériences en développement web moderne."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;

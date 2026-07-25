import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Loader />
      <ParticleBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;


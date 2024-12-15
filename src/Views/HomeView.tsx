import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const HomeView = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-primary">
        <Hero />
        <About />
      </div>
      <div className="overflow-hidden bg-black">
        <Projects />
      </div>
      <div className="overflow-hidden bg-primary">
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomeView;

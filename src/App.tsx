import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-primary">
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

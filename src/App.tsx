import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Students from './components/Students';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Leaders from './components/Leaders';
import Appreciation from './components/Appreciation';
import Developer from './components/Developer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Students />
        <Gallery />
        <Projects />
        <Timeline />
        <Leaders />
        <Appreciation />
        <Developer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
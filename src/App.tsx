import React from 'react';
import '@fontsource/poppins/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
// import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <CaseStudies />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}

export default App;
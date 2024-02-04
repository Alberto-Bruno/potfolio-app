import React from "react";
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Services from './sections/services/Services';
import Projects from './sections/projects/Projects';
import Experience from './sections/experience/Experience';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Nav from './sections/nav/Nav';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Nav />
    </main>
  );
};

export default App;

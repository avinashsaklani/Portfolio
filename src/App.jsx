import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Achievements from "./components/achievements/Achievements";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Achievements />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <Nav />
    </>
  );
};

export default App;

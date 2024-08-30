import React from "react";
import Aboutme from '../Components/Aboutme';
import Skills from '../Components/Skills';
import Service from '../Components/Service';
import Contact from '../Components/Contact';
import Homeslider from "../Components/Homeslider";
import Footer from "../Components/Footer";
const Homepage = () => {
  return (
    <>
      <Homeslider/>
      <Aboutme/>
      <Service/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Homepage;

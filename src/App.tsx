import React from "react";
import Navbar from "./components/Layout/Navbar";
import Banner from "./components/Landing/Banner";
import About from "./components/Landing/About";
import Services from "./components/Landing/Services";
import CallToAction from "./components/Landing/CallToAction";
import Contact from "./components/Landing/Contact";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default App;

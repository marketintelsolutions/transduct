import React from "react";
import Navbar from "./components/Layout/Navbar";
import Banner from "./components/Landing/Banner";
import About from "./components/Landing/About";
import Services from "./components/Landing/Services";
import CallToAction from "./components/Landing/CallToAction";
import Contact from "./components/Landing/Contact";
import Footer from "./components/Landing/Footer";
import Products from "./components/Landing/Products";

const App = () => {
  return (
    <div
      id="home"
      className=""
      // style={{
      //   backgroundImage: "url(hero.jpg)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <img
        src="/hero.jpg"
        alt="hero"
        className="fixed top-0 left-0 w-full h-full z-[-1]"
      />
      <Navbar />
      <Banner />
      <About />
      <Products />
      <Services />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

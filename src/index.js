
import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/Footer.js";
import Hero from "./components/hero/Hero.js";
import Navbar from "./components/navbar/Navbar.js";
import Services from "./components/services/Services.js";
import Tours from "./components/tour/Tours.js";
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
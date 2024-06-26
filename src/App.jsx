import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Experience,
  About,
  Contact,
  Navbar,
  Tech,
  Works,
  Hero,
  StarsCanvas,
} from "./components";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;

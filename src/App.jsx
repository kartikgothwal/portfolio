import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Experience,
  About,
  Contact,
  Navbar,
  Tech,
  Works,
  Hero,
  StarsCanvas,
  GitHubActivity,
} from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
                  <Hero />
                </div>
                <Works />
                <Experience />
                <Tech />
                <About />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />
          <Route path="/github" element={<GitHubActivity />} />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;

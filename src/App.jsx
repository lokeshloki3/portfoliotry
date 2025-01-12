import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Mobile from "./components/Mobile";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Tech from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Mobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Tech />
      </div>
    </Router>
  );
}

export default App;

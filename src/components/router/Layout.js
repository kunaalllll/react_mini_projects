import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./items/Navbar";
import Home from "./items/Home";
import About from "./items/About";
import Contact from "./items/Contact";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;

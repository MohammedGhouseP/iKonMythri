import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Service from "./Service";
import Blog from "./Blog";
import Navbar from "./Navbar"; // Importing Navbar
import Contact from "./Contact";
import Footer from "./Footer";
import Apply from "./Apply";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resumes from "./components/Resumes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-fonts">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resumes />
      <Contact />
      <Footer />
    </main>
  );
}